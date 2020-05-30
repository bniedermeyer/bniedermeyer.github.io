import React from 'react';

import { Navbar, Card } from '@personal-site/components';
import { Contact } from '../sections/contact/contact';
import { ReactComponent as Book } from '../assets/book.svg';
import readingList from '../assets/reading-list.json';
import './what-im-reading.css';

/* eslint-disable-next-line */
export interface WhatImReadingProps {}

export const WhatImReading = (props: WhatImReadingProps) => {
  const items = readingList.items.map(item => {
    return (
      <>
        <Card url={item.url} imgUrl={item.img} imgAlt={item.title}>
          <div className="content">
            <div className="title">
              <h1>{item.title}</h1>
            </div>
          </div>
        </Card>
      </>
    );
  });
  return (
    <div className="what-im-reading">
      <header>
        <Navbar />
      </header>
      <section className="intro flex space-evenly">
        <div className="intro-text">
          <h1>What I'm reading</h1>
          <p>
            A collection of books, articles, and tutorials that I'm currently
            reading, or recommend to others.
          </p>
        </div>
        <Book className="book-icon" />
      </section>
      <section className="links flex center .flex-wrap">{items}</section>
      <Contact />
    </div>
  );
};

export default WhatImReading;
