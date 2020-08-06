export interface SelectInterface {
  value: string;
  type: string;
  field?: string;
  symbol?: string;
  placeholder?: string;
}

export type QueryType = {
  id: string;
  predicate: SelectInterface;
  operator: SelectInterface;
  parameter: string;
  parameterAlt: string;
};

export interface OperatorInterface {
  value: string;
  symbol: string;
  type: string;
}

export interface PredicateInterface {
  value: string;
  field: string;
  type: string;
  placeholder: string;
}
