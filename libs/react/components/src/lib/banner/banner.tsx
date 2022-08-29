import styles from './banner.module.css';

/* eslint-disable-next-line */
export interface BannerProps {}

export function Banner(props: BannerProps) {
  return (
    <aside className="float-left fixed mt-2 bg-red-600 pl-24 pr-32 py-3 m-0 z-50 -left-20 top-6 -rotate-45 shadow-xl">
      <a href="https://github.com/bniedermeyer/bniedermeyer.github.io/tree/rebuild">
        <p className="text-white">Being built in public!</p>
      </a>
    </aside>
  );
}

export default Banner;
