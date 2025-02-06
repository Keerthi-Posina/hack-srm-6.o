import { AppSidebar } from "@/components/admin/Sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import type React from "react"; // Added import for React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex h-screen w-screen overflow-hidden">
            <AppSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <SidebarInset className="flex-1 flex flex-col overflow-auto">
                <main className="flex-1 p-6 overflow-auto">{children}</main>
              </SidebarInset>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
