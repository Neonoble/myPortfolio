import { RiComputerLine } from "react-icons/ri";
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from '../types';

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Codewars</b> and <b>Leet Code</b> ",
  },
   {
     Icon: AiOutlineAntDesign,
     title: "Databases",
     about:
       "Comfortable working with <b>Firebase</b>, <b>MongoDB</b> and <b>ActiveCampaign</b>",
   },
   {
     Icon: RiComputerLine,
     title: "FullStack development",
     about:
       "Building outstanding <b>FullStack</b> websites using <b>Next.js</b>",
   },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "35",
  },
  {
    Icon: BsCircleFill,
    name: "BlackBox",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "coming soon",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "ChatGPT",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Event Tracker",
    description:
      "First Next project :) This app shows you events around the world and helps you register to attend",
    image_path: "https://deviniti.com/app/uploads/2021/10/09-20_DM-8186_EVENTS_01_MAIN-2-1024x682.png",
    deployed_url: "https://github.com/Neonoble/FirstNextApp",
    github_url: "https://github.com/Neonoble/FirstNextApp",
    category: ["next"],
    key_techs: ["Next.js", "SASS"],
  },
  {
    name: "Next Chat App",
    image_path: "data:image/png;base64,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",
    deployed_url: "https://github.com/Neonoble/NextChatApp",
    github_url: "https://github.com/Neonoble/NextChatApp",
    category: ["next"],
    description:
      "Next.js version of the React & Node chat app",
    key_techs: ["Next.js", "SASS", "AXIOS"],
  },

  {
    name: "Alumni Portal",
    image_path: "data:image/png;base64,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",
    deployed_url: "https://portal-alumni-713f4.web.app/",
    github_url: "",
    category: [ "react"],
    description:
      "Portal for past and present alumni to communicate and stay up to date",
    key_techs: [
      "React",      
      "firebase",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "data:image/png;base64,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",
    deployed_url: "https://github.com/Neonoble/ReactNodeChatApp",
    github_url: "https://github.com/Neonoble/ReactNodeChatApp",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "React-chat-engine-advanced"],
  },

  {
    name: "Weather PWA",
    image_path: "https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/23908803715_404c5de323_z.jpg?o1aYzcGOVRCiliGBBPA_iiHiUehTZ39g&itok=U3M7G6EP",
    deployed_url: "https://github.com/Neonoble/Weather_PWA",
    github_url: "https://github.com/Neonoble/Weather_PWA",
    category: ["next", "react"],
    description:
      "Typical Weather App, but as a progressive web app ",
    key_techs: ["React", "Javascript", "Weather API"],
  },

  {
    name: "Task List",
    image_path: "https://toggl.com/blog/wp-content/uploads/2018/09/project-task-list.jpg",
    deployed_url: "https://github.com/Neonoble/iXPERIENCE-WORKING-DIRECTORY/tree/master/DAY%207%20task-list",
    github_url: "https://github.com/Neonoble/iXPERIENCE-WORKING-DIRECTORY/tree/master/DAY%207%20task-list",
    category: ["react"],
    description:
      "Task list app , with firebase storage",
    key_techs: ["React", "Bootstrap", "Firebase"],
  },
  {
    name: "Todo list ",
    image_path: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=960",
    deployed_url: "https://github.com/Neonoble/CollectionOfPrjects/tree/main/JQuery%20Projects/To-Do%20List",
    github_url: "https://github.com/Neonoble/CollectionOfPrjects/tree/main/JQuery%20Projects/To-Do%20List",
    category: ["react"],
    description:
      'Simple jquery to-do list ',
    key_techs: [
      "jQuery",      
    ],
  },
  {
    name: "Node login-system",
    image_path: "data:image/jpeg;base64,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",
    deployed_url: "https://github.com/Neonoble/Node-Login-System",
    github_url: "https://github.com/Neonoble/Node-Login-System",
    category: ["node"],
    description:
      "Simple Login/Logout functionality using Node",
    key_techs: ["Node", "ejs"],
  },
];
