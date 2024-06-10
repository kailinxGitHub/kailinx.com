import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const languages = [
    {
        image: images.pythonLogo,
        title: "python",
        href: "https://www.python.org/",
    },
    {
        image: images.cLogo,
        title: "c",
        href: "https://devdocs.io/c/",
    },
    {
        image: images.cppLogo,
        title: "cpp",
        href: "https://cplusplus.com/",
    },
    {
        image: images.javaLogo,
        title: "java",
        href: "https://www.java.com/en/",
    },
    {
        image: images.javascriptLogo,
        title: "javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        image: images.matlabLogo,
        title: "matlab",
        href: "https://www.mathworks.com/products/matlab.html",
    },
    {
        image: images.htmlLogo,
        title: "html",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        image: images.cssLogo,
        title: "css",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        image: images.latexLogo,
        title: "latex",
        href: "https://www.latex-project.org/help/documentation/",
    },
];

const frameworks = [
    {
        image: images.flaskLogo,
        title: "flask",
        href: "https://flask.palletsprojects.com/en/3.0.x/",
    },
    {
        image: images.djangoLogo,
        title: "django",
        href: "https://docs.djangoproject.com/en/5.0/",
    },
    {
        image: images.numpyLogo,
        title: "numpy",
        href: "https://numpy.org/",
    },
    {
        image: images.mysqlLogo,
        title: "mysql",
        href: "https://www.mysql.com/",
    },
    {
        image: images.expressLogo,
        title: "express",
        href: "https://expressjs.com/",
    },
    {
        image: images.tailwindLogo,
        title: "tailwind",
        href: "https://tailwindcss.com/",
    },
];

const TechnicalSkills = () => {

    return (
        <>
            <Tabs defaultIndex={0}>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "linear", duration: 0.5 }}
                >
                    <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
                        <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                            languages
                        </Tab>
                        <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
                            frameworks
                        </Tab>
                    </TabList>
                </motion.div>

                {/*Languages*/}
                <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
                    <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
                        <motion.div
                            viewport={{once: true}}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{type: "linear", duration: 0.5}}
                            className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
                        >
                            {languages.map((logo, index) => (
                                <a href={logo.href} target="_blank">
                                    <div
                                        key={index}
                                        className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                                    >
                                        <img
                                            className="h-14 object-contain dark:filter dark:invert"
                                            src={logo.image}
                                            alt={logo.title}
                                            loading="lazy"
                                            width={56}
                                            height={56}

                                        />
                                        <h6 className="text-xl font-semibold text-primary dark:text-white">
                                            {logo.title}
                                        </h6>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </TabPanel>

                {/*Frameworks*/}
                <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
                    <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
                        <motion.div
                            viewport={{once: true}}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{type: "linear", duration: 0.5}}
                            className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
                        >
                            {frameworks.map((logo, index) => (
                                <a href={logo.href} target="_blank">
                                    <div
                                        key={index}
                                        className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                                    >
                                        <img
                                            className="h-14 object-contain dark:filter dark:invert"
                                            src={logo.image}
                                            alt={logo.title}
                                            loading="lazy"
                                            width={56}
                                            height={56}
                                        />
                                        <h6 className="text-xl font-semibold text-primary dark:text-white">
                                            {logo.title}
                                        </h6>
                                    </div>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default TechnicalSkills;