import React from 'react';

/* eslint-disable-next-line */
export interface ImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
  lazy?: boolean;
}

export function Image({ imageUrl, alt, className, lazy = false }: ImageProps) {
  const url = imageUrl.replace(
    'a.storyblok.com',
    'img2.storyblok.com/filters:format(webp)'
  );

  return (
    <img
      src={url}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      className={className}
    />
  );
}
