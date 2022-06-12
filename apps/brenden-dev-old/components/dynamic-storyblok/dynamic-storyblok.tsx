import React, { Component } from 'react';
import SbEditable from 'storyblok-react';

/* eslint-disable-next-line */
export interface DynamicStoryblokProps {
  blok: any;
  // todo: figure out a way for this type to work. Value should be component
  componentMap: { [key: string]: any };
}

export function DynamicStoryblok({
  blok,
  componentMap,
}: DynamicStoryblokProps) {
  if (typeof componentMap[blok.component] !== 'undefined') {
    const ResolvedComponent = componentMap[blok.component];
    return (
      <SbEditable content={blok}>
        <ResolvedComponent blok={blok} />
      </SbEditable>
    );
  }
  return <div>This component is not for storyblok</div>;
}

export default DynamicStoryblok;
