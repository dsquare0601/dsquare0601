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

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>About Me!</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Scrollable content sections */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto snap-y snap-mandatory">
          {/* About Me Section */}
          <section className="min-h-[calc(100vh-4rem)] snap-start">
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

          {/* Experience Section */}
          <section className="min-h-[calc(100vh-4rem)] snap-start flex items-center">
            <div className="px-20 w-full">
              <div className="relative w-full py-32">
                {/* Horizontal line */}
                <div className="top-[53%] absolute left-0 w-full h-0.5 bg-gray-200"></div>

                <div className="flex justify-between relative max-w-6xl mx-auto">
                  {/* Role 1 - Top */}
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

                  {/* Role 2 - Bottom */}
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

                  {/* Role 3 - Top */}
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

                  {/* Role 4 - Bottom */}
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

          {/* Projects Section */}
          <section className="min-h-[calc(100vh-4rem)] snap-start flex items-center justify-center">
            <div className="container mx-auto px-20">
              <div className="grid grid-cols-2 gap-8">
                {/* Professional Projects */}
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

                {/* Personal Projects */}
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

          {/* Skills Section */}
          <section className="min-h-[calc(100vh-4rem)] snap-start">
            <div className="px-40 h-full flex items-center">
              <div className="grid items-center gap-8">
                <h2 className="text-4xl font-bold">Skills</h2>
                {/* Add your skills content */}
              </div>
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const professionalProjects = [
  {
    title: "Preview Free Movies Project",
    description:
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
      "End-to-end system for managing water and sewer infrastructure",
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
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
      "Comprehensive insurance policy and claims management platform",
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
    image: "/images/portfolio.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: Globe }],
  },
  {
    title: "r3f-vite-fm-shadcn",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
  {
    title: "uicaps",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
  {
    title: "Login-SignUp-API",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
  {
    title: "Binary-Problem",
    image: "/images/tasks.png",
    techStack: [{ icon: Github }, { icon: Github }, { icon: GitBranch }],
  },
];
