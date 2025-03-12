"use client";

import { NavLink } from "@/components/nav-link";
import { Nav } from "@/components/ui/nav";

interface NavProjectsProps {
  projects: {
    name: string;
    url: string;
    icon: any;
  }[];
  setSection: (section: string) => void;
  currentSection: string; // Add this prop
}

export function NavProjects({
  projects,
  setSection,
  currentSection,
}: NavProjectsProps) {
  const handleSectionClick = (url: string) => {
    const sectionId = url.replace("#", "");
    setSection(sectionId);
  };

  return (
    <Nav>
      {projects.map((project) => (
        <NavLink
          key={project.url}
          name={project.name}
          url={project.url}
          icon={project.icon}
          isActive={currentSection === project.url.replace("#", "")}
          onClick={() => handleSectionClick(project.url)}
        />
      ))}
    </Nav>
  );
}
