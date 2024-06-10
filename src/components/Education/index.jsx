import React from "react";
import { AcademicCapIcon, CalendarIcon, XCircleIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true}}
            className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
        >
            {/*First Card*/}
            <motion.div
                variants={{
                    offscreen: {
                        y: 150,
                    },
                    onscreen: {
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1,
                        },
                    },
                }}
                whileHover={{scale: 1.02}}
                className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
            >
                <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                    <a
                        href="https://www.northeastern.edu/"
                        target="_blank"
                        className="hover:text-red-500"
                    >
                        northeastern university
                    </a>
                    <span
                        className="mt-4 text-base flex items-center justify-start lowercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-s text-neutral-600 dark:text-neutral-300"/>
                        september, 2023 - may, 2027
                    </span>
                    <span
                        className="mt-2 text-base flex items-center justify-start lowercase text-neutral-600 dark:text-neutral-300">
                        <AcademicCapIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300"/>
                        bachelor of science, computer engineering and computer science
                    </span>
                    <span
                        className="mt-2 text-base flex items-center justify-start lowercase text-neutral-600 dark:text-neutral-300">
                        <XCircleIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300"/>
                        cumulative gpa: 3.85/4.00 | major gpa: 4.00/4.00
                    </span>
                </h6>
                <div className="relative mb-4">
                    <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                    <div className="relative flex justify-center">
            <span className="lowercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">

            </span>
                    </div>
                </div>

                <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
                    <li>
                        relevant coursework: fundamentals of computer science (java, kotlin), database design (sqlite,
                        mysql),
                        mathematics of data models (deep learning, python), discrete structures
                    </li>
                    <li>
                        activities: nu ieee workshop coordinator (e-board), undergraduate research club
                    </li>
                    <li>
                        competitions: harvard undergraduate trading competition 5th place podium & news-based trading
                        3rd place,
                        hacklytics 2024 (georgia institute of technology), pawhacks 1.0 (northeastern university
                        oakland)
                    </li>
                </ul>
            </motion.div>

            {/*Second Card*/}
            <motion.div
                variants={{
                    offscreen: {
                        y: 150,
                    },
                    onscreen: {
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1,
                        },
                    },
                }}
                whileHover={{scale: 1.02}}
                className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
            >
                <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
                    <a
                        href="https://www.aswarsaw.org/"
                        target="_blank"
                        className="hover:text-red-500"
                    >
                        american school of warsaw
                    </a>
                    <span
                        className="mt-4 text-base flex items-center justify-start lowercase text-neutral-600 dark:text-neutral-300">
                        <CalendarIcon className="h-4 mr-2 text-s text-neutral-600 dark:text-neutral-300"/>
                        august, 2021 - may, 2023
                    </span>
                    <span
                        className="mt-2 text-base flex items-center justify-start lowercase text-neutral-600 dark:text-neutral-300">
                        <AcademicCapIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300"/>
                        international baccalaureate diploma programme
                    </span>
                    <span
                        className="mt-2 text-base flex items-center justify-start lowercase text-neutral-600 dark:text-neutral-300">
                        <XCircleIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300"/>
                        cumulative gpa: 95/100
                    </span>
                </h6>
                <div className="relative mb-4">
                    <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                    >
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                    <div className="relative flex justify-center">
            <span className="lowercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                Relevant Courses
            </span>
                    </div>
                </div>

                <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
                    <li>
                        ibdp courses: math analysis & approaches higher level, computer science higher level,
                        business management higher level, physics standard level, english a: language & literature
                        standard level, spanish ab initio standard level
                    </li>
                    <li>
                        activities and societies: competitive coding club | student council | student leadership council:
                        executive co-publicist & 10th grade publicist | media club: livestream specialist; photographer |
                        10+ times coffee house solo singer/performer | jazz/rock/pop razz band lead singer |
                        varsity football | varsity tennis | online gazette | mun: asmmun 2020, iv zygmun 2021, yale mun |
                        speech & debate | relay for life
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default Education;
