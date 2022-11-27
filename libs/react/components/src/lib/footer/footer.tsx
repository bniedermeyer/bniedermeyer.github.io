/* eslint-disable-next-line */
export interface FooterProps {}

const linkStyle =
  'font-extrabold text-xs bg-clip-text transition ease-in-out duration-700 text-slate-300  hover:bg-gradient-to-r from-blue-600 to-violet-300 hover:text-transparent  reduce-motion:transition-none';

export function Footer(props: FooterProps) {
  return (
    <footer className="pt-5 px-8 bg-black">
      <div className="flex justify-center align-center gap-5 m-5">
        <a
          rel="me"
          href="https://indieweb.social/@brenden"
          className={linkStyle}
        >
          Mastodon
        </a>
        <a href="mailto:contact@brenden.dev" className={linkStyle}>
          Email
        </a>
        <a href="https://poly.me/niedermeyer" className={linkStyle}>
          Polywork
        </a>
      </div>
      <p className="text-primary-light/70 text-center text-[8px]">
        © Brenden Niedermeyer {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
