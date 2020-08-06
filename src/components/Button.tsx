import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Local Dependencies
import styles from 'styles/components/Button.module.css';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, disabled, type, overrideClasses, icon } = props;
  return (
    <button
      type={type}
      disabled={disabled || false}
      onClick={onClick}
      className={`${overrideClasses} ${styles.button}`}
    >
      {icon ? (
        <FontAwesomeIcon className={styles.leftIcon} icon={icon} />
      ) : null}
      {children}
    </button>
  );
};
