import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import styles from './QueryCreator.module.css';
import { queryListState } from './atoms';
import { QueryBuilder } from './components/QueryBuilder';
import { QueryRow } from './components/QueryRow';
import { Button } from 'components/Button';
import { QueryDisplay } from './components/QueryDisplay';

export const QueryCreator = () => {
  const queryList = useRecoilValue(queryListState);
  const setQueryListState = useSetRecoilState(queryListState);
  return (
    <div className={styles.query_creator}>
      <h2>Search for Sessions</h2>
      {queryList.map((query) => {
        return <QueryRow key={cuid()} query={query} />;
      })}
      <QueryBuilder />
      <hr className={styles.hr} />
      <div className={styles.queryButtons}>
        <Button type="button" onClick={() => console.log('SEARCH')}>
          Search
        </Button>
        <Button type="button" onClick={() => setQueryListState([])}>
          Reset
        </Button>
      </div>
      <QueryDisplay />
    </div>
  );
};
