import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/Input.module.css';
import { InputProps } from './types';

export const Input: FC<InputProps> = (props) => {
  const { placeholder, value, type, onChange, onKeyDown } = props;
  return (
    <input
      className={styles.input}
      placeholder={placeholder || undefined}
      type={type || 'text'}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
