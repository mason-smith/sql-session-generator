import React, { FC, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

// Local Dependencies
import styles from './QueryRow.module.css';
import { FieldProps } from './types';
import { Select } from 'components/Select';
import { predicateFields, operatorFields } from 'data';
import { Input } from 'components/Input';
import { QueryType } from '../types';
import { queryListState } from '../atoms';
import { replaceItemAtIndex, removeItemAtIndex } from '../utils';

export const QueryRow: FC<FieldProps> = (props) => {
  const { query } = props;

  const [queryList, setQueryListState] = useRecoilState(queryListState);

  const index = queryList.findIndex((listItem) => listItem.id === query.id);

  const editField = (value: QueryType | string, option: string) => {
    const newList = replaceItemAtIndex(queryList, index, {
      ...query,
      [option]: value,
    });
    setQueryListState(newList);
  };

  const deleteQuery = () => {
    const newList = removeItemAtIndex(queryList, index);
    setQueryListState(newList);
  };

  return (
    <div className={styles.row}>
      <button className={styles.rowButton} onClick={() => deleteQuery()}>
        X
      </button>
      <Select
        options={predicateFields}
        value={query.predicate.value}
        onChange={(e) =>
          editField(
            // @ts-ignore
            predicateFields.find((field) => field.value === e.target.value),
            'predicate'
          )
        }
      />
      {query.operator.value === 'between' ? (
        <p className={styles.interstitial}>is</p>
      ) : null}
      <Select
        options={operatorFields.filter((operator) => {
          return operator.type === query.predicate.type;
        })}
        value={query.operator.value}
        onChange={(e) =>
          editField(
            // @ts-ignore
            operatorFields.find((field) => field.value === e.target.value),
            'operator'
          )
        }
      />
      <Input
        placeholder={query.predicate.placeholder || ''}
        value={query.parameter}
        // type={query.predicate.type}
        type="string"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          editField(e.target.value, 'parameter')
        }
      />
      {query.operator.value === 'between' ? (
        <>
          <p className={styles.interstitial}>and</p>
          <Input
            placeholder={query.predicate.placeholder}
            value={query.parameterAlt}
            // type={predicate.type}
            type="string"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editField(e.target.value, 'parameterAlt')
            }
          />
        </>
      ) : null}
    </div>
  );
};
