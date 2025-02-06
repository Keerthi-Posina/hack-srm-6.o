import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Clock, Target, Trophy } from "lucide-react";

// Mock data - in a real app this would come from your backend
const activeCourses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    progress: 65,
    nextMilestone: "Data Structures",
    completedModules: 13,
    totalModules: 20,
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    progress: 45,
    nextMilestone: "Linear Algebra",
    completedModules: 9,
    totalModules: 20,
  },
  {
    id: 3,
    title: "Digital Electronics",
    progress: 30,
    nextMilestone: "Boolean Algebra",
    completedModules: 6,
    totalModules: 20,
  },
];

const upcomingAssessments = [
  {
    id: 1,
    title: "Data Structures Quiz",
    course: "Introduction to Computer Science",
    dueDate: "2024-02-15",
  },
  {
    id: 2,
    title: "Linear Algebra Test",
    course: "Advanced Mathematics",
    dueDate: "2024-02-18",
  },
];

export default function StudentDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Overview Cards */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Active Courses
            </CardTitle>
            <CardDescription>Your current enrolled courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{activeCourses.length}</div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Average Progress
            </CardTitle>
            <CardDescription>Across all courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.round(
                activeCourses.reduce(
                  (acc, course) => acc + course.progress,
                  0
                ) / activeCourses.length
              )}
              %
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Completed Modules
            </CardTitle>
            <CardDescription>Total modules completed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {activeCourses.reduce(
                (acc, course) => acc + course.completedModules,
                0
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Courses */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>
              Track your progress in each course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-6">
                {activeCourses.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{course.title}</h4>
                      <span className="text-sm text-muted-foreground">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} />
                    <p className="text-sm text-muted-foreground">
                      Next: {course.nextMilestone}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Upcoming Assessments */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Upcoming Assessments
            </CardTitle>
            <CardDescription>Your scheduled tests and quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-6">
                {upcomingAssessments.map((assessment) => (
                  <div
                    key={assessment.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0"
                  >
                    <div>
                      <h4 className="font-medium">{assessment.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {assessment.course}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Due: {new Date(assessment.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
