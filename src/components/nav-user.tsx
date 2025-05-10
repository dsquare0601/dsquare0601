"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="mt-6 grid grid-cols-3 items-center justify-center group-data-[collapsible=icon]:grid-cols-1 group-data-[collapsible=icon]:grid-rows-3 group-data-[collapsible=icon]:justify-items-center">
          <a
            href="https://github.com/dsquare0601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary justify-items-center p-2 transition-colors"
          >
            <Github strokeWidth={1.5} size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dsquare0601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary justify-items-center p-2 transition-colors"
          >
            <Linkedin strokeWidth={1.5} size={24} />
          </a>
          <a
            href="mailto:darjidhaval19@gmail.com"
            className="text-muted-foreground hover:text-primary justify-items-center p-2 transition-colors"
          >
            <Mail strokeWidth={1.5} size={24} />
          </a>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
