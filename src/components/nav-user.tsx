"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex justify-center items-center space-x-6 mt-6">
          <a
            href="https://github.com/dsquare0601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Github strokeWidth={1.5} size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dsquare0601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Linkedin strokeWidth={1.5} size={24} />
          </a>
          <a
            href="mailto:darjidhaval19@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
          >
            <Mail strokeWidth={1.5} size={24} />
          </a>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
