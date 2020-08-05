import React from 'react';
import { useRecoilValue } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import { queryListState } from './atoms';
import { QueryBuilder } from './components/QueryBuilder';

export const QueryCreator = () => {
  const queryList = useRecoilValue(queryListState);
  return (
    <>
      {queryList.map((query) => {
        return <p key={cuid()}>Query</p>;
      })}
      <QueryBuilder />
    </>
  );
};
