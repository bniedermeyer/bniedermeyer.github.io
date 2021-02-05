import React from 'react';

export const StickyFooter: React.FC = ({ children }) => {
  return (
    <footer className="sticky bottom-0 shadow w-screen bg-white dark:bg-gray-700 p-3">
      {children}
    </footer>
  );
};
