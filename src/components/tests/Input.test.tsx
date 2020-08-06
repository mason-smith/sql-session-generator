import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Local Dependencies
import { Input } from 'components/Input';

let container: HTMLElement | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container as HTMLElement);
  (container as HTMLElement).remove();
  container = null;
});

describe('Input component', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();
    const onKeyDown = jest.fn();
    act(() => {
      render(
        <Input
          value=""
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          type="text"
        />,
        container
      );
    });

    await userEvent.type(screen.getByRole('textbox'), 'Search Thing');

    expect(onChange).toHaveBeenCalledTimes(12);
  });

  test('calls the onKeyDown callback handler', async () => {
    const onChange = jest.fn();
    const onKeyDown = jest.fn();
    act(() => {
      render(
        <Input
          value=""
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          type="text"
        />,
        container
      );
    });

    await userEvent.type(screen.getByRole('textbox'), 'Search Thing');

    expect(onKeyDown).toHaveBeenCalledTimes(12);
  });
});
