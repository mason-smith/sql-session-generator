import React, { FC, useState } from 'react';

// Local Dependencies
import { FieldProps } from './types';
import { Select } from 'components/Select';
import { predicateFields, operatorFields } from 'data';
import { Input } from 'components/Input';
import { QueryType } from '../types';
import { useRecoilState } from 'recoil';
import { queryListState } from '../atoms';
import { replaceItemAtIndex } from '../utils';

export const QueryRow: FC<FieldProps> = (props) => {
  const { query } = props;
  const [parameter, setParameter] = useState(query.parameter);
  const [queryList, setQueryListState] = useRecoilState(queryListState);

  const index = queryList.findIndex((listItem) => listItem.id === query.id);

  const editSelectField = (value: QueryType, option: string) => {
    const newList = replaceItemAtIndex(queryList, index, {
      ...query,
      [option]: value,
    });
    setQueryListState(newList);
  };

  const editQueryValue = (value: string) => {
    setParameter(value);
    const newList = replaceItemAtIndex(queryList, index, {
      ...query,
      parameter: value,
    });
    setQueryListState(newList);
  };

  return (
    <>
      <Select
        options={predicateFields}
        value={query.predicate.value}
        onChange={(e) =>
          editSelectField(
            // @ts-ignore
            predicateFields.find((field) => field.value === e.target.value),
            'predicate'
          )
        }
      />
      <Select
        options={operatorFields.filter((operator) => {
          return operator.type === query.predicate.type;
        })}
        value={query.operator.value}
        onChange={(e) =>
          editSelectField(
            // @ts-ignore
            operatorFields.find((field) => field.value === e.target.value),
            'operator'
          )
        }
      />
      <Input
        placeholder={query.predicate.placeholder || ''}
        value={parameter}
        type={query.predicate.type}
        onChange={(e) => editQueryValue(e.target.value)}
      />
    </>
  );
};
