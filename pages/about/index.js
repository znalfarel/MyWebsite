import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaNodeJs,
  FaLaptopCode,
  FaScrewdriver,
  FaTools,
  FaUserCog,
  FaWindows
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMikrotik,
  SiProxmox,
  SiUbuntu,
  SiDebian
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Network & System Administrator',
        icons: [SiMikrotik, SiProxmox, SiUbuntu, FaServer, FaNetworkWired, SiDebian]
      },
      {
        title: 'Web Development',
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          FaNodeJs,
        ],
      },
      {
        title: 'Laptop Technician',
        icons: [
          FaLaptopCode,
          FaWindows,
          FaTools,
          FaUserCog
        ],
      },
    ],
  },
  {
    title: 'Certificate',
    info: [
      {
        title: 'Network Technician Career Path by Cisco',
        stage: '2024',
      },
      {
        title: 'Certificate of Competency by PT. Radnet Digital Indonesia',
        stage: '2025',
      },
      {
        title: 'Intro to Software Engineering by RevoU',
        stage: '2025',
      },
      {
        title: 'Code Generations and Optimization by IBM SkilsBuild x Hacktiv8',
        stage: '2025',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Laptop Technician - Laptop Yes',
        stage: '2023',
      },
      {
        title: 'Network Engineer - SMK YPM 1 TAMAN',
        stage: '2023 - 2025',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Computer and Network Engineering - SMK YPM 1 TAMAN',
        stage: '2024',
      },
      {
        title: 'Informatics Engineering - Muhammadiyah University of Sidoarjo',
        stage: '2025',
      }
    ],
  },
];

//componnents
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import {motion} from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className="hidden xl:flex absolute bottom-0 -left-[330px]"
        >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="h2">
            Technical Expertise Drives  Digital<span className="text-accent"> Transformation.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="maxw-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            2 years ago, I began my career as a freelance laptop technician. Since then, I transitioned to a network engineer role, and currently, focused on learning web development.
          </motion.p>
          { /* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={18} duration={5} /> 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years Old</div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> + 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years Of Experience</div>
              </div>
              {/* prjoects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> + 
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
              {/* awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                key={itemIndex} 
                className={`${index === itemIndex && 
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconIndex) => {
                    console.log(typeof Icon);
                    return <Icon key={iconIndex} className="text-2xl text-white hover:text-accent transition duration-300" />
            })}
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
