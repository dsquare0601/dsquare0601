import { motion } from "framer-motion";
import { ScrollArea } from "../ui/scroll-area";

const textClassesExperience = {
  title:
    "text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-semibold bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 bg-clip-text text-transparent",
  company:
    "md:text-sm lg:text-sm xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl text-primary/60 font-medium",
  period:
    "text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base 3xl:text-xl 4xl:text-2xl text-gray-400 border-l-2 border-primary/30 pl-2 mt-2",
  description:
    "text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base 3xl:text-xl 4xl:text-2xl text-gray-400 leading-relaxed pt-2",
};

export default function Experience({
  timelineRef,
  isInView,
  id,
}: {
  timelineRef: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
  id: string;
}) {
  return (
    <section
      id={id}
      className="from-background to-background/80 flex h-full items-center justify-center bg-gradient-to-br"
    >
      <ScrollArea className="3xl:hidden 4xl:hidden 5xl:hidden 6xl:hidden scroll-area h-full w-[90%] rounded-lg border-none p-4 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        {[
          {
            title: "Full Stack Development Consultant",
            company: "Qualitésoft",
            period: "May 2023 - Present",
            description:
              "Built and optimized end-to-end systems, integrating batch NDA processing, rewards distribution, VIP guest management, and third-party recruiter onboarding with secure payment flows.",
            position: "bottom",
          },

          {
            title: "Sr. Full Stack Developer",
            company: "Algoscale Technologies",
            period: "Mar 2023 - Apr 2023",
            description:
              "Designed and deployed end-to-end full-stack solutions across 5+ projects in course management, insurance, and infrastructure domains, leveraging Node.js, React, Strapi, and AWS/Azure to build scalable applications while optimizing APIs, automating workflows, and enhancing search and analytics with Redis and Elasticsearch.",
            position: "top",
          },

          {
            title: "Sr. Full Stack Developer",
            company: "iGenerate Technology",
            period: "Feb 2021 - Feb 2023",
            description:
              "Designed and deployed scalable full-stack solutions, integrating AWS services, optimizing data pipelines, mentoring freshers, and leading cross-functional teams across multiple mid-level applications.",
            position: "bottom",
          },

          {
            title: "Full Stack Trainee",
            company: "MicroGO LLP",
            period: "Sep 2020 - Dec 2020",
            description:
              "Planned and developed 3 operational dashboards from scratch, leading a 5-member team while designing databases, implementing CI/CD pipelines, and building 24+ IoT-driven APIs.",
            position: "top",
          },
        ].map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={index}
            className="border-primary/10 from-background/50 via-background/40 to-background/30 hover:border-primary/20 hover:from-background/60 hover:to-background/40 hover:shadow-primary/5 mb-6 w-full overflow-hidden rounded-xl border bg-gradient-to-br p-5 shadow-lg backdrop-blur-sm transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h5 className={textClassesExperience.title}>{exp.title}</h5>
                <div className="flex flex-col gap-1">
                  <p className={`${textClassesExperience.company} opacity-90`}>
                    {exp.company}
                  </p>
                  <p
                    className={`${textClassesExperience.period} mt-0 inline-flex items-center`}
                  >
                    {exp.period}
                  </p>
                </div>
              </div>
              <p
                className={`${textClassesExperience.description} pt-0 opacity-85`}
              >
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </ScrollArea>

      <div className="mxs:hidden msm:hidden mmd:hidden 3xl:block 4xl:block 5xl:block 6xl:block w-full px-4 sm:block sm:px-8 md:block md:px-16 lg:block lg:px-20 xl:block 2xl:block">
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
            className="from-primary/5 via-primary/80 to-primary/5 absolute top-[53%] left-0 h-0.5 w-full bg-gradient-to-r"
          />

          <div className="relative mr-auto flex w-[80%] flex-col justify-between gap-8 md:flex-row md:gap-4">
            {[
              {
                title: "Full Stack Development Consultant",
                company: "Qualitésoft",
                period: "May 2023 - Present",
                description:
                  "Built and optimized end-to-end systems, integrating batch NDA processing, rewards distribution, VIP guest management, and third-party recruiter onboarding with secure payment flows.",
                position: "bottom",
                width:
                  "w-full md:w-[35%] lg:w-[40%] xl:w-[30%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[41%] 4xl:w-[35%]",
              },

              {
                title: "Sr. Full Stack Developer",
                company: "iGenerate Technology",
                period: "Feb 2021 - Feb 2023",
                description:
                  "Designed and deployed scalable full-stack solutions, integrating AWS services, optimizing data pipelines, mentoring freshers, and leading cross-functional teams across multiple mid-level applications.",
                position: "bottom",
                width:
                  "w-full md:w-[35%] lg:w-[38%] xl:w-[30%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[41%] 4xl:w-[35%]",
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
                className={`${exp.width || "w-full md:w-[35%]"} group relative`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isInView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  className="bg-primary absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
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
                    className="from-background via-background/95 to-background/90 border-primary/10 hover:shadow-primary/20 hover:border-primary/30 space-y-3 rounded-lg border bg-gradient-to-br p-4 shadow-lg backdrop-blur-sm transition-all duration-300"
                  >
                    <h5 className={textClassesExperience.title}>{exp.title}</h5>
                    <p className={textClassesExperience.company}>
                      {exp.company}
                    </p>
                    <p className={textClassesExperience.period}>{exp.period}</p>
                    <p className={textClassesExperience.description}>
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative ml-auto flex w-[80%] flex-col justify-between gap-8 md:flex-row md:gap-4 lg:w-[85%] xl:w-[80%] 2xl:w-[80%]">
            {[
              {
                title: "Sr. Full Stack Developer",
                company: "Algoscale Technologies",
                period: "Mar 2023 - Apr 2023",
                description:
                  "Designed and deployed end-to-end full-stack solutions across 5+ projects in course management, insurance, and infrastructure domains, leveraging Node.js, React, Strapi, and AWS/Azure to build scalable applications while optimizing APIs, automating workflows, and enhancing search and analytics with Redis and Elasticsearch.",
                position: "top",
                width:
                  "w-full md:w-[50%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[41%] 4xl:w-[35%]",
              },
              {
                title: "Full Stack Trainee",
                company: "MicroGO LLP",
                period: "Sep 2020 - Dec 2020",
                description:
                  "Planned and developed 3 operational dashboards from scratch, leading a 5-member team while designing databases, implementing CI/CD pipelines, and building 24+ IoT-driven APIs.",
                position: "top",
                width:
                  "w-full md:w-[35%] lg:w-[34%] xl:w-[30%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[41%] 4xl:w-[35%]",
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
                className={`${exp.width || "w-full md:w-[35%]"} group relative`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isInView ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  className="bg-primary absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
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
                    className="from-background via-background/95 to-background/90 border-primary/10 hover:shadow-primary/20 hover:border-primary/30 space-y-3 rounded-lg border bg-gradient-to-br p-4 shadow-lg backdrop-blur-sm transition-all duration-300"
                  >
                    <h5 className={textClassesExperience.title}>{exp.title}</h5>
                    <p className={textClassesExperience.company}>
                      {exp.company}
                    </p>
                    <p className={textClassesExperience.period}>{exp.period}</p>
                    <p className={textClassesExperience.description}>
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
  );
}
