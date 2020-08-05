import React, { FC } from 'react';
import cuid from 'cuid';

// Local Dependencies
import styles from 'styles/components/Select.module.css';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = (props) => {
  const { options, value, onChange } = props;
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      {options.map((field) => {
        return (
          <option key={cuid()} value={field.value}>
            {field.value}
          </option>
        );
      })}
    </select>
  );
};
