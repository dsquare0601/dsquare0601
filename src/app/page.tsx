"use client";
import "./page.css";
import { Github, Linkedin, Mail, Globe, GitBranch } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Database,
  Server,
  Code,
  Layers,
  Box,
  Cloud,
  Wrench,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiAngular,
  SiTailwindcss,
  SiSass,
  SiWebpack,
  SiBootstrap,
  SiAmazons3,
  SiSemanticuireact,
  SiThreedotjs,
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiRedis,
  SiElasticsearch,
  SiSocketdotio,
  SiAwsamplify,
  SiAwslambda,
  SiAwssecretsmanager,
  SiAmazonwebservices,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazondynamodb,
  SiAmazonrds,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJson,
  SiGit,
  SiGithubactions,
  SiSalesforce,
  SiTwilio,
  SiStripe,
  SiPostman,
  SiMui,
} from "@icons-pack/react-simple-icons";
import { useEffect, useState, useRef } from "react";
import { SectionCarousel } from "@/components/section-carousel";
import navbarData from "@/context/navbar.data";
import { motion, useInView } from "framer-motion";
import { AnimatedWords } from "@/components/animated-words";

// Add these styles right after imports
const textGradients = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
  secondary:
    "bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent",
  accent:
    "bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent",
};

export default function Page() {
  const [section, setSection] = useState("about-me");
  const [sectionTitle, setSectionTitle] = useState("About Me!");
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
  };

  useEffect(() => {
    const sectionObj = navbarData.sections.find(
      (s) => s.url.replace("#", "") === section
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
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{sectionTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <SectionCarousel
          setSection={handleSectionChange}
          currentSection={section}
          isScrollLocked={isScrollLocked}
        >
          <section id="about-me" className="h-full flex items-center">
            <div className="px-4 sm:px-8 md:px-16 lg:px-40 h-full flex items-center min-h-screen">
              <div className="grid gap-6 md:gap-12">
                <div className="md:col-start-1">
                  <div>
                    <div className="flex flex-col space-y-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=""
                      >
                        <Label className="custom-heading flex flex-wrap text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-7xl 2xl:text-[10rem] leading-[1.15] pb-2">
                          G'day,{" "}
                          <span
                            className={`${textGradients.primary} font-bold`}
                          >
                            I'm Dhaval Darji
                          </span>
                        </Label>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Label
                          className={`text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl ${textGradients.secondary}`}
                        >
                          Full Stack Web Developer
                        </Label>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <Label
                          className={`text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl ${textGradients.accent} flex items-center gap-2`}
                        >
                          On the weekend, I'm a <AnimatedWords />
                        </Label>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Label className="mt-20 text-base sm:text-xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 transition-all duration-300">
                          Engineer by profession, problem-solver by passion,
                          explorer by heart.
                        </Label>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <Label className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent hover:from-sky-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300">
                          Full-stack developer who enjoys building robust
                          backends, leading teams, and delivering high-quality
                          applications.
                        </Label>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="h-full flex items-center bg-gradient-to-br from-background to-background/80"
          >
            <div className="px-4 sm:px-8 md:px-16 lg:px-20 w-full">
              <motion.div
                ref={timelineRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full py-16 md:py-32"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="top-[53%] absolute left-0 w-full h-0.5 bg-gradient-to-r from-primary/5 via-primary/80 to-primary/5"
                />

                <div className="flex flex-col md:flex-row justify-between relative max-w-6xl mx-auto gap-8 md:gap-4">
                  {[
                    {
                      title: "Full Stack Development Consultant",
                      company: "Qualitésoft",
                      period: "May 2023 - Present",
                      description:
                        "Built and optimized end-to-end systems, integrating batch NDA processing, rewards distribution, VIP guest management, and third-party recruiter onboarding with secure payment flows.",
                      position: "bottom",
                      width: "w-full md:w-1/4",
                    },
                    {
                      title: "Sr. Full Stack Developer",
                      company: "Algoscale Technologies",
                      period: "Mar 2023 - Apr 2023",
                      description:
                        "Designed and deployed end-to-end full-stack solutions across 5+ projects in course management, insurance, and infrastructure domains, leveraging Node.js, React, Strapi, and AWS/Azure to build scalable applications while optimizing APIs, automating workflows, and enhancing search and analytics with Redis and Elasticsearch.",
                      position: "top",
                      width: "w-full md:w-1/4",
                    },
                    {
                      title: "Sr. Full Stack Developer",
                      company: "iGenerate Technology",
                      period: "Feb 2021 - Feb 2023",
                      description:
                        "Designed and deployed scalable full-stack solutions, integrating AWS services, optimizing data pipelines, mentoring freshers, and leading cross-functional teams across multiple mid-level applications.",
                      position: "bottom",
                      width: "w-full md:w-1/4",
                    },
                    {
                      title: "Full Stack Trainee",
                      company: "MicroGO LLP",
                      period: "Sep 2020 - Dec 2020",
                      description:
                        "Planned and developed 3 operational dashboards from scratch, leading a 5-member team while designing databases, implementing CI/CD pipelines, and building 24+ IoT-driven APIs.",
                      position: "top",
                      width: "w-full md:w-1/4",
                    },
                  ].map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: exp.position === "bottom" ? -20 : 20,
                      }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : exp.position === "bottom" ? -20 : 20,
                      }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      className={`${
                        exp.width || "w-full md:w-1/4"
                      } relative group`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: isInView ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"
                      />
                      <div
                        className={`absolute w-full ${
                          exp.position === "bottom"
                            ? "bottom-[50%] pb-4"
                            : "top-[calc(50%+1rem)] pt-4"
                        }`}
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            y: exp.position === "bottom" ? -2 : 2,
                          }}
                          transition={{ duration: 0.2 }}
                          className="bg-gradient-to-br from-background via-background/95 to-background/90 p-4 rounded-lg shadow-lg border border-primary/10 space-y-3 hover:shadow-primary/20 hover:border-primary/30 backdrop-blur-sm transition-all duration-300"
                        >
                          <h5 className="text-lg font-semibold bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 bg-clip-text text-transparent">
                            {exp.title}
                          </h5>
                          <p className="text-primary/60 font-medium">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-400 border-l-2 border-primary/30 pl-2">
                            {exp.period}
                          </p>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {exp.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="projects"
            className="h-full flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90"
          >
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 2xl:px-60 w-full max-w-[2000px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12"
              >
                <motion.div
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 items-end">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Professional Projects
                    </h2>
                    <p className="text-sm text-muted-foreground italic">
                      Mock Names due to NDA
                    </p>
                  </div>
                  <ScrollArea
                    className="h-[500px] xl:h-[600px] 2xl:h-[800px] border rounded-lg p-4 scroll-area backdrop-blur-sm bg-gradient-to-br from-background/40 via-background/30 to-background/20 hover:from-background/50 hover:to-background/30 transition-all duration-300 border-primary/10 hover:border-primary/20"
                    onMouseEnter={() => setIsScrollLocked(true)}
                    onMouseLeave={() => setIsScrollLocked(false)}
                  >
                    <Accordion type="single" collapsible className="space-y-2">
                      {professionalProjects.map((project, index) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          key={index}
                        >
                          <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="text-left hover:bg-primary/5 px-4 rounded-lg transition-all duration-300">
                              <div className="flex flex-col">
                                <span className="font-semibold text-base text-primary/80 group-hover:text-primary transition-colors">
                                  {project.title}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-2 px-4 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
                              >
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {project.description}
                                </p>
                              </motion.div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </motion.div>

                <motion.div
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Personal Projects
                  </h2>
                  <ScrollArea
                    className="h-[500px] xl:h-[600px] 2xl:h-[800px] border rounded-lg p-4 scroll-area backdrop-blur-sm bg-gradient-to-br from-background/40 via-background/30 to-background/20 hover:from-background/50 hover:to-background/30 transition-all duration-300 border-primary/10 hover:border-primary/20"
                    onMouseEnter={() => setIsScrollLocked(true)}
                    onMouseLeave={() => setIsScrollLocked(false)}
                  >
                    <Accordion type="single" collapsible className="space-y-2">
                      {personalProjects.map((project, index) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          key={index}
                        >
                          <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="text-left hover:bg-primary/5 px-4 rounded-lg transition-all duration-300">
                              <div className="flex flex-col">
                                <span className="font-semibold text-base text-primary/80 group-hover:text-primary transition-colors">
                                  {project.title}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4 px-4 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
                              >
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {project.description}
                                </p>
                                {project.image && (
                                  <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Image
                                      src={project.image}
                                      alt={project.title}
                                      width={300}
                                      height={200}
                                      className="rounded-lg shadow-lg"
                                    />
                                  </motion.div>
                                )}
                              </motion.div>
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section
            id="skills"
            className="h-full flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90"
          >
            <div className="container px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 min-h-screen flex items-center w-full max-w-[1800px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full"
              >
                {[
                  { title: "Frontend", icon: Layers, skills: frontendSkills },
                  { title: "Backend", icon: Server, skills: backendSkills },
                  {
                    title: "Databases",
                    icon: Database,
                    skills: databaseSkills,
                  },
                  { title: "Cloud & Server", icon: Cloud, skills: cloudSkills },
                  {
                    title: "Web Technologies",
                    icon: Code,
                    skills: webTechSkills,
                  },
                  {
                    title: "Other Tools",
                    icon: Wrench,
                    skills: otherToolsSkills,
                  },
                ].map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                    className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg border bg-gradient-to-br from-background/50 via-background/40 to-background/30 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 hover:from-background/60 hover:to-background/40"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <section.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary/70 group-hover:text-primary transition-colors" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 bg-clip-text text-transparent">
                        {section.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                      {section.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: sectionIndex * 0.1 + index * 0.05,
                          }}
                          whileHover={{ y: -2 }}
                          className="flex flex-col items-center justify-center p-2 sm:p-2.5 md:p-3 rounded-lg hover:bg-accent/40 transition-all duration-200 group/skill"
                        >
                          {skill.isImage ? (
                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-2 opacity-80 group-hover/skill:opacity-100 transition-opacity">
                              {skill.icon}
                            </div>
                          ) : (
                            <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-2 opacity-80 group-hover/skill:opacity-100 transition-opacity text-primary/80 group-hover/skill:text-primary" />
                          )}
                          <span className="text-xs sm:text-sm lg:text-base text-center text-muted-foreground group-hover/skill:text-primary/90 transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </SectionCarousel>
      </SidebarInset>
    </SidebarProvider>
  );
}

const professionalProjects = [
  {
    title: "Preview Free Movies Project",
    description:
      "A comprehensive system for managing movie preview screenings and related administrative tasks, including audience recruitment, venue coordination, event scheduling, and attendance tracking. It streamlines operations such as managing screening invitations, tracking who attended or missed the event, handling check-ins via mobile apps, and ensuring seamless coordination between venues, audiences, and organizers.",
  },
  {
    title: "Large Dataset Printing Management",
    description:
      "Designed for managing document printing for advertising or campaign operations. A back-office tool for an NY-based company that aggregates data from third-party sources and Salesforce, processes and organizes it into million-record packages for verification, and then generates PDFs via a third-party service for large-scale printing.",
  },
  {
    title: "Real-time Q/A, Chat, and Audio Meeting Application",
    description:
      "A dynamic platform enabling real-time chat, Q&A sessions, and audio communication with role-based access for admins, moderators, participants, and viewers. It includes a back-office tool for data management, report generation, and email campaign features for engaging registrants.",
  },
  {
    title: "Restaurant POS Management",
    description:
      "An all-in-one POS system for restaurants that centralizes real-time order management from aggregators like Zomato, Swiggy, and Talabat, along with menu synchronization, catalog configuration, table management for offline orders, and seamless order processing.",
  },
  {
    title: "Insurance Management System",
    description:
      "A platform that streamlines policy management by connecting policy providers, agents, and end users on a unified system. It facilitates policy creation, tracking, renewals, claims processing, premium payments, and document management while ensuring real-time updates, compliance tracking, and seamless communication among stakeholders.",
  },
  {
    title: "Course Selling and Management Platform",
    description:
      "A system for course management, featuring trending and user-preferred course lists, dynamic recommendations based on user preferences, category and subcategory management, topic-based organization, and personalized favorite lists to enhance user engagement and course discovery.",
  },
  {
    title: "Water, Sewer, and Construction Management",
    description:
      "A web and mobile application for managing civil works, including excavations, tools, worker assignments, shift tracking, user management, task scheduling, and real-time notifications. It ensures seamless coordination with real-time updates between mobile and web platforms.",
  },
  {
    title: "Third-Party Ticketing and Selling Platform",
    description:
      "An in-house Ticketmaster clone that scrapes real-time ticket availability from Ticketmaster and Vivid Seats, processes and updates the database through long-running scripts, and enables users to browse, book, and purchase tickets seamlessly through the platform.",
  },
  {
    title: "Legislative Bill Management System",
    description:
      "A backend-driven system for managing legislative bills, enabling tracking, updating, and organizing bills throughout their lifecycle. It streamlines workflows for lawmakers, committees, and stakeholders by handling bill submissions, amendments, status updates, and document management while ensuring secure data processing and efficient backend operations.",
  },
  {
    title: "Operational Dashboard with IoT Integration.",
    description:
      "A real-time operational dashboard designed to process and visualize data from IoT devices, enabling efficient monitoring and management of operations. It features dynamic data updates, user account management, automated data processing, and seamless integration with IoT devices through APIs, while supporting continuous deployment and cross-team collaboration for streamlined operations.",
  },
];

const personalProjects = [
  {
    title: "r3f-vite-fm-shadcn",
    description:
      "R3F Vite + Framer Motion + ShadCN: A modern, high-performance web application built with React Three Fiber (R3F), Vite, Framer Motion, and ShadCN.",
  },
  {
    title: "uicaps",
    description: "User Interactive Collaborative Advance Planning System",
  },
  {
    title: "Login-SignUp-API",
    description:
      "A Node.js-based authentication API with user registration and login functionality, featuring input validation, secure authentication using JWT, logging mechanisms, and structured error handling. It ensures robust security and efficient user management for authentication-based applications.",
  },
  {
    title: "Binary-Problem",
    description:
      "A coding challenge solution focused on binary number manipulation, implemented in JavaScript. It processes binary input to solve a specific computational problem efficiently, showcasing algorithmic logic and problem-solving skills.",
  },
];

const frontendSkills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Angular", icon: SiAngular },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "SCSS", icon: SiSass },
  { name: "Webpack", icon: SiWebpack },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Material UI", icon: SiMui },
  { name: "Semantic UI", icon: SiSemanticuireact },
  { name: "Three.js", icon: SiThreedotjs },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "NestJS", icon: SiNestjs },
  { name: "Express", icon: SiExpress },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Redis", icon: SiRedis },
  { name: "Elasticsearch", icon: SiElasticsearch },
  { name: "Socket.io", icon: SiSocketdotio },
  {
    name: "C#",
    isImage: true,
    icon: (
      <Image
        src="/csharp-icon.png"
        alt="C#"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    ),
  },
];

const databaseSkills = [
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "DynamoDB", icon: SiAmazondynamodb },
  { name: "SQL Server", icon: SiAmazondynamodb },
  { name: "AWS RDS", icon: SiAmazonrds },
];

const cloudSkills = [
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "AWS Amplify", icon: SiAwsamplify },
  { name: "AWS AppSync", icon: SiAmazonwebservices },
  {
    name: "AWS Lambda",
    isImage: true,
    icon: (
      <Image
        src="/lambda-icon.png"
        alt="C#"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    ),
  },
  { name: "AWS S3", icon: SiAmazons3 },
  { name: "AWS Secret Manager", icon: SiAwssecretsmanager },
  {
    name: "azure-icon",
    isImage: true,
    icon: (
      <Image
        src="/azure-icon.png"
        alt="C#"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    ),
  },
  { name: "Firebase", icon: SiFirebase },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
];

const webTechSkills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JSON", icon: SiJson },
  { name: "GraphQL", icon: SiGraphql },
];

const otherToolsSkills = [
  { name: "Git", icon: SiGit },
  { name: "CI/CD", icon: SiGithubactions },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Twilio", icon: SiTwilio },
  { name: "Stripe", icon: SiStripe },
  {
    name: "VS Code",
    isImage: true,
    icon: (
      <Image
        src="/vscode-icon.png"
        alt="C#"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    ),
  },
  { name: "Postman", icon: SiPostman },
];
