import React, { useEffect, useState } from 'react';
import { PostSummary } from '../models/post-summary.model';
import { parseISO, format } from 'date-fns';

import Link from 'next/link';

interface PostListProps {
  posts: PostSummary[];
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <ul className="list-none post-list">
      {posts.map((post, index) => {
        const month = format(parseISO(post.date), 'MMMM yyyy');
        console.log(post);
        const tags = post.tags.map((tag) => (
          <span
            id={tag}
            className="blog-tag bg-gray-400 rounded-full text-xs p-2 font-extralight"
            key={tag}
          >
            {tag}
          </span>
        ));

        return (
          <li key={index} className="space-y-5">
            <div className="flex items-center space-x-4">
              <p className="text-s font-bold">{month}</p>
              {tags}
            </div>
            <Link href={`${post.link}`} passHref>
              <a href="dummy" className="post-link">
                <h2 className="text-red-600 text-5xl">{post.title}</h2>
              </a>
            </Link>
            <p>{post.intro}</p>
          </li>
        );
      })}
    </ul>
  );
};
