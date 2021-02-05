import React from 'react';
import { Storyblok } from '@personal-site/storyblok';
import { StoriesParams } from 'storyblok-js-client';
import { PostList } from '../components/PostList';
import { PostSummary } from '../models/post-summary.model';
import { MenuBar } from '../components/MenuBar';
import { setPriority } from 'os';
const { NEXT_PUBLIC_STORYBLOK_VERSION } = process.env;

interface Props {
  story: any;
  posts: PostSummary[];
  preview: boolean;
}
const Blog = ({ story, posts }: Props) => {
  const { picture, links } = story.content;
  const { filename: image } = picture;
  return (
    <div className="flex">
      <MenuBar imgUrl={image} links={links} />
      <section className="blog container p-20">
        <PostList posts={posts} />
      </section>
    </div>
  );
};

export default Blog;
export const getStaticProps = async (context) => {
  // the slug of the story
  let slug = 'blog';
  // the storyblok params
  const version = NEXT_PUBLIC_STORYBLOK_VERSION as 'draft' | 'published';

  const params: StoriesParams = {
    version,
  };

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = 'draft';
    // appends the cache version to get the latest content
    params.cv = Date.now();
  }

  // loads the story from the Storyblok API
  const { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
  const { story } = data;
  console.log(story);
  // console.log('data', data);

  params.starts_with = 'blog/posts/';
  const { data: postsData } = await Storyblok.getStories(params);
  const { stories: postStories } = postsData;
  const posts = postStories.slice(0, 6).map((story) => {
    const { tag_list: tags, slug: link, first_published_at: date } = story;
    const { title, intro } = story.content;
    return { date, title, intro, link, tags };
  });
  console.log(story.content.links);
  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story,
      posts,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
};
