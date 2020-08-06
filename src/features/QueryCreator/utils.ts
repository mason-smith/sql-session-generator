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

export const formatQuery = (
  value: string,
  operator: string | undefined,
  parameter: string,
  parameterAlt: string
) => {
  switch (value) {
    case 'equals':
      return `${operator} ${parameter}`;
    case 'contains':
      return `${operator} '%${parameter}%'`;
    case 'starts with':
      return `${operator} '${parameter}%'`;
    case 'in list':
      return `${operator} (${parameter})`;
    case 'between':
      return `${operator} ${parameter} AND ${parameterAlt}`;
    case 'greater than':
      return `${operator} ${parameter}`;
    case 'less than':
      return `${operator} ${parameter}`;
    default:
      break;
  }
};
