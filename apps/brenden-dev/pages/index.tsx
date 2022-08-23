import { Intro } from '../sections/intro/intro';
import { Info } from '../sections/info/info';
import { Skills } from '../sections/skills/skills';

export function Index() {
  return (
    <div className="page h-screen">
      <Intro />
      <Info />
      <Skills />
    </div>
  );
}

export default Index;
