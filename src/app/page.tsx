"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState, useRef } from "react";
import { SectionCarousel } from "@/components/section-carousel";
import navbarData from "@/context/navbar.data";
import { useInView } from "framer-motion";
import Header from "@/components/Header";
import AboutMe from "@/components/Sections/About-Me";
import Experience from "@/components/Sections/Experience";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";

export default function Page() {
  const [section, setSection] = useState("about-me");
  const [sectionTitle, setSectionTitle] = useState("About Me!");
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
  };

  useEffect(() => {
    const sectionObj = navbarData.sections.find(
      (s) => s.url.replace("#", "") === section,
    );
    setSectionTitle(sectionObj?.name || "Portfolio");
  }, [section]);

  // Add ref and inView state for the experience section
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true });

  return (
    <SidebarProvider>
      <AppSidebar setSection={handleSectionChange} currentSection={section} />
      <SidebarInset>
        <Header sectionTitle={sectionTitle} />

        <SectionCarousel
          setSection={handleSectionChange}
          currentSection={section}
          isScrollLocked={isScrollLocked}
        >
          <AboutMe id="about-me" />
          <Experience
            id="experience"
            timelineRef={timelineRef}
            isInView={isInView}
          />
          <Projects id="projects" setIsScrollLocked={setIsScrollLocked} />
          <Skills id="skills" />
        </SectionCarousel>
      </SidebarInset>
    </SidebarProvider>
  );
}
