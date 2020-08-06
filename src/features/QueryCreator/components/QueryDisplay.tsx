import React from 'react';
import { useRecoilValue } from 'recoil';
import { queryListStatsState } from '../selectors';

export const QueryDisplay = () => {
  const { formattedQuery } = useRecoilValue(queryListStatsState);

  return <div>SELECT * from session WHERE {formattedQuery}</div>;
};
