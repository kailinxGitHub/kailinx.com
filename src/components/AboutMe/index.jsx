import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { motion } from "framer-motion";

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
        </motion.div>

        {/*About Me Tab*/}
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
              viewport={{once: true}}
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{type: "linear", duration: 0.5}}
              className="w-full text-primary md:w-1/2 dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
              research assistant | software engineer
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              👋 hi! i'm kailin, a rising sophomore at northeastern university majoring in
              computer engineering and computer science with a mathematics minor. i
              have immense interest in software, machine learning, data, cloud, big data,
              site reliability, systems, backend, fpga engineering.
            </p>
            <br/>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              🤝 if you’re seeking a dedicated, passionate, and continuously learning student
              with a strong foundation in computer engineering and computer science, i
              invite you to consider my profile. let’s connect and explore how my skills
              and interests align with your organization’s needs.
            </p>
            <br/>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              👩‍💻👨‍💻 if you are a fellow student in my disciplines, let’s collaborate and learn
              together! whether it’s a group study session, a joint project, or just a
              discussion about the latest tech trends, i’m always open to new ideas and
              perspectives. reach out and let’s enrich our academic journey together.
            </p>
            <br/>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              🎓 are you a high school student or underclassman embarking on your academic
              journey in computer science and engineering? i’m here to help! from sharing
              study tips to clarifying doubts, feel free to reach out. remember, every
              expert was once a beginner. let’s learn and grow together!
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
            )}
            <img
              src={images.me}
              className="h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg"
              alt="Image Felix"
              loading="lazy"
              width={664}
              height={450}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
