import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// Local Dependencies
import styles from './QueryCreator.module.css';
import { queryListState } from './atoms';
// import { QueryRow } from './components/QueryRow';
import { Button } from 'components/Button';
import { QueryBuilder } from './components/QueryBuilder';
import { QueryRow } from './components/QueryRow';
import { QueryDisplay } from './components/QueryDisplay';
import { QueryType } from './types';

export const QueryCreator = () => {
  const queryList = useRecoilValue<QueryType[]>(queryListState);
  const setQueryListState = useSetRecoilState(queryListState);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.query_creator}>
      <h2>Search for Sessions</h2>
      {queryList.map((queryItem) => (
        <QueryRow key={queryItem.id} query={queryItem} />
      ))}
      <QueryBuilder />
      <hr className={styles.hr} />
      <div className={styles.queryButtons}>
        <Button type="button" onClick={() => setVisible(true)}>
          Search
        </Button>
        <Button
          type="button"
          onClick={() => {
            setVisible(false);
            setQueryListState([]);
          }}
        >
          Reset
        </Button>
      </div>
      {visible ? <QueryDisplay /> : null}
    </div>
  );
};
