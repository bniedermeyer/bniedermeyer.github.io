import styles from './skills.module.css';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  return (
    <section className="bg-primary-light dark:bg-primary-dark  py-20 md:py-30">
      <h1 className="text-3xl text-center text-primary dark:text-primary-light mb-10">
        I have experience building with
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 dark:invert place-items-center">
        <div className="relative aspect-square h-40">
          <Image src="/logos/react.png" alt="React" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/angular.png" alt="Angular" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/rxjs.png" alt="rxjs" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/typescript.png" alt="typescript" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/nodejs.png" alt="nodejs" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/kubernetes.png" alt="kubernetes" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/google.png" alt="google" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/html5.png" alt="html5" layout="fill" />
        </div>
        <div className="relative aspect-square h-40">
          <Image src="/logos/sass.png" alt="sass" layout="fill" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
