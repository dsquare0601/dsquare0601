"use client";

import * as React from "react";

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
import navbarData from "@/context/navbar.data";

interface AppSidebarProps {
  setSection: (section: string) => void;
  currentSection: string;
}

export function AppSidebar({
  setSection,
  currentSection,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects
          projects={navbarData.sections}
          setSection={setSection}
          currentSection={currentSection}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navbarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
