"use client";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";

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
          <section className="min-h-[calc(100vh-4rem)] snap-start">
            <div className="px-20 h-full flex items-center">
              <div className="grid items-center gap-8">
                <h2 className="text-4xl font-bold">Experience</h2>
                {/* Add your experience content */}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="min-h-[calc(100vh-4rem)] snap-start">
            <div className="px-20 h-full flex items-center">
              <div className="grid items-center gap-8">
                <h2 className="text-4xl font-bold">Projects</h2>
                {/* Add your projects content */}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="min-h-[calc(100vh-4rem)] snap-start">
            <div className="px-20 h-full flex items-center">
              <div className="grid items-center gap-8">
                <h2 className="text-4xl font-bold">Skills</h2>
                {/* Add your skills content */}
              </div>
            </div>
          </section>
        </div>
        {/* <div> */}
        {/* <div className="px-20">
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
                  <Label className="text-6xl">G’day, I’m Dhaval Darji</Label>
                  <Label className="text-5xl">Full Stack Web Developer</Label>
                  <Label className="text-3xl">
                    And Gamer / Trekker / Hiker / Traveler / Foodie.
                  </Label>
                  <Label className="text-2xl">
                    Engineer by profession, problem-solver by passion, explorer
                    by heart.
                  </Label>
                  <Label>
                    Full-stack developer who enjoys building robust backends,
                    leading teams, and delivering high-quality applications.
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
