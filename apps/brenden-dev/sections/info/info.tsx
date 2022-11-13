import Image from 'next/image';
import { Card } from '@libs/react/components';

/* eslint-disable-next-line */
export interface InfoProps {}
const imageClass = 'h-52 pt-4 aspect-square';

export function Info(props: InfoProps) {
  return (
    <section
      className="bg-secondary-light dark:bg-secondary-dark px-10 py-20 md:py-64 flex flex-col md:flex-row items-center justify-center"
      id="info"
    >
      <Card title="Resume" url="https://brenden.fyi">
        <Image
          src="/resume.svg"
          alt="Illustrated Resume"
          className={imageClass}
          height={208}
          width={300}
        />
      </Card>
      <Card title="Blog" url="https://brenden.codes">
        <Image
          src="/blog.svg"
          alt="Illustrated document"
          className={imageClass}
          height={208}
          width={300}
        />
      </Card>
      <Card
        title="Talks"
        url="https://www.youtube.com/playlist?list=PLqn52Dxq8AiW5PU9PPWXPk-YJYS9vsrJ-"
      >
        <Image
          src="/talks.svg"
          alt="Illustrated Talks"
          className={imageClass}
          height={208}
          width={300}
        />
      </Card>
      <Card title="Projects" url="https://github.com/bniedermeyer">
        <Image
          src="/projects.svg"
          alt="Illustrated construction site"
          className={imageClass}
          height={208}
          width={300}
        />
      </Card>
    </section>
  );
}

export default Info;
