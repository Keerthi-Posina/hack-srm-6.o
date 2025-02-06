import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Book,
  BookOpen,
  Lightbulb,
  FileQuestion,
  FileText,
  GraduationCap,
  List,
  MessageCircle,
  PlayCircle,
  CogIcon,
  MessageCircleMoreIcon,
  Target,
  Search,
  Video,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    title: "My Courses",
    icon: BookOpen,
    items: [
      {
        title: "Active Courses",
        href: "/student/active-courses",
        icon: Book,
      },
      {
        title: "Course Catalog",
        href: "/student/catalog-courses",
        icon: List,
      },
    ],
  },
  {
    title: "Learning Journey",
    icon: PlayCircle,
    items: [
      {
        title: "Learning Paths",
        href: "/student/learning-paths",
        icon: Target,
      },
      {
        title: "Course Outcomes",
        href: "/student/outcomes",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "Resources",
    icon: FileText,
    items: [
      {
        title: "Study Materials",
        href: "/student/resources/materials",
        icon: Book,
      },
      {
        title: "Video Lectures",
        href: "/student/resources/videos",
        icon: Video,
      },
      {
        title: "Assessments",
        href: "/student/resources/quizzes",
        icon: FileQuestion,
      },
    ],
  },
  {
    title: "AI Support",
    icon: CogIcon,
    items: [
      {
        title: "Course Assistant",
        href: "/student/ai/course-help",
        icon: MessageCircle,
      },
      {
        title: "CO Specific Help",
        href: "/student/ai/co-help",
        icon: CogIcon,
      },
    ],
  },
  {
    title: "Extra",
    href: "asd",
    icon: Lightbulb,
    items: [
      {
        title: "Internal web search",
        href: "/student/web-search",
        icon: Search,
      },
      {
        title: "Doubt Solving Chatbot",
        href: "/student/doubt-solving-chatbot",
        icon: MessageCircleMoreIcon,
      },
    ],
  },
];

export function StudentSidebar() {
  return (
    <Sidebar className="border-r">
      <Link href="/student">
        <SidebarHeader className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-primary">Student Portal</h1>
        </SidebarHeader>
      </Link>
      <SidebarContent>
        {navItems.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>
              <group.icon className="mr-2 h-4 w-4" />
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
