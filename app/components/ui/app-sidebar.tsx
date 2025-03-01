"use client";

import {
  CircleDollarSign,
  BookOpen,
  Key,
  Smile,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items with dropdowns
const items = [
  {
    title: "Introduction",
    url: "/docs/intro",
    icon: BookOpen,
  },
  {
    title: "Free Models",
    icon: Key,
    children: [
      {
        title: "Gemini",
        url: "/docs/gemini",
      },
      {
        title: "Groq",
        url: "/docs/groq",
      },
      {
        title: "Ollama",
        url: "/docs/ollama",
      },
    ],
  },
  {
    title: "Paid Models",
    icon: CircleDollarSign,
    children: [
      {
        title: "ChatGPT",
        url: "/docs/openAI",
      },
      {
        title: "DeepSeek AI",
        url: "/docs/deepSeek",
      },
      {
        title: "Claude",
        url: "/docs/claude",
      },
    ],
  },
  {
    title: "Hugging Face",
    icon: Smile,
    url: "https://huggingface.co/models",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url || pathname.startsWith(`${url}/`);
  };
  return (
    <Sidebar className="py-20" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <Collapsible defaultOpen={true}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto h-4 w-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent asChild>
                        <SidebarMenuSub>
                          {item.children.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive(subItem.url)}
                              >
                                <Link href={subItem.url}>{subItem.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={isActive(item.url)}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
