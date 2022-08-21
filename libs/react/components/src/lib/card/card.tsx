import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  url?: string;
  title?: string;
  children?: React.ReactNode;
}

export function Card({ url, title, children }: CardProps) {
  const cardEl = (
    <div
      className={`${
        url
          ? 'hover:scale-[1.02] transition-all motion-reduce:transition-none'
          : null
      } max-w-xs bg-primary dark:bg-primary-light rounded-md drop-shadow-md p-4 m-2`}
    >
      {children && (
        <div className="relative aspect-auto flex flex-col items-center justify-center mb-8">
          {children}
        </div>
      )}
      <div className="card-content text-center w-full">
        <h1 className="text-primary-light dark:text-primary-dark text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        className="hover:transition-all motion-reduce:transition-none hover:drop-shadow-2xl duration-300"
      >
        {cardEl}
      </a>
    );
  } else {
    return cardEl;
  }
}

export default Card;
