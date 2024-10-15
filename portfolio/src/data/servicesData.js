import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Development',
    description: 'I create complete web applications that work well on both the front end and back end. This includes building user-friendly interfaces and ensuring everything runs smoothly on the server side.',
    technologies: "(React, Node.js, Express, Django, MySQL, MongoDB)",
    icon: FaLaptopCode
  },
  {
    title: 'Mobile Application Development',
    description: 'I develop mobile apps for iOS and Android devices that are easy to use and visually appealing. My focus is on making sure the apps perform well and provide a great experience for users.',
    technologies: "(Flutter, Dart)",
    icon: FaMobileAlt 
  },
  {
    title: 'Desktop Application Development',
    description: 'I build desktop applications that work on different operating systems. These applications are designed to be user-friendly and efficient, helping users get their tasks done easily.',
    technologies: "(Python, Java, C#)",
    icon: FaDesktop,
  }
];

export default services;
