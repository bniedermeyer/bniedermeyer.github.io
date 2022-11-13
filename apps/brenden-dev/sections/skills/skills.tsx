import Image from 'next/image';
/* eslint-disable-next-line */
export interface SkillsProps {}

const ImageContainer = ({ children }): JSX.Element => {
  return <div className="relative aspect-square h-40">{children}</div>;
};

export function Skills(props: SkillsProps) {
  return (
    <section className="bg-primary-light dark:bg-primary-dark  py-20 md:py-30">
      <h1 className="text-3xl text-center text-primary dark:text-primary-light mb-10">
        I have experience building with
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 dark:invert place-items-center">
        <ImageContainer>
          <Image src="/logos/react.png" alt="React" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/angular.png" alt="Angular" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/webcomponents.svg" alt="web components" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/typescript.png" alt="typescript" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/nodejs.png" alt="nodejs" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/html5.png" alt="html5" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/rxjs.png" alt="rxjs" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/google.png" alt="google cloud" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/aws.png" alt="aws" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/terraform.png" alt="terraform" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/kubernetes.png" alt="kubernetes" fill />
        </ImageContainer>
        <ImageContainer>
          <Image src="/logos/sass.png" alt="sass" fill />
        </ImageContainer>
      </div>
    </section>
  );
}

export default Skills;
