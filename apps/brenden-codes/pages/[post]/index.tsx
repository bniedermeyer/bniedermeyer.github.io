import React, { useEffect } from 'react';
import { Storyblok } from '@personal-site/storyblok';
import { Markdown } from '../../components/markdown';
import { StoryData } from 'storyblok-js-client';
import { parseISO, format } from 'date-fns';
import readingTime from 'reading-time';

interface PostProps {
  story: StoryData;
}

const Post = ({ story }: PostProps) => {
  const { first_published_at: published, published_at: updated } = story;
  const { title, body } = story.content;
  const { text: time } = readingTime(body);
  return (
    <article className="post container  mt-2">
      <div className="metadata m-5">
        <p className="text-center text-sm text-yellow-700">
          Published: {format(parseISO(published), 'MMMM do, yyyy')}{' '}
          {updated &&
            updated !== published &&
            ` Updated: ${format(parseISO(updated), 'MMMM do, yyyy')}`}
        </p>
        <p className="text-center">{time}</p>
      </div>
      <section className="content text-gray-800">
        <Markdown content={body} />
      </section>
    </article>
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
  console.log(params);
  const { post } = params;
  const { data } = await Storyblok.get(`cdn/stories/blog/posts/${post}`);
  const { story } = data;
  // console.log('story', story);
  return {
    props: { story },
  };
};
