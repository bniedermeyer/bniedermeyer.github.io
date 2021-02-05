import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={theme} language={language} children={value} />
    );
  },
};

/* eslint-disable-next-line */
export interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown renderers={renderers} children={content} plugins={[gfm]} />
  );
}
