import React, { useState, ChangeEvent, FormEvent, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';
import cuid from 'cuid';

// Local Dependencies
import styles from './QueryRow.module.css';
import { queryListState } from '../atoms';
import { QueryType, OperatorInterface, PredicateInterface } from '../types';
import { defaultState, predicateFields, operatorFields } from 'data';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Select } from 'components/Select';

export const QueryBuilder = () => {
  const [predicate, setPredicate] = useState(defaultState.predicate);
  const [operator, setOperator] = useState(defaultState.operator);
  const [parameter, setParameter] = useState(defaultState.parameter);
  const [parameterAlt, setParameterAlt] = useState(defaultState.parameterAlt);
  const setQueryList = useSetRecoilState<QueryType[]>(queryListState);

  const createQuery = () => {
    setQueryList((oldQueryList) => [
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
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          createQuery();
        }}
        className={styles.row}
      >
        <button
          type="button"
          className={styles.rowButton}
          onClick={() => resetQuery()}
        >
          X
        </button>
        <Select
          options={predicateFields}
          value={predicate.value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setPredicate(
              predicateFields.find(
                (field) => field.value === e.target.value
              ) as SetStateAction<PredicateInterface>
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
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setOperator(
              operatorFields.find(
                (field) => field.value === e.target.value
              ) as SetStateAction<OperatorInterface>
            )
          }
        />
        <Input
          placeholder={predicate.placeholder}
          value={parameter}
          // type={predicate.type}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setParameter(e.target.value)
          }
        />
        {operator.value === 'between' ? (
          <>
            <p className={styles.interstitial}>and</p>
            <Input
              placeholder={predicate.placeholder}
              value={parameterAlt}
              // type={predicate.type}
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setParameterAlt(e.target.value)
              }
            />
          </>
        ) : null}
      </form>
      <Button type="button" disabled={false} onClick={() => createQuery()}>
        And
      </Button>
    </>
  );
};
