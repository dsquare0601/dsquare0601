import { Frame, Map, PieChart } from "lucide-react";

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
      icon: Frame,
      isActive: true,
    },
    {
      name: "Experience",
      url: "#experience",
      icon: PieChart,
    },
    {
      name: "Projects",
      url: "#projects",
      icon: Map,
    },
    {
      name: "Skills & Tools",
      url: "#skills",
      icon: Map,
    },
    {
      name: "Contact Me",
      url: "#contact-me",
      icon: Map,
    },
  ],
};
