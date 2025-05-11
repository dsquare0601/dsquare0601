import { motion } from "framer-motion";

import { Database, Server, Code, Layers, Cloud, Wrench } from "lucide-react";
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
import Image from "next/image";

export default function Skills({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="from-background via-background/95 to-background/90 flex h-full items-center justify-center bg-gradient-to-br"
    >
      <div className="container flex min-h-screen w-full items-center px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="6xl:gap-14 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-6"
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
              className="group 3xl:p-3 4xl:p-3 5xl:p-4 6xl:p-8 from-background/50 via-background/40 to-background/30 hover:border-primary/20 hover:from-background/60 hover:to-background/40 rounded-lg border bg-gradient-to-br p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-4 md:p-5 lg:p-3 xl:p-3 2xl:p-3"
            >
              <div className="5xl:mb-6 6xl:mb-10 mb-4 flex items-center gap-3 lg:mb-2 xl:mb-4">
                <section.icon className="3xl:w-5 3xl:h-5 4xl:w-5 4xl:h-5 5xl:w-10 5xl:h-10 6xl:w-14 6xl:h-14 text-primary/70 group-hover:text-primary h-6 w-6 transition-colors sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5" />
                <h3 className="3xl:text-3xl 4xl:text-3xl 5xl:text-4xl 6xl:text-6xl from-primary/80 via-primary/60 to-primary/80 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent sm:text-xl md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
                  {section.title}
                </h3>
              </div>
              <div className="3xl:gap-2 4xl:gap-2 5xl:gap-6 6xl:gap-6 grid grid-cols-4 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-1 xl:grid-cols-4 xl:gap-2 2xl:gap-2">
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
                    className="3xl:p-2 4xl:p-2 5xl:p-4 6xl:p-4 hover:bg-accent/40 group/skill flex flex-col items-center justify-center rounded-lg p-2 transition-all duration-200 sm:p-2.5 md:p-3 lg:p-1 xl:p-2 2xl:p-2"
                  >
                    {skill.isImage ? (
                      <div className="3xl:w-8 3xl:h-8 4xl:w-6 4xl:h-6 5xl:w-12 5xl:h-12 6xl:w-24 6xl:h-24 mb-2 h-6 w-6 opacity-80 transition-opacity group-hover/skill:opacity-100 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6">
                        {skill.icon}
                      </div>
                    ) : (
                      <skill.icon className="3xl:w-8 3xl:h-8 4xl:w-6 4xl:h-6 5xl:w-12 5xl:h-12 6xl:w-24 6xl:h-24 text-primary/80 group-hover/skill:text-primary mb-2 h-6 w-6 opacity-80 transition-opacity group-hover/skill:opacity-100 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6" />
                    )}
                    <span className="3xl:text-lg 4xl:text-sm 5xl:text-2xl 6xl:text-4xl text-muted-foreground group-hover/skill:text-primary/90 text-center text-xs transition-colors sm:text-sm lg:text-xs xl:text-sm 2xl:text-sm">
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
  );
}

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
        className="h-full w-full object-contain"
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
        className="h-full w-full object-contain"
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
        className="h-full w-full object-contain"
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
        className="h-full w-full object-contain"
      />
    ),
  },
  { name: "Postman", icon: SiPostman },
];
