"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Sample learning path data (replace with actual data)
const learningPathData = {
  modules: [
    {
      steps: [
        {
          content: [
            { id: "c1", title: "Intro to Data Warehousing", type: "video" },
          ],
        },
      ],
    },
  ],
};

interface NotesState {
  [key: string]: string;
}

interface RecordingState {
  id: string;
  recognizer: SpeechRecognition;
}

export default function SpeechToTextNotes() {
  const [notes, setNotes] = useState<NotesState>({});
  const [recording, setRecording] = useState<RecordingState | null>(null);
  const SpeechRecognitionAPI =
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition
      : null;

  const handleNoteChange = (id: string, value: string) => {
    setNotes((prevNotes) => ({ ...prevNotes, [id]: value }));
  };

  const startRecording = (id: string) => {
    if (!SpeechRecognitionAPI) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognizer = new SpeechRecognitionAPI();
    recognizer.continuous = true;
    recognizer.interimResults = true;
    recognizer.lang = "en-US";

    recognizer.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setNotes((prevNotes) => ({
        ...prevNotes,
        [id]: (prevNotes[id] || "") + " " + transcript,
      }));
    };

    recognizer.onerror = (event) =>
      console.error("Speech recognition error:", event.error);
    recognizer.start();
    setRecording({ id, recognizer });
  };

  const stopRecording = () => {
    if (recording) {
      recording.recognizer.stop();
      setRecording(null);
    }
  };

  useEffect(() => {
    return () => {
      if (recording) {
        recording.recognizer.stop();
      }
    };
  }, [recording]);

  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-6">
        <CardHeader>
          <CardTitle>My Notes</CardTitle>
          <CardDescription>
            Take notes while watching videos (Voice-enabled)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-300px)]">
            {learningPathData.modules.map((module) =>
              module.steps.map((step) =>
                step.content
                  .filter((content) => content.type === "video")
                  .map((video) => (
                    <div key={video.id} className="mb-6">
                      <h4 className="text-sm font-medium mb-2">
                        {video.title}
                      </h4>
                      <Textarea
                        placeholder="Take notes for this video..."
                        value={notes[video.id] || ""}
                        onChange={(e) =>
                          handleNoteChange(video.id, e.target.value)
                        }
                        className="min-h-[100px]"
                      />
                      <div className="flex gap-2 mt-2">
                        {recording?.id === video.id ? (
                          <Button onClick={stopRecording} variant="destructive">
                            Stop Recording
                          </Button>
                        ) : (
                          <Button onClick={() => startRecording(video.id)}>
                            Start Recording
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
              )
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
