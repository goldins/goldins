import React from 'react';
import { render } from '../testUtils';
import Index from '../../pages';

describe('Index page', () => {
  it('clicking button triggers alert', () => {
    const { asFragment } = render(<Index />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
