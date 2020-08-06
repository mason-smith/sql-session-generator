import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

// Local Dependencies
import App from './App';

describe('root tests', () => {
  test('renders learn react link', () => {
    const { getByText } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    const linkElement = getByText(/Search for Sessions/i);
    expect(linkElement).toBeInTheDocument();
  });
});
