import {
  ChangeEvent,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

/**
 * Input
 */
export interface InputProps {
  placeholder?: string | undefined;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Select
 */
export interface SelectProps {
  options: any[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Button
 */
export interface ButtonProps {
  type: any;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}
