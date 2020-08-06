import React, { FC, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

// Local Dependencies
import styles from './QueryRow.module.css';
import { FieldProps } from './types';
import { queryListState } from '../atoms';
import { replaceItemAtIndex, removeItemAtIndex } from '../utils';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { predicateFields, operatorFields } from 'data';
import { SelectInterface } from '../types';

export const QueryRow: FC<FieldProps> = (props) => {
  const { query } = props;
  const [queryList, setQueryListState] = useRecoilState(queryListState);
  const index = queryList.findIndex((listItem) => listItem === query);

  const editField = (value: SelectInterface | string, option: string) => {
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
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          editField(
            predicateFields.find(
              (field) => field.value === e.target.value
            ) as SelectInterface,
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
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          editField(
            operatorFields.find(
              (field) => field.value === e.target.value
            ) as SelectInterface,
            'operator'
          )
        }
      />
      <Input
        type="text"
        value={query.parameter}
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
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editField(e.target.value, 'parameterAlt')
            }
          />
        </>
      ) : null}
    </div>
  );
};
