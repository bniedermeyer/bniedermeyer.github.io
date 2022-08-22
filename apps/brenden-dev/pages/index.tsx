import styles from './index.module.css';
import { Card } from '@libs/react/components';
import Image from 'next/image';
import speakingImage from './speaking.jpg';
import blog from '../assets/blog.svg';
import resume from '../assets/resume.svg';
import talks from '../assets/talks.svg';
import projects from '../assets/projects.svg';

export function Index() {
  return (
    <div className="page h-screen">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <div className="aspect-square w-2/3 md:w-2/3 relative rounded-full">
            <Image
              src={speakingImage}
              alt="Brenden giving a talk at a meetup"
              layout="fill"
              className="rounded-full"
              placeholder="blur"
              priority
            />
          </div>
          <div className="px-4">
            <h1 className="text-primary-dark dark:text-primary-light text-center md:text-left text-7xl">
              Hi! I&apos;m Brenden
            </h1>
            <h2 className="text-primary-dark dark:text-primary-light text-center md:text-left text-4xl">
              I&apos;m a web developer
            </h2>
            <p className="text-blue-700 dark:text-secondary-dark mt-2 md:mt-0 text-2xl text-justify md:text-left">
              I specialise in building powerfull apps with modern web{' '}
              <br className="md:hidden" />
              technologies. <br className="hidden md:block" /> Learn more about
              me at my{' '}
              <a
                href="https://brenden.codes"
                className="text-primary-dark dark:text-secondary-light"
              >
                blog
              </a>
              , or{' '}
              <a
                href="https://brenden.fyi"
                className="text-primary-dark dark:text-secondary-light"
              >
                cv
              </a>
              . You can see some of my work below.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary-light dark:bg-secondary-dark p-10 md:py-40 flex flex-col md:flex-row items-center justify-center">
        <Card title="Resume" url="https://brenden.fyi">
          <Image src={resume} alt="Resume" height={150} width={300} />
        </Card>
        <Card title="Blog" url="https://brenden.codes">
          <Image src={blog} alt="Blog" height={150} width={300} />
        </Card>
        {/* <Card
          title="Talks"
          url="https://www.youtube.com/playlist?list=PLqn52Dxq8AiW5PU9PPWXPk-YJYS9vsrJ-"
        >
          <Image src={talks} alt="Talks" height={150} width={300} />
        </Card>
        <Card title="Projects" url="https://github.com/bniedermeyer">
          <Image src={projects} alt="Projects" height={150} width={300} />
        </Card> */}
      </section>
    </div>
  );
}

export default Index;
