"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock AI response function (replace with actual API call)
const getAICourseStructure = async (
  title: string,
  goal: string,
  credits: number,
  cos: number
) => {
  // Simulating API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock response
  return {
    title,
    description: `This is an AI-generated description for ${title}.`,
    objectives: Array.from(
      { length: cos },
      (_, i) => `CO${i + 1}: Objective ${i + 1}`
    ),
    modules: [
      {
        title: "Module 1",
        duration: "2 Weeks",
        topics: ["Topic 1", "Topic 2", "Topic 3"],
      },
      {
        title: "Module 2",
        duration: "3 Weeks",
        topics: ["Topic 4", "Topic 5", "Topic 6"],
      },
    ],
    assessment: [
      { type: "Assignments", weight: "30%" },
      { type: "Midterm Exam", weight: "30%" },
      { type: "Final Project", weight: "40%" },
    ],
  };
};

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [credits, setCredits] = useState(3);
  const [cos, setCos] = useState(5);
  const [courseStructure, setCourseStructure] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const structure = await getAICourseStructure(title, goal, credits, cos);
    setCourseStructure(structure);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="title">Course Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="goal">Course Goal</Label>
          <Textarea
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="credits">Number of Credits</Label>
          <Input
            id="credits"
            type="number"
            value={credits}
            onChange={(e) => setCredits(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <Label htmlFor="cos">Number of Course Objectives (COs)</Label>
          <Input
            id="cos"
            type="number"
            value={cos}
            onChange={(e) => setCos(Number(e.target.value))}
            required
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Course Structure"}
        </Button>
      </form>

      {courseStructure && (
        <Card>
          <CardHeader>
            <CardTitle>{courseStructure.title}</CardTitle>
            <CardDescription>{courseStructure.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Course Objectives:</h3>
            <ul className="list-disc pl-5 mb-4">
              {courseStructure.objectives.map((obj: string, index: number) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
            <h3 className="font-semibold mb-2">Modules:</h3>
            {courseStructure.modules.map((module: any, index: number) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium">
                  {module.title} ({module.duration})
                </h4>
                <ul className="list-disc pl-5">
                  {module.topics.map((topic: string, topicIndex: number) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
            <h3 className="font-semibold mb-2">Assessment:</h3>
            <ul className="list-disc pl-5">
              {courseStructure.assessment.map((item: any, index: number) => (
                <li key={index}>
                  {item.type}: {item.weight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
