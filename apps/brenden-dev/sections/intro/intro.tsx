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
      className={`w-full h-full flex flex-col items-center justify-center ${styles[bgPattern]}`}
      id="intro"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        <div className="aspect-square w-2/3 md:w-2/3 relative rounded-full">
          <Image
            src={speakingImage}
            alt="Brenden giving a talk at a meetup"
            layout="fill"
            className="rounded-full shadow-lg"
            placeholder="blur"
            priority
          />
        </div>
        <div className="px-4">
          <h1 className="text-purple-800 dark:text-primary-light text-center md:text-left text-7xl font-extrabold">
            Hi! I&apos;m Brenden
          </h1>
          <h2 className="text-purple-800 dark:text-primary-light text-center md:text-left text-4xl">
            I&apos;m a web developer
          </h2>
          <p className="text-primary-dark dark:text-cyan-400 mt-2 md:mt-0 text-2xl text-justify md:text-left">
            I specialise in building powerfull apps with modern web{' '}
            <br className="md:hidden" />
            technologies. <br className="hidden md:block" /> Learn more about me
            at my{' '}
            <a
              href="https://brenden.codes"
              className="text-purple-800 dark:text-secondary-light underline decoration-2 decoration-yellow-500"
            >
              blog
            </a>
            , or{' '}
            <a
              href="https://brenden.fyi"
              className="text-purple-800 dark:text-secondary-light underline decoration-2 decoration-emerald-500"
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
