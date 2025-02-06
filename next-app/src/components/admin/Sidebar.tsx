"use client";

import Link from "next/link";
import {
  UserPlus,
  BookPlus,
  GraduationCap,
  Users,
  BookOpen,
  FileQuestion,
  School,
  BarChart,
} from "lucide-react";
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

const navItems = [
  {
    title: "Dashboard",
    icon: BarChart,
    href: "/admin",
  },
  {
    title: "Course Coordinators",
    icon: School,
    items: [
      { title: "Create CC", href: "/admin/create-cc", icon: UserPlus },
      { title: "View CCs", href: "/admin/view-cc", icon: Users },
    ],
  },
  {
    title: "Faculty",
    icon: GraduationCap,
    items: [
      {
        title: "Create Faculty",
        href: "/admin/create-faculty",
        icon: UserPlus,
      },
      { title: "View Faculty", href: "/admin/view-faculty", icon: Users },
    ],
  },
  {
    title: "Students",
    icon: Users,
    items: [
      {
        title: "Create Student",
        href: "/admin/create-student",
        icon: UserPlus,
      },
      { title: "View Students", href: "/admin/view-students", icon: Users },
    ],
  },
  {
    title: "Courses",
    icon: BookOpen,
    items: [
      { title: "Create Course", href: "/admin/create-course", icon: BookPlus },
      { title: "View Courses", href: "/admin/view-courses", icon: BookOpen },
    ],
  },
  {
    title: "Quizzes",
    icon: FileQuestion,
    items: [
      { title: "Create Quiz", href: "/admin/create-quiz", icon: FileQuestion },
      {
        title: "View Quizzes",
        href: "/admin/view-quizzes",
        icon: FileQuestion,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">AI LMS Admin</h1>
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((group, index) => (
          <SidebarGroup key={index}>
            {group.items ? (
              <>
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
              </>
            ) : (
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={group.href}>
                    <group.icon className="mr-2 h-4 w-4" />
                    <span>{group.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
