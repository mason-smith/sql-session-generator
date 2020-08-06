import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Local Dependencies
import { Button } from 'components/Button';

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

describe('Button component', () => {
  test('renders with or without a name', () => {
    act(() => {
      render(
        <Button
          onClick={() => {
            return;
          }}
          type="button"
        >
          Button Text
        </Button>,
        container
      );
    });
    expect((container as HTMLElement).textContent).toBe('Button Text');
  });

  test('handles user click', () => {
    const onClick = jest.fn();
    act(() => {
      render(
        <Button onClick={() => onClick()} type="button">
          Button Text
        </Button>,
        container
      );
    });

    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state', () => {
    const onClick = jest.fn();
    act(() => {
      render(
        <Button disabled onClick={() => onClick()} type="button">
          Button Text
        </Button>,
        container
      );
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('handles enabled state', () => {
    const onClick = jest.fn();
    act(() => {
      render(
        <Button disabled={false} onClick={() => onClick()} type="button">
          Button Text
        </Button>,
        container
      );
    });

    expect(screen.getByRole('button')).toBeEnabled();
  });
});
