import React from 'react';
import { render } from '@testing-library/react';

import DynamicStoryblok from './dynamic-storyblok';

describe('DynamicStoryblok', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicStoryblok />);
    expect(baseElement).toBeTruthy();
  });
});
