import { motion, useInView } from "framer-motion";
import { Label } from "../ui/label";
import { AnimatedWords } from "../animated-words";

const textGradients = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
  secondary:
    "bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent",
  accent:
    "bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent",
};

export default function AboutMe({ id }: { id: string }) {
  return (
    <section id={id} className="flex h-full items-center">
      <div className="flex h-full min-h-screen items-center px-4 sm:px-8 md:px-16 lg:px-40">
        <div className="grid gap-6 md:gap-12">
          <div className="md:col-start-1">
            <div>
              <div className="mxs:space-y-1 flex flex-col space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <Label className="custom-heading 3xl:text-[8rem] 4xl:text-[10rem] 5xl:text-[10rem] 6xl:text-[16rem] mxs:pb-1 msm:pb-1 mmd:pb-1 flex flex-wrap pb-2 text-2xl leading-[1.15] sm:text-4xl md:text-4xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
                    G'day,{" "}
                    <span className={`${textGradients.primary} font-bold`}>
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
                    className={`3xl:text-7xl 4xl:text-8xl 5xl:text-8xl 6xl:text-[10rem] text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl ${textGradients.secondary}`}
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
                    className={`3xl:text-6xl 4xl:text-7xl 5xl:text-7xl 6xl:text-8xl text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl ${textGradients.accent} flex items-center gap-2`}
                  >
                    On the weekend, I'm a <AnimatedWords />
                  </Label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Label className="3xl:mt-10 4xl:mt-10 5xl:mt-10 6xl:mt-10 mxs:mt-5 msm:mt-5 mmd:mt-5 3xl:text-4xl 4xl:text-5xl 5xl:text-5xl 6xl:text-6xl mxs:text-xs msm:text-sm mmd:text-base mt-20 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-base text-transparent transition-all duration-300 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 sm:mt-5 sm:text-xl md:mt-5 md:text-xl lg:mt-5 lg:text-2xl xl:mt-5 xl:text-2xl 2xl:mt-10 2xl:text-3xl">
                    Engineer by profession, problem-solver by passion, explorer
                    by heart.
                  </Label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Label className="3xl:text-3xl 4xl:text-4xl 5xl:text-4xl 6xl:text-6xl mxs:text-xs msm:text-sm mmd:text-base bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-sm text-transparent transition-all duration-300 hover:from-sky-500 hover:via-blue-500 hover:to-indigo-500 sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Full-stack developer who enjoys building robust backends,
                    leading teams, and delivering high-quality applications.
                  </Label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="3xl:mt-15 4xl:mt-15 5xl:mt-15 6xl:mt-25 mxs:mt-5 msm:mt-5 mmd:mt-5 mt-15 grid grid-cols-3 text-green-300 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-10 2xl:mt-10">
                    <div className="flex flex-col">
                      <Label className="3xl:text-[6rem] 4xl:text-[8rem] 5xl:text-[8rem] 6xl:text-[12rem] mxs:text-3xl msm:text-3xl mmd:text-3xl text-7xl font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-6xl 2xl:text-7xl">
                        4.5+
                      </Label>
                      <Label className="3xl:text-2xl 4xl:text-base 5xl:text-3xl 6xl:text-4xl mxs:text-xs msm:text-sm mmd:text-base text-base sm:text-base md:text-base lg:text-xs xl:text-base 2xl:text-base">
                        Years Of Experience
                      </Label>
                    </div>

                    <div className="flex flex-col">
                      <Label className="3xl:text-[6rem] 4xl:text-[8rem] 5xl:text-[8rem] 6xl:text-[12rem] mxs:text-3xl msm:text-3xl mmd:text-3xl text-7xl font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-6xl 2xl:text-7xl">
                        20+
                      </Label>
                      <Label className="3xl:text-2xl 4xl:text-base 5xl:text-3xl 6xl:text-4xl mxs:text-xs msm:text-sm mmd:text-base text-base sm:text-base md:text-base lg:text-xs xl:text-base 2xl:text-base">
                        Projects Completed
                      </Label>
                    </div>

                    <div className="flex flex-col">
                      <Label className="3xl:text-[6rem] 4xl:text-[8rem] 5xl:text-[8rem] 6xl:text-[12rem] mxs:text-3xl msm:text-3xl mmd:text-3xl text-7xl font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-6xl 2xl:text-7xl">
                        15+
                      </Label>
                      <Label className="3xl:text-2xl 4xl:text-base 5xl:text-3xl 6xl:text-4xl mxs:text-xs msm:text-sm mmd:text-base text-base sm:text-base md:text-base lg:text-xs xl:text-base 2xl:text-base">
                        Languages & Frameworks
                      </Label>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
