export interface SelectInterface {
  value: string;
  type: string;
  placeholder?: string;
}

export type QueryType = {
  id: string;
  predicate: SelectInterface;
  operator: SelectInterface;
  parameter: string;
};
