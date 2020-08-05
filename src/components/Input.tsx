import React, { FC } from 'react';

// Local Dependencies
import { InputProps } from './types';

export const Input: FC<InputProps> = (props) => {
  const { placeholder, value, type, onChange } = props;
  return (
    <input
      placeholder={placeholder || undefined}
      type={type || 'text'}
      value={value}
      onChange={onChange}
    />
  );
};
