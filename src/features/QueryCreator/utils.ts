import { QueryType } from './types';

export const replaceItemAtIndex = (
  arr: QueryType[],
  index: number,
  newValue: QueryType
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = (arr: QueryType[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
