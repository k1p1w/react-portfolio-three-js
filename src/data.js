import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTableau,
  IoLogoDiscord,
} from 'react-icons/io5';

import img1 from './images/react-sneakers.png';

export const Experience = [
  {
    id: 1,
    date: 'Coming soon...',
    iconsSrc: <IoCodeWorking />,
    title: 'Junior front end developer',
    location: 'Kyiv, Ukraine',
    description: 'Junior front end developer, Git, Node.js',
  },
];

export const Projects = [
  {
    id: 1,
    name: 'React-sneakers',
    imageSrc: img1,
    techs: 'React Js, JSX, Sass',
    github: 'https://github.com/k1p1w/react-sneakers',
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: 'GitHub',
    link: 'https://github.com/k1p1w',
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoInstagram className="text-yellow-100 text-3xl cursor-pointer" />
    ),
    name: 'Instagram',
    link: 'https://www.instagram.com/artern1da/',
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/artem-hryshchenko-455068244/',
  },
  {
    id: 4,
    iconSrc: <IoLogoTableau className="text-sky-700 text-3xl cursor-pointer" />,
    name: 'Telegram',
    link: 'https://t.me/Arternida',
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoDiscord className="text-indigo-400 text-3xl cursor-pointer" />
    ),
    name: 'Discord',
    link: 'https://discordapp.com/users/323523292831023104/',
  },
];
