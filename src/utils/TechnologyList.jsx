// import {  BsBootstrap } from "react-icons/bs";
// import {  SiExpress, SiGithub, SiMongodb, SiMysql, SiNodedotjs, SiPostman, SiReact, SiReactbootstrap } from "react-icons/si";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";



// export const TechnologyList = [
//     {
//         _id:1,
//         name:'HTML5',
//         icon: SiHtml5,
//     },

//     {
//         _id:2,
//         name:'CSS3',
//         icon:SiCss3 ,
//     },

//     {
//         _id:3,
//         name:'JAVASCRIPT',
//         icon: SiJavascript  ,
//     },

//     {
//         _id:4,
//         name:'REACT.JS',
//         icon: SiReact,
//     },

//     {
//         _id:5,
//         name:'BOOTSTRAP',
//         icon: BsBootstrap ,
//     },

//     {
//         _id:6,
//         name:'REACT BOOTSTRAP',
//         icon: SiReactbootstrap ,
//     },

//     {
//         _id:7,
//         name:'NODE.JS',
//         icon:SiNodedotjs ,
//     },

//     {
//         _id:8,
//         name:'EXPRESS.JS',
//         icon: SiExpress ,
//     },

//     {
//         _id:9,
//         name:'MOGODB',
//         icon: SiMongodb ,
//     },

//     {
//         _id:10,
//         name:'MYSQL',
//         icon: SiMysql ,
//     },

//     {
//         _id:10,
//         name:'GitHub',
//         icon: SiGithub ,
//     },

//     {
//         _id:11,
//         name:'Postman Tool',
//         icon: SiPostman ,
//     }
   
// ];








// import { BsBootstrap } from "react-icons/bs";
// import { 
//   SiExpress, SiGithub, SiMongodb, SiMysql, SiNodedotjs, SiPostman, 
//   SiReact, SiReactbootstrap, SiHtml5, SiCss3, SiJavascript, SiSpringboot,
//   SiIntellijidea, SiSwagger, SiAmazons3
// } from "react-icons/si";
// import { MdSms, MdMailOutline } from "react-icons/md"; // For SMSIdea alternative and SMTP
// import { FaAws } from "react-icons/fa"; // Font Awesome AWS icon


// export const TechnologyList = [
//   { _id: 1, name: 'HTML5', icon: SiHtml5 },
//   { _id: 2, name: 'CSS3', icon: SiCss3 },
//   { _id: 3, name: 'JAVASCRIPT', icon: SiJavascript },
//   { _id: 4, name: 'REACT.JS', icon: SiReact },
//   { _id: 5, name: 'BOOTSTRAP', icon: BsBootstrap },
//   { _id: 6, name: 'REACT BOOTSTRAP', icon: SiReactbootstrap },
//   { _id: 7, name: 'NODE.JS', icon: SiNodedotjs },
//   { _id: 8, name: 'EXPRESS.JS', icon: SiExpress },
//   { _id: 9, name: 'MONGODB', icon: SiMongodb },
//   { _id: 10, name: 'MYSQL', icon: SiMysql },  
//   { _id: 11, name: 'GitHub', icon: SiGithub },
//   { _id: 12, name: 'Postman Tool', icon: SiPostman },
//   { _id: 13, name: 'AWS SNS', icon: FaAws },
//   { _id: 14, name: 'SMSIdea', icon: MdSms },
//   { _id: 15, name: 'JAVA SPRING BOOT', icon: SiSpringboot },
//   { _id: 16, name: 'INTELLIJ IDEA', icon: SiIntellijidea },
//   { _id: 17, name: 'SMTP', icon: MdMailOutline },
//   { _id: 18, name: 'AWS S3 BUCKET', icon: SiAmazons3 },
//   { _id: 19, name: 'LARAGON MYSQL', icon: SiMysql },
//   { _id: 20, name: 'SWAGGER', icon: SiSwagger },
  
// ];


import { BsBootstrap } from "react-icons/bs";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactbootstrap,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiIntellijidea,
  SiEclipseide,
  SiJira,
  SiAmazons3,
} from "react-icons/si";

import { MdSms, MdMailOutline } from "react-icons/md";
import { FaAws, FaCubes, FaJava } from "react-icons/fa";

export const TechnologyList = [
  // Frontend
  { _id: 1, name: "HTML5", icon: SiHtml5 },
  { _id: 2, name: "CSS3", icon: SiCss3 },
  { _id: 3, name: "JavaScript", icon: SiJavascript },
  { _id: 4, name: "React.js", icon: SiReact },
  { _id: 5, name: "React Bootstrap", icon: SiReactbootstrap },
  { _id: 6, name: "Bootstrap", icon: BsBootstrap },
  { _id: 7, name: "Vite.js", icon: SiVite },

  // Backend
  { _id: 8, name: "Java", icon: FaJava },
  { _id: 9, name: "Spring Boot", icon: SiSpringboot },
  { _id: 10, name: "Microservices", icon: FaCubes },
  { _id: 11, name: "Node.js", icon: SiNodedotjs },
  { _id: 12, name: "Express.js", icon: SiExpress },

  // Database
  { _id: 13, name: "MongoDB", icon: SiMongodb },
  { _id: 14, name: "MySQL", icon: SiMysql },
  { _id: 15, name: "Laragon MySQL", icon: SiMysql },

  // AWS / Cloud
  { _id: 16, name: "AWS SNS", icon: FaAws },
  { _id: 17, name: "AWS S3", icon: SiAmazons3 },

  // Communication / Integration
  { _id: 18, name: "SMSIdea", icon: MdSms },
  { _id: 19, name: "SMTP", icon: MdMailOutline },

  // API / Development Tools
  { _id: 20, name: "REST API", icon: SiSwagger },
  { _id: 21, name: "Postman", icon: SiPostman },
  { _id: 22, name: "Swagger", icon: SiSwagger },
  { _id: 23, name: "GitHub", icon: SiGithub },

  // IDE
  { _id: 24, name: "IntelliJ IDEA", icon: SiIntellijidea },
  { _id: 25, name: "Eclipse", icon: SiEclipseide },

  // Project Management
  { _id: 26, name: "Jira", icon: SiJira },
];