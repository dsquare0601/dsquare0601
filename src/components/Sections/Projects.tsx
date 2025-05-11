import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "../ui/scroll-area";

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

export default function Projects({
  setIsScrollLocked,
  id,
}: {
  setIsScrollLocked: (locked: boolean) => void;
  id: string;
}) {
  return (
    <section
      id={id}
      className="from-background via-background/95 to-background/90 flex h-full items-center justify-center bg-gradient-to-br"
    >
      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 2xl:px-60">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12"
        >
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="grid grid-rows-2 items-end">
              <h2 className="3xl:text-3xl 4xl:text-3xl 5xl:text-5xl 6xl:text-7xl from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-2xl">
                Professional Projects
              </h2>
              <p className="3xl:text-sm 4xl:text-sm 5xl:text-2xl 6xl:text-4xl text-muted-foreground text-sm italic md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                Mock Names due to NDA
              </p>
            </div>
            <ScrollArea
              className="3xl:h-auto 4xl:h-[800px] 5xl:h-auto 6xl:h-auto scroll-area from-background/40 via-background/30 to-background/20 hover:from-background/50 hover:to-background/30 border-primary/10 hover:border-primary/20 h-[500px] rounded-lg border bg-gradient-to-br p-4 backdrop-blur-sm transition-all duration-300 xl:h-[600px] 2xl:h-[600px]"
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
                      <AccordionTrigger className="hover:bg-primary/5 5xl:py-5 6xl:py-10 rounded-lg px-4 text-left transition-all duration-300">
                        <div className="flex flex-col">
                          <span className="3xl:text-base 4xl:text-base 5xl:text-2xl 6xl:text-4xl text-primary/80 group-hover:text-primary text-base font-semibold transition-colors md:text-base lg:text-base xl:text-base 2xl:text-base">
                            {project.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="border-primary/20 hover:border-primary/40 space-y-2 border-l-2 px-4 transition-colors"
                        >
                          <p className="3xl:text-sm 4xl:text-sm 5xl:text-2xl 6xl:text-4xl text-muted-foreground text-sm leading-relaxed md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
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
            <div className="grid grid-rows-2 items-end">
              <h2 className="3xl:text-3xl 4xl:text-3xl 5xl:text-5xl 6xl:text-7xl from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-2xl">
                Personal Projects
              </h2>
              <p className="3xl:text-sm 4xl:text-sm 5xl:text-2xl 6xl:text-4xl text-muted-foreground invisible text-sm italic md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                Mock Names due to NDA
              </p>
            </div>
            <ScrollArea
              className="3xl:h-auto 4xl:h-[800px] 5xl:h-auto 6xl:h-auto scroll-area from-background/40 via-background/30 to-background/20 hover:from-background/50 hover:to-background/30 border-primary/10 hover:border-primary/20 h-[500px] rounded-lg border bg-gradient-to-br p-4 backdrop-blur-sm transition-all duration-300 xl:h-[600px] 2xl:h-[600px]"
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
                      <AccordionTrigger className="hover:bg-primary/5 5xl:py-5 6xl:py-10 rounded-lg px-4 text-left transition-all duration-300">
                        <div className="flex flex-col">
                          <span className="3xl:text-base 4xl:text-base 5xl:text-2xl 6xl:text-4xl text-primary/80 group-hover:text-primary text-base font-semibold transition-colors md:text-base lg:text-base xl:text-base 2xl:text-base">
                            {project.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="border-primary/20 hover:border-primary/40 space-y-4 border-l-2 px-4 transition-colors"
                        >
                          <p className="3xl:text-sm 4xl:text-sm 5xl:text-2xl 6xl:text-4xl text-muted-foreground text-sm leading-relaxed md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                            {project.description}
                          </p>
                          {project?.image && (
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
  );
}
