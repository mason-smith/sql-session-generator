import { ChangeEvent, ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Input
 */
export interface InputProps {
  placeholder?: string | undefined;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: any) => void;
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
  overrideClasses?: any;
  children: ReactNode;
  icon?: IconProp;
  onClick?: () => void;
}
