import React from 'react';
import { useRecoilValue } from 'recoil';

// Local Dependencies
import styles from './QueryDisplay.module.css';
import { queryListStatsState } from '../selectors';

export const QueryDisplay = () => {
  const { formattedQuery } = useRecoilValue(queryListStatsState);
  return (
    <div className={styles.displayContainer}>
      {formattedQuery
        ? 'SELECT * from session WHERE'
        : 'Your Generated SQL Statement goes here:'}{' '}
      {formattedQuery}
    </div>
  );
};
