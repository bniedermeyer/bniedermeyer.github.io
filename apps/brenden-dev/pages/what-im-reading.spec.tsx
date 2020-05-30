import React from 'react';
import { render } from '@testing-library/react';

import WhatImReading from './what-im-reading';

describe(' WhatImReading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhatImReading />);
    expect(baseElement).toBeTruthy();
  });
});
