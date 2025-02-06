import io
import os
from typing import Optional

import google.generativeai as genai
from PIL import Image
from agno.agent import Agent
from agno.models.groq import Groq
from agno.tools.duckduckgo import DuckDuckGoTools
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi import UploadFile, File, Form
from pydantic import BaseModel

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# Configure Gemini API
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY not found in .env file")

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.0-flash')

print("Gemini model initialized successfully.")


@app.post("/ask")
async def ask_question(
        question: str = Form(...),
        image: Optional[UploadFile] = None
):
    try:
        print(f"Received question: {question}")

        if image:
            image_content = await image.read()
            img = Image.open(io.BytesIO(image_content))
            print("Image received and processed.")
            response = model.generate_content([question, img])
        else:
            response = model.generate_content(question)

        print("Response generated successfully.")
        return {"response": response.text}

    except Exception as e:
        print(f"Error in /ask: {str(e)}")
        return {"error": str(e)}


@app.get("/")
async def root():
    return {"message": "Welcome to Doubt Resolution API"}


@app.post("/transcribe/")
async def transcribe_audio(file: UploadFile = File(...)):
    if not file.filename.endswith('.mp3'):
        raise HTTPException(status_code=400, detail="Only MP3 files are supported")

    try:
        print(f"Received audio file: {file.filename}")

        groq_api_key = os.getenv("GROQ_API_KEY")
        if not groq_api_key:
            raise ValueError("GROQ_API_KEY not found in .env file")

        client = Groq(api_key=groq_api_key)
        print("Groq client initialized successfully.")

        file_content = await file.read()
        print("Audio file read successfully.")

        transcription = client.audio.transcriptions.create(
            file=(file.filename, file_content),
            model="whisper-large-v3",
            language="en",
            response_format="text"
        )

        print("Transcription generated successfully.")
        return {"transcription": transcription}

    except Exception as e:
        print(f"Error in /transcribe: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error during transcription: {str(e)}")


# Request Model for Web Search
class SearchRequest(BaseModel):
    query: str


# Response Model for Web Search
class SearchResponse(BaseModel):
    response: str
    error: Optional[str] = None


# Initialize Web Search Agent using `llama-3.3-70b-versatile`
try:
    groq_api_key = os.getenv("GROQ_API_KEY")
    if not groq_api_key:
        raise ValueError("GROQ_API_KEY not found in .env file")

    agent = Agent(
        model=Groq(id="llama-3.3-70b-versatile"),  # Updated model
        tools=[DuckDuckGoTools()],
        name="Web Searcher",
        role="Searches the web for information on a topic.",
        instructions=[
            "1. Use the DuckDuckGo search tool to find relevant information based on the user's query.",
            "2. Provide the user with the most relevant information found on the web.",
            "3. If the search tool cannot find relevant information, provide a polite message explaining why and suggest alternative search terms."
        ],
        markdown=True,
        show_tool_calls=True
    )
    print("Web Search Agent initialized successfully with llama-3.3-70b-versatile.")

except Exception as e:
    print(f"Error initializing agent: {str(e)}")
    agent = None

import re


@app.post("/search", response_model=SearchResponse)
async def search(request: SearchRequest):
    if agent is None:
        raise HTTPException(status_code=500, detail="Agent initialization failed.")

    try:
        print(f"Received search query: {request.query}")

        # Get response from the agent
        response = agent.run(request.query)

        # Extract response content
        response_text = response.content if hasattr(response, "content") else str(response)

        print(f"Raw Search Response: {response_text}")

        # Reformat the response
        formatted_response = format_search_response(response_text)

        return {"response": formatted_response}

    except Exception as e:
        print(f"Error in /search: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


def format_search_response(response_text: str):
    """
    Extracts structured news items from the raw response and formats them as JSON.
    """
    formatted_news = []

    # Extract individual news items using regex
    news_pattern = re.findall(r'\d+\.\s\*\*(.*?)\*\*\s-\s(.*?)$', response_text, re.MULTILINE)

    for title, description in news_pattern:
        formatted_news.append({"title": title.strip(), "description": description.strip()})

    # Final formatted response
    return {
        "summary": "Recent News about KL University",
        "articles": formatted_news
    }
