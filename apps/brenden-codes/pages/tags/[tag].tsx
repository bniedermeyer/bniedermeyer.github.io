import React from 'react';
import { Storyblok } from '@personal-site/storyblok';
import { PostSummary } from '../../models/post-summary.model';
import { StickyFooter } from '../../components/StickyFooter';
import { PostList } from '../../components/PostList';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface TagSearchProps {
  posts: PostSummary[];
  tag: string;
}

const Tag = ({ posts, tag }: TagSearchProps) => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-5xl md:text-6xl dark:text-white font-bold text-center">
        Posts about {tag}
      </h1>

      <section className="blog container p-4 md:p-20 min-h-screen">
        <PostList posts={posts} />
      </section>
      <StickyFooter>
        <div className="flex align-middle justify-between ">
          <button
            type="button"
            aria-label="View Previous Post"
            className="p-2 dark:text-gray-200 border-gray-200 dark:border-white border-solid border-2 rounded-md"
            onClick={() => router.back()}
          >
            Back
          </button>
          <Link href="/" passHref>
            <a
              href="dummy"
              className="p-2 dark:text-gray-200 border-gray-200 dark:border-white border-solid border-2 rounded-md"
            >
              All Posts
            </a>
          </Link>
        </div>
      </StickyFooter>
    </>
  );
};

export default Tag;

export const getStaticPaths = async () => {
  const { data } = await Storyblok.get('cdn/tags/', {});
  const paths = data.tags.map((tag) => ({
    params: { tag: encodeURIComponent(tag.name) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // console.log(params);
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);

  const { data } = await Storyblok.get(`cdn/stories`, {
    with_tag: decodedTag,
  });
  const { stories } = data;
  const posts = stories.map((story) => {
    const { tag_list: tags, slug: link, first_published_at: date } = story;
    const { title, intro } = story.content;
    return { date, title, intro, link, tags };
  });
  // console.log('story', stories);
  return {
    props: { posts, tag: decodedTag },
  };
};
