"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";

type QuizQuestion = {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: string;
};

export default function CreateQuizPage() {
  const [prompt, setPrompt] = useState("");
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setQuizQuestions(data);

      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Here are your quiz questions!" },
        ...data.map(
          (q: {
            question: any;
            options: { a: any; b: any; c: any; d: any };
            answer: string;
          }) => ({
            role: "ai",
            content: `${q.question}\nA: ${q.options.a}\nB: ${q.options.b}\nC: ${
              q.options.c
            }\nD: ${q.options.d}\nAnswer: ${q.answer.toUpperCase()}`,
          })
        ),
      ]);
    } catch (error) {
      console.error("Error generating quiz:", error);
    }
    setIsLoading(false);
  };

  const handleFinalizeQuiz = async () => {
    try {
      const response = await fetch("/api/save-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizQuestions }),
      });
      if (response.ok) {
        alert("Quiz saved successfully!");
      } else {
        alert("Failed to save quiz.");
      }
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Quiz Chat</h1>
      <Card className="h-[600px] flex flex-col border rounded-lg shadow-lg overflow-hidden">
        <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "ai" && (
                <Avatar className="mr-2">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg max-w-md ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.content.split("\n").map((line, idx) => (
                  <p key={idx} className="text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2">
              <Avatar className="mr-2">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm text-gray-500">Generating...</span>
              </div>
            </div>
          )}
        </ScrollArea>
        <div className="p-4 border-t flex items-center gap-3">
          <Textarea
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 resize-none border-gray-300"
          />
          <Button
            onClick={handlePromptSubmit}
            disabled={isLoading}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            {isLoading ? "Loading..." : "Send"}
          </Button>
        </div>
      </Card>
      {quizQuestions.length > 0 && (
        <Button
          onClick={handleFinalizeQuiz}
          className="w-full bg-green-600 text-white hover:bg-green-700"
        >
          Finalize Quiz
        </Button>
      )}
    </div>
  );
}
