import { replaceItemAtIndex, removeItemAtIndex } from '../utils';

const testArray = [{ test: 'T' }, { test: 'E' }, { test: 'S' }, { test: 'T' }];
const updatedArr = [{ test: 'T' }, { test: 'A' }, { test: 'S' }, { test: 'T' }];
const removedArr = [{ test: 'T' }, { test: 'S' }, { test: 'T' }];

describe('test replaceItemAtIndex', () => {
  test('should update second item in array { test: "E" } to another letter', () => {
    const newValue = { test: 'A' };
    // @ts-ignore
    expect(replaceItemAtIndex(testArray, 1, newValue)).toEqual(updatedArr);
  });
});

describe('test removeItemAtIndex', () => {
  test('should remove second item in array', () => {
    // @ts-ignore
    expect(removeItemAtIndex(testArray, 1)).toEqual(removedArr);
  });
});
