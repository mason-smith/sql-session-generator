import React, { FC } from 'react';

// Local Dependencies
import styles from 'styles/components/Button.module.css';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, disabled, type, overrideClasses } = props;
  return (
    <button
      type={type}
      disabled={disabled || false}
      onClick={onClick}
      className={`${overrideClasses} ${styles.button}`}
    >
      {children}
    </button>
  );
};
