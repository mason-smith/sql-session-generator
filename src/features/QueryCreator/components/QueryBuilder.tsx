import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import styles from './QueryRow.module.css';
import { predicateFields, operatorFields, defaultState } from 'data';
import { queryListState } from '../atoms';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Button } from 'components/Button';

export const QueryBuilder = () => {
  const [predicate, setPredicate] = useState(defaultState.predicate);
  const [operator, setOperator] = useState(defaultState.operator);
  const [parameter, setParameter] = useState(defaultState.parameter);
  const [parameterAlt, setParameterAlt] = useState(defaultState.parameterAlt);

  const setQueryListState = useSetRecoilState(queryListState);

  const createQuery = () => {
    setQueryListState((oldQueryList) => [
      ...oldQueryList,
      {
        id: cuid(),
        predicate,
        operator,
        parameter,
        parameterAlt,
      },
    ]);
    setPredicate(defaultState.predicate);
    setOperator(defaultState.operator);
    setParameter(defaultState.parameter);
    setParameterAlt(defaultState.parameter);
  };

  const resetQuery = () => {
    setPredicate(defaultState.predicate);
    setOperator(defaultState.operator);
    setParameter(defaultState.parameter);
    setParameterAlt(defaultState.parameter);
  };

  return (
    <>
      <div className={styles.row}>
        <button className={styles.rowButton} onClick={() => resetQuery()}>
          X
        </button>
        <Select
          options={predicateFields}
          value={predicate.value}
          onChange={(e) =>
            setPredicate(
              // @ts-ignore
              predicateFields.find((field) => field.value === e.target.value)
            )
          }
        />
        {operator.value === 'between' ? (
          <p className={styles.interstitial}>is</p>
        ) : null}
        <Select
          options={operatorFields.filter((operator) => {
            return operator.type === predicate.type;
          })}
          value={operator.value}
          onChange={(e) =>
            setOperator(
              // @ts-ignore
              operatorFields.find((field) => field.value === e.target.value)
            )
          }
        />
        <Input
          placeholder={predicate.placeholder}
          value={parameter}
          // type={predicate.type}
          type="string"
          onChange={(e) => setParameter(e.target.value)}
        />
        {operator.value === 'between' ? (
          <>
            <p className={styles.interstitial}>and</p>
            <Input
              placeholder={predicate.placeholder}
              value={parameterAlt}
              // type={predicate.type}
              type="string"
              onChange={(e) => setParameterAlt(e.target.value)}
            />
          </>
        ) : null}
      </div>
      <Button type="submit" disabled={false} onClick={() => createQuery()}>
        And
      </Button>
    </>
  );
};
