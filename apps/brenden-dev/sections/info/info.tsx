import Image from 'next/image';
import { Card } from '@libs/react/components';

/* eslint-disable-next-line */
export interface InfoProps {}

export function Info(props: InfoProps) {
  return (
    <section
      className="bg-secondary-light dark:bg-secondary-dark px-10 py-20 md:py-64 flex flex-col md:flex-row items-center justify-center"
      id="info"
    >
      <Card title="Resume" url="https://brenden.fyi">
        <Image src="/resume.svg" alt="Resume" height={150} width={300} />
      </Card>
      <Card title="Blog" url="https://brenden.codes">
        <Image src="/blog.svg" alt="Blog" height={150} width={300} />
      </Card>
      <Card
        title="Talks"
        url="https://www.youtube.com/playlist?list=PLqn52Dxq8AiW5PU9PPWXPk-YJYS9vsrJ-"
      >
        <Image src="/talks.svg" alt="Talks" height={150} width={300} />
      </Card>
      <Card title="Projects" url="https://github.com/bniedermeyer">
        <Image src="/projects.svg" alt="Projects" height={150} width={300} />
      </Card>
    </section>
  );
}

export default Info;
