"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      name: "About Me!",
      url: "#about-me",
      icon: Frame,
      isActive: true,
    },
    {
      name: "Experience",
      url: "#experience",
      icon: PieChart,
    },
    {
      name: "Projects",
      url: "#projects",
      icon: Map,
    },
    {
      name: "Skills & Tools",
      url: "#skills",
      icon: Map,
    },
    {
      name: "Contact Me",
      url: "#contact-me",
      icon: Map,
    },
  ],
};

export function AppSidebar({ setSection, ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.sections} setSection={setSection} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
