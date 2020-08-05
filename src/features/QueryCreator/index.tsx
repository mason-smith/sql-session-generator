import React from 'react';
import { useRecoilValue } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import styles from './QueryCreator.module.css';
import { queryListState } from './atoms';
import { QueryBuilder } from './components/QueryBuilder';
import { QueryRow } from './components/QueryRow';

export const QueryCreator = () => {
  const queryList = useRecoilValue(queryListState);
  return (
    <div className={styles.query_creator}>
      <h2>Search for Sessions</h2>
      {queryList.map((query) => {
        return <QueryRow key={cuid()} query={query} />;
      })}
      <QueryBuilder />
    </div>
  );
};
