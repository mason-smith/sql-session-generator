import { selector } from 'recoil';

// Local Dependencies
import { queryListState } from './atoms';
import { formatQuery } from './utils';

/**
 * @NOTE
 * As of writing this, there is a known issue
 * with selectors causing console errors
 * https://github.com/facebookexperimental/Recoil/issues/12
 *
 * Warning: Cannot update a component (`Batcher`) while rendering a different component
 *
 * The app still functions, so these can be ignored for now until a fix is available
 */

export const createdQueryState = selector({
  key: 'createdQueryState',
  get: ({ get }) => {
    const queryList = get(queryListState);

    console.log('queryList', queryList);

    const formattedQuery = queryList
      .map((query) => {
        return `session.${query.predicate.field} ${formatQuery(
          query.operator.value,
          query.operator.symbol,
          query.parameter,
          query.parameterAlt
        )} `;
      })
      .join(' AND ');

    return {
      queryList,
      formattedQuery,
    };
  },
});
