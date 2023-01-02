import Image from 'next/image';
import { useState } from 'react';
import speakingImage from '../../assets/speaking.jpg';
import styles from './intro.module.css';

const backgrounds = ['gears', 'circuit', 'diamonds'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function Intro() {
  const [bgPattern] = useState(
    backgrounds[randomNumber(0, backgrounds.length)]
  );

  return (
    <section
      className={`w-full py-20 md:py-0 md:h-screen  flex flex-col items-center justify-center ${styles[bgPattern]}`}
      id="intro"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        <div className="aspect-square w-2/3 md:w-2/3 relative rounded-full">
          <Image
            src={speakingImage}
            alt="Brenden giving a talk at a meetup"
            className="rounded-full shadow-lg"
            placeholder="blur"
            priority
          />
        </div>
        <div className="px-5 md:px-2 tracking-tighter">
          <h1 className="text-purple-800 dark:text-primary-light text-center md:text-left text-7xl font-extrabold">
            Hi! I&apos;m Brenden
          </h1>
          <h2 className="text-purple-800 dark:text-primary-light text-center md:text-left text-4xl">
            I&apos;m a web developer
          </h2>
          <p className="text-primary-dark dark:text-cyan-400 mt-4 text-2xl lg:text-justify md:w-4/5 ">
            I specialize in building powerfull apps with modern web
            technologies.
          </p>
          <p className="text-primary-dark dark:text-cyan-400 mt-5 md:mt-10 text-2xl md:text-justify">
            Learn more about me at my
            <a
              href="https://brenden.codes"
              className="text-purple-800 dark:text-secondary-light underline decoration-2 decoration-yellow-500 ml-1"
            >
              blog
            </a>
            , or
            <a
              href="https://brenden.fyi"
              className="text-purple-800 dark:text-secondary-light underline decoration-2 decoration-emerald-500 ml-1"
            >
              cv
            </a>
            . You can see some of my work below.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
