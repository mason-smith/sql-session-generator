import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

// Local Dependencies
import { predicateFields, operatorFields, defaultState } from 'data';
import { queryListState } from '../atoms';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import cuid from 'cuid';

export const QueryBuilder = () => {
  const [predicate, setPredicate] = useState(defaultState.predicate);
  const [operator, setOperator] = useState(defaultState.operator);
  const [parameter, setParameter] = useState(defaultState.parameter);

  const setQueryList = useSetRecoilState(queryListState);

  const createQuery = () => {
    setQueryList((oldQueryList) => [
      ...oldQueryList,
      {
        id: cuid(),
        predicate,
        operator,
        parameter,
      },
    ]);
    setPredicate(defaultState.predicate);
    setOperator(defaultState.operator);
    setParameter(defaultState.parameter);
  };

  return (
    <div>
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
        type={predicate.type}
        onChange={(e) => setParameter(e.target.value)}
      />
      <Button type="submit" disabled={false} onClick={() => createQuery()}>
        AND
      </Button>
    </div>
  );
};
