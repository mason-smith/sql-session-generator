import { SelectInterface } from 'features/QueryCreator/types';

export const predicateFields: SelectInterface[] = [
  { value: 'User Email', type: 'text', placeholder: 'john.doe@example.com' },
  { value: 'Screen Width', type: 'number', placeholder: '360px' },
  { value: 'Screen Height', type: 'number', placeholder: '740px' },
  { value: '# of Visits', type: 'number', placeholder: '0' },
  { value: 'First Name', type: 'text', placeholder: 'John' },
  { value: 'Last Name', type: 'text', placeholder: 'Doe' },
  { value: 'Page Response Time (ms)', type: 'number', placeholder: '0ms' },
  { value: 'Domain', type: 'text', placeholder: 'website.com' },
  { value: 'Page Path', type: 'text', placeholder: '/categories' },
];

export const operatorFields: SelectInterface[] = [
  { value: 'equals', type: 'text' },
  { value: 'contains', type: 'text' },
  { value: 'starts with', type: 'text' },
  { value: 'in list', type: 'text' },
  { value: 'equals', type: 'number' },
  { value: 'between', type: 'number' },
  { value: 'greater than', type: 'number' },
  { value: 'less than', type: 'number' },
  { value: 'in list', type: 'number' },
];

export const defaultState = {
  predicate: { value: 'Domain', type: 'text', placeholder: 'website.com' },
  operator: { value: 'equals', type: 'text' },
  parameter: '',
};
