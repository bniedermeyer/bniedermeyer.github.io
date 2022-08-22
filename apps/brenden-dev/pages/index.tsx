import styles from './index.module.css';
import { Intro } from '../sections/intro/intro';
import { Info } from '../sections/info/info';

export function Index() {
  return (
    <div className="page h-screen">
      <Intro />
      <Info />
    </div>
  );
}

export default Index;
