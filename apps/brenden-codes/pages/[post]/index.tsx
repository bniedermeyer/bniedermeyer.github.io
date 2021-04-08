import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Storyblok } from '@personal-site/storyblok';
import { Markdown } from '../../components/Markdown';
import { StickyFooter } from '../../components/StickyFooter';
import { StoryData } from 'storyblok-js-client';
import { parseISO, format } from 'date-fns';
import readingTime from 'reading-time';
import Head from 'next/head';
import Link from 'next/link';

interface PostProps {
  story: StoryData;
}

const Post = ({ story }: PostProps) => {
  const [nav, setNav] = useState(null);
  useEffect(() => {
    setNav(navigator);
  }, []);
  const {
    first_published_at: published,
    published_at: updated,
    slug,
    tag_list,
  } = story;
  const { title, intro, body, suppressUpdateDate, seo } = story.content;
  const { text: time } = readingTime(body);

  const tags = tag_list.map((tag) => (
    <Link href={`/tags/${encodeURIComponent(tag)}`} passHref key={tag}>
      <a
        href="dummy"
        id={tag}
        className="blog-tag bg-gray-400 rounded-full text-xs p-1 font-extralight m-3 mt-2 md:mt-0 text-center"
      >
        {tag}
      </a>
    </Link>
  ));

  return (
    <>
      <Head>
        <title>{seo.title}</title>

        {/* <!-- COMMON TAGS --> */}
        <link rel="canonical" href={`https://brenden.codes/${slug}`} />
        <meta key="robots" name="robots" content="index,follow,noimageindex" />
        <meta name="author" content="Brenden Niedermeyer" />
        <meta
          name="keywords"
          content={tag_list.concat(['Brenden Niedermeyer']).join(',')}
        />
        {/* <!-- Search Engine --> */}
        <meta name="description" content={seo.description} />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content={seo.title} />
        <meta itemProp="description" content={seo.description} />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seo.twitter_title} />
        <meta name="twitter:description" content={seo.twitter_description} />
        <meta name="twitter:site" content="@TheNieds" />
        <meta name="twitter:creator" content="@TheNieds" />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content={seo.og_title} />
        <meta name="og:description" content={seo.og_description} />
        <meta name="og:site_name" content="Brenden Codes" />
        <meta name="og:type" content="website" />
      </Head>
      <article className="post container p-8">
        <h1 className="text-3xl md:text-5xl text-center font-semibold dark:text-yellow-400">
          {title}
        </h1>
        <div className="metadata m-5 text-center text-yellow-700 dark:text-white">
          <p className="text-sm ">
            Published: {format(parseISO(published), 'MMMM do, yyyy')}{' '}
          </p>
          {updated && !suppressUpdateDate && updated !== published && (
            <p className="text-sm">
              Updated: {format(parseISO(updated), 'MMMM do, yyyy')}
            </p>
          )}
          <p>{time}</p>
        </div>
        <section className="content m-auto prose md:prose-lg prose-blue  dark:prose-dark max-w-6xl">
          <Markdown content={body} />
        </section>
        <div className="grid grid-cols-2 mt-5">{tags}</div>
      </article>
      <StickyFooter>
        <div className="flex align-middle justify-between ">
          <Link href="/" passHref>
            <a
              href="dummy"
              className="p-2 dark:text-gray-200 border-gray-200 dark:border-white border-solid border-2 rounded-md"
            >
              All Posts
            </a>
          </Link>
          {nav && nav.share && (
            <button
              type="button"
              className="p-1 dark:text-gray-200 border-gray-200 dark:border-white border-solid border-2 rounded-md "
              onClick={async () => {
                try {
                  await nav.share({
                    url: process.env.NETLIFY
                      ? `https://brenden.codes/${slug}`
                      : `http://localhost:4200/${slug}`,
                  });
                } catch (error) {
                  console.log('link sharing cancelled');
                }
              }}
            >
              Share
              <FontAwesomeIcon
                icon="share"
                fixedWidth
                color="#9CA3AF"
                className="ml-1"
              />
            </button>
          )}
        </div>
      </StickyFooter>
    </>
  );
};
export default Post;

export const getStaticPaths = async ({ context }) => {
  const { data } = await Storyblok.get('cdn/links/', {});

  const paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (!data.links[linkKey].is_folder) {
      if (data.links[linkKey].slug.includes('blog/posts/')) {
        paths.push({
          params: { post: data.links[linkKey].slug.split('/')[2] },
        });
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // console.log(params);
  const { post } = params;
  const { data } = await Storyblok.get(`cdn/stories/blog/posts/${post}`);
  const { story } = data;
  // console.log('story', story);
  return {
    props: { story },
  };
};
