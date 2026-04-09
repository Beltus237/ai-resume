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
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  FileText,
  Layout,
  Settings,
  Download,
  Share2,
  Sparkles,
  FolderOpen,
  User,
  Brain,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Resume Builder",
    icon: Layout,
    url: "/",
    isActive: true,
  },
  {
    title: "My Resumes",
    icon: FolderOpen,
    url: "/resumes",
    badge: "3",
  },
  {
    title: "Templates",
    icon: FileText,
    url: "/templates",
    badge: "New",
  },
  {
    title: "AI Assistant",
    icon: Brain,
    url: "/ai-assistant",
    badge: "Pro",
  },
];

const bottomMenuItems = [
  {
    title: "Export PDF",
    icon: Download,
    url: "/export",
  },
  {
    title: "Share Resume",
    icon: Share2,
    url: "/share",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">ResumeAI</span>
            <span className="text-xs text-muted-foreground">Pro</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="px-3 py-2"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="px-3 py-2">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
