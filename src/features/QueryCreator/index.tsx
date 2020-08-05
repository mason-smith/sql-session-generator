import React from 'react';
import { useRecoilValue } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import { queryListState } from './atoms';
import { QueryBuilder } from './components/QueryBuilder';
import { QueryRow } from './components/QueryRow';

export const QueryCreator = () => {
  const queryList = useRecoilValue(queryListState);
  return (
    <>
      {queryList.map((query) => {
        return <QueryRow key={cuid()} query={query} />;
      })}
      <QueryBuilder />
    </>
  );
};
