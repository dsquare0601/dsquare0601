import {
  PersonStandingIcon,
  NotebookTextIcon,
  ChartNoAxesColumnIncreasingIcon,
  CodeIcon,
  SendIcon,
} from "lucide-react";

export default {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      name: "About Me!",
      url: "#about-me",
      icon: PersonStandingIcon,
      isActive: true,
    },
    {
      name: "Experience",
      url: "#experience",
      icon: ChartNoAxesColumnIncreasingIcon,
    },
    {
      name: "Projects",
      url: "#projects",
      icon: NotebookTextIcon,
    },
    {
      name: "Skills & Tools",
      url: "#skills",
      icon: CodeIcon,
    },
    {
      name: "Contact Me",
      url: "#contact-me",
      icon: SendIcon,
    },
  ],
};
