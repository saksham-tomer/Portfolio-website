"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "GitHub Readme Creator",
    desc: "Create beautiful readme files for GitHub in an instant (mande with Next.js react Dnd kit , tailwind css, typescript with support for multiple languages",
    img: "/gitreadme.png",
    link: "https://github.com/saksham-tomer/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Web-RTC app with group chat",
    desc: "Chatty is a group video and chat app made in vanill js with agora sdk",
    img: "/webrtc.png",
    link: "https://github.com/saksham-tomer/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "AI note taking app",
    desc: "AI-nottyy is an AI note taking app that use the power of DALL-E and openAI api to autocomplete your prompts and has neon db with drizzle orm as database with auto saving features",
    img: "/notion.png",
    link: "https://github.com/saksham-tomer/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "AI Chat with Pdf",
    desc: "It is an amazing app that lets you upload a pdf file and then ask any question from the data given in the pdf. This app was built with Next.js with tailwind css, shadcn-UI, AWS s3 drizzle orm Clerk auth and stripe payment integration ",
    img: "/aipdf.png",
    link: "https://github.com/saksham-tomer/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "3D pirate card game",
    desc: "This is a game built with THREE.js and playroom kit. It is a multi-player 3d card game with amazing sound effects. Pick a card and try to collect jems",
    img: "/game.png",
    link: "https://github.com/saksham-tomer/",
  },
   {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Full stack RemindApp",
    desc: "It is a full stack reminder app with beautiful components curtesy of shadcn-ui. It is made with next js typescript react hook form, clerk auth, prisma orm and zod validator ",
    img: "/todo.png",
    link: "https://github.com/saksham-tomer/",
  },
   {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Full stack social media app",
    desc: "It a full stack mern app with all the features of a fully fledged social media app. Responsive design and a dark mode toggle" ,
    img: "/social.png",
    link: "https://github.com/saksham-tomer/",
  },
   {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Discord bot",
    desc: "Discord bot made in node js" ,
    img: "/discordbot.png",
    link: "https://github.com/saksham-tomer/",
  },
  {
    id: 9,
    color: "from-red-300 to-blue-300",
    title: "",
    desc: "",
    img: "/last.png",
    link: ""
  }


];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
         <div className="flex flex-col">
          
           My Works
            <motion.svg
              className="ml-auto mr-auto mt-14"
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={90}
              height={90}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
              </div>
        </div>
        
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill className="object-cover" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] font-bold text-lg font-mono">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="min-h-screen min-w-screen flex items-center justify-center">
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">Full Stack Developer, 
              Loves BlockChain
                
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

                