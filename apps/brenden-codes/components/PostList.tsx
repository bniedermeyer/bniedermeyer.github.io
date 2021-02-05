import React, { useEffect, useState } from 'react';
import { PostSummary } from '../models/post-summary.model';
import { parseISO, format, compareDesc } from 'date-fns';

import Link from 'next/link';

interface PostListProps {
  posts: PostSummary[];
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return null;
  }
  return (
    <ul className="list-none post-list space-y-8">
      {posts
        .sort((a, b) => {
          const dateA = parseISO(a.date);
          const dateB = parseISO(b.date);
          return compareDesc(dateA, dateB);
        })
        .map((post, index) => {
          const date = format(parseISO(post.date), 'MMMM yyyy');

          return (
            <li key={index} className="space-y-5">
              <div className="flex flex-col md:flex-row items-center space-y-4 justiy-center md:justify-start md:space-y-0 mb-4">
                <p className="text-s font-bold dark:text-gray-200">{date}</p>
              </div>
              <Link href={`/${post.link}`} passHref>
                <a href="dummy" className="post-link">
                  <h2 className="dark:text-yellow-400 text-red-600 text-4xl text-center md:text-left md:text-5xl">
                    {post.title}
                  </h2>
                </a>
              </Link>
              <p className="dark:text-gray-200">{post.intro}</p>
            </li>
          );
        })}
    </ul>
  );
};
