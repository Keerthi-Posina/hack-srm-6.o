import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";

interface CoursePlanProps {
  course: {
    id: number;
    title: string;
    coursePlan: {
      description: string;
      objectives: string[];
      modules: Array<{
        title: string;
        duration: string;
        topics: string[];
      }>;
      assessment: Array<{
        type: string;
        weight: string;
        description: string;
      }>;
      tools: string[];
      textbooks: string[];
    };
  };
}

export function CoursePlanDialog({ course }: CoursePlanProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-2">
          <Info className="mr-2 h-4 w-4" />
          View Course Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {course.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-100px)] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">Course Description</h3>
              <p className="text-muted-foreground">
                {course.coursePlan.description}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Course Objectives</h3>
              <ul className="list-disc pl-6 space-y-2">
                {course.coursePlan.objectives.map((objective, index) => (
                  <li key={index} className="text-muted-foreground">
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Course Curriculum</h3>
              <div className="space-y-4">
                {course.coursePlan.modules.map((module, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">
                      Module {index + 1}: {module.title} ({module.duration})
                    </h4>
                    <ul className="list-disc pl-6">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-muted-foreground">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <div className="space-y-2">
                {course.coursePlan.assessment.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="font-medium min-w-[120px]">
                      {item.type} ({item.weight}):
                    </span>
                    <span className="text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                Tools and Technologies
              </h3>
              <ul className="list-disc pl-6">
                {course.coursePlan.tools.map((tool, index) => (
                  <li key={index} className="text-muted-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                Textbooks/References
              </h3>
              <ul className="list-disc pl-6">
                {course.coursePlan.textbooks.map((book, index) => (
                  <li key={index} className="text-muted-foreground">
                    {book}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
