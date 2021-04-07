import React from 'react';
import { render } from '@testing-library/react';

import ConfiguredParticles from './configured-particles';

describe(' ConfiguredParticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConfiguredParticles />);
    expect(baseElement).toBeTruthy();
  });
});
