import { CircleDollarSign, BookOpen, Key, Smile } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Introduction",
    url: "/docs",
    icon: BookOpen,
  },
  {
    title: "Free Models",
    url: "/",
    icon: Key,
  },
  {
    title: "Paid Models",
    url: "/",
    icon: CircleDollarSign,
  },
  {
    title: "Hugging Face",
    url: "/",
    icon: Smile,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="py-20" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
