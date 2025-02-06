"use client";

import SpeechToTextNotes from "@/components/SpeechToTextNotes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  FileText,
  Video,
  X,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { learningPaths } from "./data";

// Define interfaces for our data structure
interface Content {
  id: string;
  type: "video" | "article";
  title: string;
  url: string;
  duration?: string;
  readTime?: string;
  content?: string;
}

interface Step {
  id: string;
  title: string;
  completed: boolean;
  content: Content[];
}

interface Module {
  id: string;
  title: string;
  completed: boolean;
  steps: Step[];
}

interface LearningPath {
  title: string;
  description: string;
  progress: number;
  modules: Module[];
}

interface NotesState {
  [key: string]: string;
}

// Content viewer components with proper typing
interface ContentViewerProps {
  content: Content;
}

const VideoViewer: React.FC<ContentViewerProps> = ({ content }) => (
  <div className="space-y-4">
    <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center">
      <Video className="h-16 w-16 text-slate-400" />
      <span className="ml-2 text-slate-600">Video Player Placeholder</span>
    </div>
    <div>
      <h3 className="font-medium mb-2">Description</h3>
      <p className="text-sm text-muted-foreground">
        Duration: {content.duration}
      </p>
    </div>
  </div>
);

const ArticleViewer: React.FC<ContentViewerProps> = ({ content }) => (
  <div className="space-y-4">
    <div className="prose prose-sm max-w-none">
      <h3 className="font-medium mb-2">{content.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Read time: {content.readTime}
      </p>
      <p>{content.content || "Content not available"}</p>
    </div>
  </div>
);

export default function LearningPath() {
  const params = useParams();
  const courseId = params?.courseId as string;
  const [notes, setNotes] = useState<NotesState>({});
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [learningPathData, setLearningPathData] = useState<LearningPath | null>(
    null
  );

  useEffect(() => {
    if (courseId && courseId in learningPaths) {
      setLearningPathData(learningPaths[courseId]);
    }
  }, [courseId]);

  const handleNoteChange = (contentId: string, note: string) => {
    setNotes((prev) => ({
      ...prev,
      [contentId]: note,
    }));
  };

  const handleViewContent = (content: Content) => {
    setSelectedContent(content);
    setDialogOpen(true);
  };

  if (!learningPathData) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{learningPathData.title}</h1>
        <p className="text-muted-foreground mt-2">
          {learningPathData.description}
        </p>
        <div className="mt-4">
          <div className="flex justify-between mb-2 text-sm">
            <span>Overall Progress</span>
            <span className="text-primary">{learningPathData.progress}%</span>
          </div>
          <Progress value={learningPathData.progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Path Steps */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Learning Path</CardTitle>
              <CardDescription>
                Follow these steps to complete the course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {learningPathData.modules.map((module) => (
                  <AccordionItem key={module.id} value={`module-${module.id}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        {module.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span>{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {module.steps.map((step) => (
                        <div key={step.id} className="pl-8 py-2">
                          <div className="flex items-center gap-3 mb-2">
                            {step.completed ? (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            ) : (
                              <Circle className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className="font-medium">{step.title}</span>
                          </div>
                          <div className="space-y-3 pl-7">
                            {step.content.map((content) => (
                              <Card key={content.id} className="p-3">
                                <div className="flex items-center gap-3">
                                  {content.type === "video" ? (
                                    <Video className="h-4 w-4 text-blue-500" />
                                  ) : (
                                    <FileText className="h-4 w-4 text-green-500" />
                                  )}
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium">
                                      {content.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                      {content.type === "video"
                                        ? `Duration: ${content.duration}`
                                        : `Read time: ${content.readTime}`}
                                    </p>
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleViewContent(content)}
                                  >
                                    View
                                  </Button>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Notes Section */}
        <SpeechToTextNotes />
      </div>

      {/* Content Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {selectedContent?.title}
              <DialogClose className="h-4 w-4 opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
                <X className="h-4 w-4" />
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedContent?.type === "video" ? (
              <VideoViewer content={selectedContent} />
            ) : selectedContent ? (
              <ArticleViewer content={selectedContent} />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
