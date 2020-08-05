import { atom, RecoilState } from 'recoil';

// Local Dependencies
import { QueryType } from './types';

// @ts-ignore
export const queryListState: RecoilState<QueryType[]> = atom({
  key: 'queryListState',
  default: [],
});
