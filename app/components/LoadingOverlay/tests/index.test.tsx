import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import LoadingOverlay from '../index';

describe('<LoadingOverlay />', () => {
  it('should match the snapshot', () => {
    const { container } = render(<LoadingOverlay />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
