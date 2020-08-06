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
