export interface Content {
  id: string;
  type: "video" | "article";
  title: string;
  url: string;
  duration?: string;
  readTime?: string;
  content?: string;
}

export interface Step {
  id: string;
  title: string;
  completed: boolean;
  content: Content[];
}

export interface Module {
  id: string;
  title: string;
  completed: boolean;
  steps: Step[];
}

export interface LearningPath {
  title: string;
  description: string;
  progress: number;
  modules: Module[];
}
