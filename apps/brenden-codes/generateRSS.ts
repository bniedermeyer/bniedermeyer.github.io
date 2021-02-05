/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import RSS from 'rss';
import crypto from 'crypto';

import { PostSummary } from './models/post-summary.model';

export const generateRSS = (posts: PostSummary[]) => {
  const feed = new RSS({
    title: 'Brenden Codes',
    site_url: 'https://brenden.codes',
    feed_url: 'https://brenden.codes/feed.xml',
  });

  posts.forEach((post) => {
    const { date, title, intro: description, link } = post;
    feed.item({
      title,
      date,
      description,
      author: 'Brenden Niedermeyer',
      url: `https://brenden.codes/${link}`,
      guid: crypto.createHash('md5').update(date).digest('hex'),
    });
  });
  const rss = feed.xml({ indent: true });
  fs.writeFileSync('apps/brenden-codes/public/feed.xml', rss);
};
