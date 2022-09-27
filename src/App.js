import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoLogoGithub } from 'react-icons/io5';

import k1p1w from './images/k1p1w.png';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from './data';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20 overflow-hidden">
        {/* Navigation Bar section */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">
              Hryshchenko Artem
            </p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>

              <a
                href="https://github.com/k1p1w/react-portfolio-three-js/archive/refs/heads/main.zip"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 hover:border-gray-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl duration-100 ease-in-out"
              >
                Download
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: '0.1s', type: 'spring' }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>

                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-base text-textBase font-medium hover:text-slate-100 hover:border-gray-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a>
              </motion.div>
            )}
          </div>
        </nav>

        <div className="relative" id="home">
          <Spline scene="https://prod.spline.design/B3v-gMTZa8WZdd4f/scene.splinecode" />

          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
              <p className="text-textBase">Press and drag to orbit</p>
            </div>
          </div>
        </div>

        {/* Main section */}

        <main className="w-[90%] mt-4">
          {/* About section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/* image box */}
            <div className="w-full h-580 flex items-center justify-center">
              <div className="w-275 h-340 bg-gray-700 rounded-md relative mb-12">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={k1p1w}
                  alt=""
                />
              </div>
            </div>

            {/* content box */}
            <div className="w-full h-580 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                Всім доброго дня, це моє невелике портфоліо, ледь не дороблено,
                але все ж таки. Мене звуть Артем і мені 21, вивчаю програмування
                майже рік без будь-якої допомоги (тобто самоучка). У мене є
                знання в HTML, CSS, JS, ReactJS, NodeJs та Git/Github(але вони
                не ідеальні та вдосконалюються щодня). Хотілося б знайти роботу
                у сфері IT-технологій (цікавить більше Front-end), і вже там
                удосконалювати їх з людьми, які зможуть допомогти чи підказати в
                чомусь. Спасибі за увагу. Нижче є посилання на мої соціальні
                мережі.
              </p>

              <motion.button
                whileTap={{ scale: 0.8 }}
                class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  -- Bye👋 --
                </span>
              </motion.button>
            </div>
          </section>

          {/* TimeLine */}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: 'rgb(21, 24, 31)',
                      color: '#888',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgb(21, 24, 31)',
                    }}
                    date={n.date}
                    iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          {/* Projects section */}
          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((n) => (
                <div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-md text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    className="w-full h-full object-cover rounded-md my-4"
                    src={n.imageSrc}
                    alt="images"
                  />

                  <div className="flex flex-1 items-center justify-around">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>

                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>

          {/* Contact section */}
          <section
            className="flex flex-col items-center justify-center w-full my-24"
            id="contact"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>

            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    href={n.link}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
