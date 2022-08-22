import Image from 'next/image';
import { Card } from '@libs/react/components';
import blog from '../../assets/blog.svg';
import resume from '../../assets/resume.svg';
import talks from '../../assets/talks.svg';
import projects from '../../assets/projects.svg';
import styles from './info.module.css';

/* eslint-disable-next-line */
export interface InfoProps {}

export function Info(props: InfoProps) {
  return (
    <section
      className="w-full bg-secondary-light dark:bg-secondary-dark p-10 md:py-40 flex flex-col md:flex-row items-center justify-center"
      id="info"
    >
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
  );
}

export default Info;
