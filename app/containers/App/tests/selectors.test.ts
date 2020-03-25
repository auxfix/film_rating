import {
  selectGlobal,
  makeSelectLoading,
} from '../selectors';
import { ApplicationRootState } from '../../../types';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    // tslint:disable-next-line:no-object-literal-type-assertion
    const mockedState = {
      global: globalState,
    } as ApplicationRootState;
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});


describe('makeSelectLoading', () => {
  it('should select the loading', () => {
    const loadingSelector = makeSelectLoading();
    const loading = true;
    const mockedState: any = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});
