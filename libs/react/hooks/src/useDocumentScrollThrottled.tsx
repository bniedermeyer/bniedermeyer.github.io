import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export type useDocumentScrollThrottledCallback = (callbackArgs: {
  previousScrollTop: number;
  currentScrollTop: number;
}) => void;

// taken from https://medium.com/mtholla/create-a-transitioning-header-using-react-hooks-like-mediums-c70ed211f7c9
export function useDocumentScrollThrottled(
  callback: useDocumentScrollThrottledCallback
) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want this called at mount and unmount
  }, []);
}
