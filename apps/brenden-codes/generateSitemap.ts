import fs from 'fs';
import prettier from 'prettier';
import { format, parseISO } from 'date-fns';

import { PostSummary } from './models/post-summary.model';

export const generateSitemap = async (posts: PostSummary[]): Promise<void> => {
  const siteMap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://brenden.codes/</loc>
      <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
      <priority>0.8</priority>
    </url>
        ${posts
          .map(({ link, date }) => {
            return `
                <url>
                    <loc>${`https://brenden.codes/${link}`}</loc>
                    <lastmod>${format(parseISO(date), 'yyyy-MM-dd')}</lastmod>
                </url>
                `;
          })
          .join('')}
    </urlset>
    `;
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const formatted = prettier.format(siteMap, {
    ...prettierConfig,
    parser: 'html',
  });
  fs.writeFileSync('apps/brenden-codes/public/sitemap.xml', formatted);
};
