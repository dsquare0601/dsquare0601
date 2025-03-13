"use client";
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
import { useEffect, useState } from "react";
import { SectionCarousel } from "@/components/section-carousel";
import navbarData from "@/context/navbar.data";

export default function Page() {
  const [section, setSection] = useState("about-me");
  const [sectionTitle, setSectionTitle] = useState("About Me!");

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
  };

  useEffect(() => {
    const sectionObj = navbarData.sections.find(
      (s) => s.url.replace("#", "") === section
    );
    setSectionTitle(sectionObj?.name || "Portfolio");
  }, [section]);

  return (
    <SidebarProvider>
      <AppSidebar
        setSection={handleSectionChange}
        currentSection={section} // Add this prop
      />
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
        >
          <section id="about-me" className="h-full flex items-center">
            <div className="px-20 h-full flex items-center">
              <div className="grid items-center gap-8">
                <div className="relative w-[500px] h-auto overflow-hidden md:col-start-1 justify-items-center">
                  <Image
                    src="/images/hi.png"
                    alt="Profile photo"
                    width={250}
                    height={250}
                    className="rounded-none"
                    priority
                  />
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
                </div>
                <div className="md:col-start-2">
                  <div>
                    <div className="flex flex-col space-y-2">
                      <Label className="text-6xl">
                        G’day, I’m Dhaval Darji
                      </Label>
                      <Label className="text-5xl">
                        Full Stack Web Developer
                      </Label>
                      <Label className="text-3xl">
                        And Gamer / Trekker / Hiker / Traveler / Foodie.
                      </Label>
                      <Label className="text-2xl">
                        Engineer by profession, problem-solver by passion,
                        explorer by heart.
                      </Label>
                      <Label>
                        Full-stack developer who enjoys building robust
                        backends, leading teams, and delivering high-quality
                        applications.
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="h-full flex items-center">
            <div className="px-20 w-full">
              <div className="relative w-full py-32">
                <div className="top-[53%] absolute left-0 w-full h-0.5 bg-gray-200"></div>

                <div className="flex justify-between relative max-w-6xl mx-auto">
                  <div className="w-100 relative group">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute w-full bottom-[50%] pb-4">
                      <div className="bg-background p-4 rounded-lg shadow-lg border border-gray-100 space-y-2">
                        <h5 className="text-lg font-semibold">
                          Full Stack Development Consultant
                        </h5>
                        <p className="text-gray-400">Qualitésoft</p>
                        <p className="text-sm text-gray-400">
                          May 2023 - Present
                        </p>
                        <p className="text-sm text-gray-400">
                          Built and optimized end-to-end systems, integrating
                          batch NDA processing, rewards distribution, VIP guest
                          management, and third-party recruiter onboarding with
                          secure payment flows.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[calc(var(--spacing)*160)] relative group">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute w-full top-[calc(50%+1rem)] pt-4">
                      <div className="bg-background p-4 rounded-lg shadow-lg border border-gray-100 space-y-2">
                        <h5 className="text-lg font-semibold">
                          Sr. Full Stack Developer
                        </h5>
                        <p className="text-gray-400">Algoscale Technologies</p>
                        <p className="text-sm text-gray-400">
                          Mar 2023 — Aug 2024
                        </p>
                        <p className="text-sm text-gray-400">
                          Designed and deployed end-to-end full-stack solutions
                          across 5+ projects in course management, insurance,
                          and infrastructure domains, leveraging Node.js, React,
                          Strapi, and AWS/Azure to build scalable applications
                          while optimizing APIs, automating workflows, and
                          enhancing search and analytics with Redis and
                          Elasticsearch.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 relative group">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute w-full bottom-[50%] pb-4">
                      <div className="bg-background p-4 rounded-lg shadow-lg border border-gray-100 space-y-2">
                        <h5 className="text-lg font-semibold">
                          Sr. Full Stack Developer
                        </h5>
                        <p className="text-gray-400">iGenerate Technology</p>
                        <p className="text-sm text-gray-400">
                          Feb 2021 — Feb 2023
                        </p>
                        <p className="text-sm text-gray-400">
                          Designed and deployed scalable full-stack solutions,
                          integrating AWS services, optimizing data pipelines,
                          mentoring freshers, and leading cross-functional teams
                          across multiple mid-level applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 relative group">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute w-full top-[calc(50%+1rem)] pt-4">
                      <div className="bg-background p-4 rounded-lg shadow-lg border border-gray-100 space-y-2">
                        <h5 className="text-lg font-semibold">
                          Full Stack Trainee
                        </h5>
                        <p className="text-gray-400">MicroGO LLP</p>
                        <p className="text-sm text-gray-400">
                          Sep 2020 — Dec 2020
                        </p>
                        <p className="text-sm text-gray-400">
                          Planned and developed 3 operational dashboards from
                          scratch, leading a 5-member team while designing
                          databases, implementing CI/CD pipelines, and building
                          24+ IoT-driven APIs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="h-full flex items-center justify-center"
          >
            <div className="container mx-auto px-20">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 items-end">
                    <h2 className="text-3xl font-bold">
                      Professional Projects
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Mock Names due to NDA
                    </p>
                  </div>
                  <ScrollArea className="h-[500px] border rounded-lg p-4">
                    <Accordion type="single" collapsible className="space-y-2">
                      {professionalProjects.map((project, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex flex-col">
                              <span className="font-semibold text-base">
                                {project.title}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 px-4">
                              <p className="text-sm text-muted-foreground">
                                {project.description}
                              </p>
                              <div className="flex gap-2">
                                {project.techStack.map((tech, i) => (
                                  <tech.icon key={i} className="w-5 h-5" />
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Personal Projects</h2>
                  <ScrollArea className="h-[500px] border rounded-lg p-4">
                    <Accordion type="single" collapsible className="space-y-2">
                      {personalProjects.map((project, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex flex-col">
                              <span className="font-semibold  text-base">
                                {project.title}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 px-4">
                              <p className="text-sm text-muted-foreground">
                                {project.description}
                              </p>
                              {project.image && (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  width={300}
                                  height={200}
                                  className="rounded-lg"
                                />
                              )}
                              <div className="flex gap-2">
                                {project.techStack.map((tech, i) => (
                                  <tech.icon key={i} className="w-5 h-5" />
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="h-full flex items-center justify-center"
          >
            <div className="container px-20 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center gap-2 mb-4 ml-2">
                    <Layers className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Frontend</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {frontendSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group"
                      >
                        {skill.isImage ? (
                          <div className="w-8 h-8 mb-2 group-hover:text-primary">
                            {skill.icon}
                          </div>
                        ) : (
                          <skill.icon className="w-8 h-8 mb-2 group-hover:text-primary" />
                        )}
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center gap-2 mb-4 ml-2">
                    <Server className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Backend</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {backendSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group"
                      >
                        {skill.isImage ? (
                          <div className="w-8 h-8 mb-2 group-hover:text-primary">
                            {skill.icon}
                          </div>
                        ) : (
                          <skill.icon className="w-8 h-8 mb-2 group-hover:text-primary" />
                        )}
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center gap-2 mb-4 ml-2">
                    <Database className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Databases</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {databaseSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group"
                      >
                        {skill.isImage ? (
                          <div className="w-8 h-8 mb-2 group-hover:text-primary">
                            {skill.icon}
                          </div>
                        ) : (
                          <skill.icon className="w-8 h-8 mb-2 group-hover:text-primary" />
                        )}
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center gap-2 mb-4 ml-2">
                    <Cloud className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Cloud & Server</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {cloudSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group"
                      >
                        {skill.isImage ? (
                          <div className="w-8 h-8 mb-2 group-hover:text-primary">
                            {skill.icon}
                          </div>
                        ) : (
                          <skill.icon className="w-8 h-8 mb-2 group-hover:text-primary" />
                        )}
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center gap-2 mb-4 ml-2">
                    <Code className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Web Technologies</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {webTechSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group"
                      >
                        {skill.isImage ? (
                          <div className="w-8 h-8 mb-2 group-hover:text-primary">
                            {skill.icon}
                          </div>
                        ) : (
                          <skill.icon className="w-8 h-8 mb-2 group-hover:text-primary" />
                        )}
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center gap-2 mb-4 ml-2">
                    <Wrench className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Other Tools</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {otherToolsSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors group"
                      >
                        {skill.isImage ? (
                          <div className="w-8 h-8 mb-2 group-hover:text-primary">
                            {skill.icon}
                          </div>
                        ) : (
                          <skill.icon className="w-8 h-8 mb-2 group-hover:text-primary" />
                        )}
                        <span className="text-xs text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Large Dataset Printing Management",
    description:
      "Designed for managing document printing for advertising or campaign operations. A back-office tool for an NY-based company that aggregates data from third-party sources and Salesforce, processes and organizes it into million-record packages for verification, and then generates PDFs via a third-party service for large-scale printing.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Real-time Q/A, Chat, and Audio Meeting Application",
    description:
      "A dynamic platform enabling real-time chat, Q&A sessions, and audio communication with role-based access for admins, moderators, participants, and viewers. It includes a back-office tool for data management, report generation, and email campaign features for engaging registrants.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Restaurant POS Management",
    description:
      "An all-in-one POS system for restaurants that centralizes real-time order management from aggregators like Zomato, Swiggy, and Talabat, along with menu synchronization, catalog configuration, table management for offline orders, and seamless order processing.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Insurance Management System",
    description:
      "A platform that streamlines policy management by connecting policy providers, agents, and end users on a unified system. It facilitates policy creation, tracking, renewals, claims processing, premium payments, and document management while ensuring real-time updates, compliance tracking, and seamless communication among stakeholders.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Course Selling and Management Platform",
    description:
      "A system for course management, featuring trending and user-preferred course lists, dynamic recommendations based on user preferences, category and subcategory management, topic-based organization, and personalized favorite lists to enhance user engagement and course discovery.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Water, Sewer, and Construction Management",
    description:
      "A web and mobile application for managing civil works, including excavations, tools, worker assignments, shift tracking, user management, task scheduling, and real-time notifications. It ensures seamless coordination with real-time updates between mobile and web platforms.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Third-Party Ticketing and Selling Platform",
    description:
      "An in-house Ticketmaster clone that scrapes real-time ticket availability from Ticketmaster and Vivid Seats, processes and updates the database through long-running scripts, and enables users to browse, book, and purchase tickets seamlessly through the platform.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Legislative Bill Management System",
    description:
      "A backend-driven system for managing legislative bills, enabling tracking, updating, and organizing bills throughout their lifecycle. It streamlines workflows for lawmakers, committees, and stakeholders by handling bill submissions, amendments, status updates, and document management while ensuring secure data processing and efficient backend operations.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
  {
    title: "Operational Dashboard with IoT Integration.",
    description:
      "A real-time operational dashboard designed to process and visualize data from IoT devices, enabling efficient monitoring and management of operations. It features dynamic data updates, user account management, automated data processing, and seamless integration with IoT devices through APIs, while supporting continuous deployment and cross-team collaboration for streamlined operations.",
    techStack: [
      { icon: Github },
      { icon: Github },
      { icon: Github },
      { icon: Github },
    ],
  },
];

const personalProjects = [
  {
    title: "Portfolio Website",
    description: "",
    image: "/images/portfolio.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: Globe }],
  },
  {
    title: "r3f-vite-fm-shadcn",
    description:
      "R3F Vite + Framer Motion + ShadCN: A modern, high-performance web application built with React Three Fiber (R3F), Vite, Framer Motion, and ShadCN.",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
  {
    title: "uicaps",
    description: "User Interactive Collaborative Advance Planning System",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
  {
    title: "Login-SignUp-API",
    description:
      "A Node.js-based authentication API with user registration and login functionality, featuring input validation, secure authentication using JWT, logging mechanisms, and structured error handling. It ensures robust security and efficient user management for authentication-based applications.",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
  {
    title: "Binary-Problem",
    description:
      "A coding challenge solution focused on binary number manipulation, implemented in JavaScript. It processes binary input to solve a specific computational problem efficiently, showcasing algorithmic logic and problem-solving skills.",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
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
  { name: "Material UI", icon: SiMui }, //SiMaterialui },
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
