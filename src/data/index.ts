import { SelectInterface } from 'features/QueryCreator/types';

export const predicateFields: SelectInterface[] = [
  {
    value: 'User Email',
    field: 'user_email',
    type: 'text',
    placeholder: 'john.doe@example.com',
  },
  {
    value: 'Screen Width',
    field: 'screen_width',
    type: 'number',
    placeholder: '360px',
  },
  {
    value: 'Screen Height',
    field: 'screen_height',
    type: 'number',
    placeholder: '740px',
  },
  { value: '# of Visits', field: 'visits', type: 'number', placeholder: '0' },
  {
    value: 'First Name',
    field: 'first_name',
    type: 'text',
    placeholder: 'John',
  },
  { value: 'Last Name', field: 'last_name', type: 'text', placeholder: 'Doe' },
  {
    value: 'Page Response Time (ms)',
    field: 'response',
    type: 'number',
    placeholder: '0ms',
  },
  {
    value: 'Domain',
    field: 'domain',
    type: 'text',
    placeholder: 'website.com',
  },
  {
    value: 'Page Path',
    field: 'path',
    type: 'text',
    placeholder: '/categories',
  },
];

export const operatorFields: SelectInterface[] = [
  { value: 'equals', symbol: '=', type: 'text' },
  { value: 'contains', symbol: 'LIKE', type: 'text' },
  { value: 'starts with', symbol: 'LIKE', type: 'text' },
  { value: 'in list', symbol: 'IN', type: 'text' },
  { value: 'equals', symbol: '=', type: 'number' },
  { value: 'between', symbol: 'BETWEEN', type: 'number' },
  { value: 'greater than', symbol: '>', type: 'number' },
  { value: 'less than', symbol: '<', type: 'number' },
  { value: 'in list', symbol: 'IN', type: 'number' },
];

export const defaultState = {
  predicate: {
    value: 'Domain',
    field: 'domain',
    type: 'text',
    placeholder: 'website.com',
  },
  operator: { value: 'equals', symbol: '=', type: 'text' },
  parameter: '',
  parameterAlt: '',
};
