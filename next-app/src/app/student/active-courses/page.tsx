import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  BookOpen,
  Code,
  Database,
  FlaskRound,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import { CoursePlanDialog } from "@/components/CoursePlanDialog";

// Mock data for active courses
const activeCourses = [
  {
    id: 1,
    title: "DATA WAREHOUSING & MINING",
    description:
      "Learn about data warehousing concepts, ETL processes, and data mining techniques",
    progress: 50,
    icon: Code,
    totalModules: 10,
    completedModules: 5,
    nextMilestone: "OLAP and Data Cube Computation",
    coursePlan: {
      description:
        "This course introduces fundamental concepts of data warehousing and mining...",
      objectives: [
        "Understand data warehouse architecture",
        "Learn data mining techniques",
        "Master OLAP and ETL processes",
      ],
      modules: [
        {
          title: "Introduction to Data Warehousing",
          duration: "2 Weeks",
          topics: [
            "Data Warehouse Architecture",
            "ETL Processes",
            "OLAP vs OLTP",
          ],
        },
        // ... Add more modules if needed
      ],
      assessment: [
        {
          type: "Assignments",
          weight: "30%",
          description: "Data warehouse design and implementation tasks",
        },
        // ... Add more assessments if needed
      ],
      tools: ["SQL", "Pentaho", "Tableau"],
      textbooks: [
        "Data Warehousing Fundamentals",
        "Introduction to Data Mining",
      ],
    },
    // Added extra field for supporting view more
  },
  {
    id: 2,
    title: "JAVA FULL STACK DEVELOPMENT + MICROSERVICES",
    description:
      "Master Java Full Stack development with Microservices architecture",
    progress: 70,
    icon: Code,
    totalModules: 12,
    completedModules: 8,
    nextMilestone: "Spring Boot Web MVC CRUD Application",
    coursePlan: {
      description:
        "A comprehensive course covering Java Full Stack development and microservices...",
      objectives: [
        "Develop full-stack applications using Java and React",
        "Implement microservices with Spring Boot",
        "Manage API Gateway and Eureka Services",
      ],
      modules: [
        {
          title: "Maven and Hibernate",
          duration: "3 Weeks",
          topics: [
            "Maven Build Lifecycle",
            "Hibernate CRUD Operations",
            "HQL & HCQL",
          ],
        },
        // ... Add more modules if needed
      ],
      assessment: [
        {
          type: "Projects",
          weight: "50%",
          description: "Full-stack development projects",
        },
        // ... Add more assessments if needed
      ],
      tools: ["Java", "Spring Boot", "React"],
      textbooks: ["Spring in Action", "Java Persistence with Hibernate"],
    },
    // Added extra field for supporting view more
  },
  {
    id: 3,
    title: "DATA DRIVEN ARTIFICIAL INTELLIGENT SYSTEMS",
    description:
      "Explore AI and data science techniques for intelligent systems",
    progress: 40,
    icon: Code,
    totalModules: 10,
    completedModules: 4,
    nextMilestone: "Supervised and Unsupervised Learning",
    coursePlan: {
      description:
        "An introduction to AI and data science concepts, techniques, and applications...",
      objectives: [
        "Understand heuristic search techniques",
        "Apply machine learning algorithms",
        "Implement deep learning for AI applications",
      ],
      modules: [
        {
          title: "Introduction to AI and Data Science",
          duration: "2 Weeks",
          topics: ["AI Applications", "Intelligent Agents", "Heuristic Search"],
        },
        // ... Add more modules if needed
      ],
      assessment: [
        {
          type: "Exams",
          weight: "40%",
          description: "Theory and practical AI assessments",
        },
        // ... Add more assessments if needed
      ],
      tools: ["Python", "TensorFlow", "Keras"],
      textbooks: [
        "Artificial Intelligence: A Modern Approach",
        "Deep Learning with Python",
      ],
    },
    // Added extra field for supporting view more
  },
  {
    id: 4,
    title: "ADAPTIVE SOFTWARE ENGINEERING",
    description:
      "Learn modern software engineering practices and methodologies",
    progress: 60,
    icon: Code,
    totalModules: 10,
    completedModules: 6,
    nextMilestone: "Agile Methodologies and Scrum",
    coursePlan: {
      description:
        "A deep dive into software engineering principles and agile methodologies...",
      objectives: [
        "Understand software development life cycle",
        "Apply agile and scrum methodologies",
        "Implement risk management strategies",
      ],
      modules: [
        {
          title: "Software Development Processes",
          duration: "3 Weeks",
          topics: [
            "Software Engineering Principles",
            "SDLC Models",
            "Software Myths",
          ],
        },
        // ... Add more modules if needed
      ],
      assessment: [
        {
          type: "Assignments",
          weight: "30%",
          description: "Software engineering case studies",
        },
        // ... Add more assessments if needed
      ],
      tools: ["JIRA", "Git", "Jenkins"],
      textbooks: [
        "Software Engineering: A Practitioner's Approach",
        "Agile Software Development",
      ],
    },
    // Added extra field for supporting view more
  },
  {
    id: 5,
    title: "COMPUTATIONAL THINKING FOR OBJECT ORIENTED DESIGN",
    description: "Develop object-oriented design and programming skills",
    progress: 30,
    icon: Code,
    totalModules: 10,
    completedModules: 3,
    nextMilestone: "Inheritance and Polymorphism",
    coursePlan: {
      description:
        "An introduction to computational thinking and object-oriented programming in Java...",
      objectives: [
        "Understand object-oriented principles",
        "Apply design patterns in Java",
        "Develop event-driven applications",
      ],
      modules: [
        {
          title: "Introduction to Object-Oriented Programming",
          duration: "2 Weeks",
          topics: ["Abstraction", "Encapsulation", "Polymorphism"],
        },
        // ... Add more modules if needed
      ],
      assessment: [
        {
          type: "Projects",
          weight: "60%",
          description: "Java-based programming projects",
        },
        // ... Add more assessments if needed
      ],
      tools: ["Java", "IntelliJ IDEA", "Maven"],
      textbooks: [
        "Effective Java",
        "Design Patterns: Elements of Reusable Object-Oriented Software",
      ],
    },
    // Added extra field for supporting view more
  },
];

export default function ActiveCourses() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Active Courses</h1>
        <p className="text-muted-foreground mt-2">
          Continue your learning journey with these courses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <course.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Course Progress</span>
                    <span className="text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Completed {course.completedModules} of {course.totalModules}{" "}
                    modules
                  </p>
                  <p className="text-sm">
                    Next up:{" "}
                    <span className="font-medium">{course.nextMilestone}</span>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Link
                href={`/student/courses/${course.id}/learning-path`}
                className="w-full"
              >
                <Button className="w-full">
                  <span>View Learning Path</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <CoursePlanDialog course={course} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
