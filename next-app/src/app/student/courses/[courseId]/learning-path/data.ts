import { LearningPath } from "./types";

export const learningPaths: Record<string, LearningPath> = {
  "1": {
    title: "DATA WAREHOUSING & MINING",
    description:
      "Learn the fundamentals of data warehousing and data mining step by step.",
    progress: 30,
    modules: [
      {
        id: "1",
        title: "Data Warehousing Basics",
        completed: false,
        steps: [
          {
            id: "1-1",
            title: "Introduction to Data Warehousing",
            completed: true,
            content: [
              {
                id: "c1",
                title: "What is a Data Warehouse?",
                type: "article",
                readTime: "6 min",
                url: "#",
              },
              {
                id: "c2",
                title: "Data Warehouse Architecture",
                type: "video",
                duration: "15 min",
                url: "#",
              },
            ],
          },
          {
            id: "1-2",
            title: "ETL Process",
            completed: false,
            content: [
              {
                id: "c3",
                title: "ETL in Data Warehousing",
                type: "video",
                duration: "12 min",
                url: "#",
              },
              {
                id: "c4",
                title: "ETL Tools Overview",
                type: "article",
                readTime: "7 min",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Data Mining Techniques",
        completed: false,
        steps: [
          {
            id: "2-1",
            title: "Introduction to Data Mining",
            completed: false,
            content: [
              {
                id: "c5",
                title: "What is Data Mining?",
                type: "video",
                duration: "18 min",
                url: "#",
              },
              {
                id: "c6",
                title: "Applications of Data Mining",
                type: "article",
                readTime: "8 min",
                url: "#",
              },
            ],
          },
          {
            id: "2-2",
            title: "Mining Algorithms",
            completed: false,
            content: [
              {
                id: "c7",
                title: "Classification Algorithms",
                type: "article",
                readTime: "10 min",
                url: "#",
              },
              {
                id: "c8",
                title: "Association Rule Mining",
                type: "video",
                duration: "16 min",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  "2": {
    title: "JAVA FULL STACK DEVELOPMENT + MICROSERVICES",
    description:
      "Master Java Full Stack development with Microservices architecture.",
    progress: 70,
    modules: [
      {
        id: "1",
        title: "Java Full Stack Basics",
        completed: false,
        steps: [
          {
            id: "1-1",
            title: "Introduction to Java Full Stack",
            completed: true,
            content: [
              {
                id: "c1",
                title: "What is Full Stack Development?",
                type: "article",
                readTime: "8 min",
                url: "#",
              },
              {
                id: "c2",
                title: "Introduction to Java",
                type: "video",
                duration: "20 min",
                url: "#",
              },
            ],
          },
          {
            id: "1-2",
            title: "Microservices Architecture",
            completed: false,
            content: [
              {
                id: "c3",
                title: "Understanding Microservices",
                type: "video",
                duration: "15 min",
                url: "#",
              },
              {
                id: "c4",
                title: "Spring Boot Overview",
                type: "article",
                readTime: "10 min",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Building Microservices",
        completed: false,
        steps: [
          {
            id: "2-1",
            title: "Spring Boot Web MVC",
            completed: false,
            content: [
              {
                id: "c5",
                title: "Creating Web MVC Application",
                type: "video",
                duration: "25 min",
                url: "#",
              },
              {
                id: "c6",
                title: "CRUD Operations in Spring Boot",
                type: "article",
                readTime: "12 min",
                url: "#",
              },
            ],
          },
          {
            id: "2-2",
            title: "Microservices with Spring Cloud",
            completed: false,
            content: [
              {
                id: "c7",
                title: "Service Discovery with Eureka",
                type: "video",
                duration: "18 min",
                url: "#",
              },
              {
                id: "c8",
                title: "API Gateway with Zuul",
                type: "article",
                readTime: "15 min",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  "3": {
    title: "DATA DRIVEN ARTIFICIAL INTELLIGENT SYSTEMS",
    description:
      "Explore AI and data science techniques for intelligent systems.",
    progress: 40,
    modules: [
      {
        id: "1",
        title: "Introduction to AI and Data Science",
        completed: false,
        steps: [
          {
            id: "1-1",
            title: "AI Basics",
            completed: true,
            content: [
              {
                id: "c1",
                title: "What is Artificial Intelligence?",
                type: "article",
                readTime: "6 min",
                url: "#",
              },
              {
                id: "c2",
                title: "Overview of Data Science",
                type: "video",
                duration: "12 min",
                url: "#",
              },
            ],
          },
          {
            id: "1-2",
            title: "Heuristic Search",
            completed: false,
            content: [
              {
                id: "c3",
                title: "AI Search Algorithms",
                type: "video",
                duration: "14 min",
                url: "#",
              },
              {
                id: "c4",
                title: "Greedy and A* Search",
                type: "article",
                readTime: "10 min",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Machine Learning Fundamentals",
        completed: false,
        steps: [
          {
            id: "2-1",
            title: "Supervised Learning",
            completed: false,
            content: [
              {
                id: "c5",
                title: "Linear Regression",
                type: "video",
                duration: "20 min",
                url: "#",
              },
              {
                id: "c6",
                title: "Classification Algorithms",
                type: "article",
                readTime: "15 min",
                url: "#",
              },
            ],
          },
          {
            id: "2-2",
            title: "Unsupervised Learning",
            completed: false,
            content: [
              {
                id: "c7",
                title: "Clustering Algorithms",
                type: "article",
                readTime: "12 min",
                url: "#",
              },
              {
                id: "c8",
                title: "Dimensionality Reduction",
                type: "video",
                duration: "18 min",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  "4": {
    title: "ADAPTIVE SOFTWARE ENGINEERING",
    description:
      "Learn modern software engineering practices and methodologies.",
    progress: 60,
    modules: [
      {
        id: "1",
        title: "Software Development Processes",
        completed: false,
        steps: [
          {
            id: "1-1",
            title: "Software Development Life Cycle",
            completed: true,
            content: [
              {
                id: "c1",
                title: "Understanding SDLC Models",
                type: "article",
                readTime: "10 min",
                url: "#",
              },
              {
                id: "c2",
                title: "Waterfall vs Agile",
                type: "video",
                duration: "18 min",
                url: "#",
              },
            ],
          },
          {
            id: "1-2",
            title: "Agile Methodologies",
            completed: false,
            content: [
              {
                id: "c3",
                title: "Introduction to Agile",
                type: "video",
                duration: "16 min",
                url: "#",
              },
              {
                id: "c4",
                title: "Scrum Framework Overview",
                type: "article",
                readTime: "12 min",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Software Engineering Best Practices",
        completed: false,
        steps: [
          {
            id: "2-1",
            title: "Risk Management in Software Projects",
            completed: false,
            content: [
              {
                id: "c5",
                title: "Risk Identification and Mitigation",
                type: "article",
                readTime: "9 min",
                url: "#",
              },
              {
                id: "c6",
                title: "Risk Management Framework",
                type: "video",
                duration: "15 min",
                url: "#",
              },
            ],
          },
          {
            id: "2-2",
            title: "Continuous Integration and Deployment",
            completed: false,
            content: [
              {
                id: "c7",
                title: "CI/CD Best Practices",
                type: "article",
                readTime: "11 min",
                url: "#",
              },
              {
                id: "c8",
                title: "Jenkins and GitLab",
                type: "video",
                duration: "17 min",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  "5": {
    title: "COMPUTATIONAL THINKING FOR OBJECT ORIENTED DESIGN",
    description: "Develop object-oriented design and programming skills.",
    progress: 30,
    modules: [
      {
        id: "1",
        title: "Introduction to OOP",
        completed: false,
        steps: [
          {
            id: "1-1",
            title: "Object-Oriented Principles",
            completed: true,
            content: [
              {
                id: "c1",
                title: "What is Object-Oriented Programming?",
                type: "article",
                readTime: "8 min",
                url: "#",
              },
              {
                id: "c2",
                title: "OOP Concepts",
                type: "video",
                duration: "15 min",
                url: "#",
              },
            ],
          },
          {
            id: "1-2",
            title: "Classes and Objects",
            completed: false,
            content: [
              {
                id: "c3",
                title: "Defining Classes and Objects",
                type: "video",
                duration: "18 min",
                url: "#",
              },
              {
                id: "c4",
                title: "Constructors and Destructors",
                type: "article",
                readTime: "10 min",
                url: "#",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Advanced OOP Concepts",
        completed: false,
        steps: [
          {
            id: "2-1",
            title: "Inheritance and Polymorphism",
            completed: false,
            content: [
              {
                id: "c5",
                title: "Understanding Inheritance",
                type: "article",
                readTime: "12 min",
                url: "#",
              },
              {
                id: "c6",
                title: "Polymorphism in OOP",
                type: "video",
                duration: "20 min",
                url: "#",
              },
            ],
          },
          {
            id: "2-2",
            title: "Design Patterns",
            completed: false,
            content: [
              {
                id: "c7",
                title: "SOLID Principles",
                type: "article",
                readTime: "14 min",
                url: "#",
              },
              {
                id: "c8",
                title: "Factory Design Pattern",
                type: "video",
                duration: "18 min",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
};
