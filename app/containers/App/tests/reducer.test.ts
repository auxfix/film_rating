import appReducer from '../reducer';
import { setLoading } from '../actions';
import { ContainerState } from '../types';
describe('appReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      loading: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the setLoading true action correctly', () => {
    const expectedResult = {
      loading: true,
    };
    expect(appReducer(state, setLoading(true))).toEqual(expectedResult);
  });

  it('should handle the setLoading false action correctly', () => {
    const expectedResult = {
      loading: false,
    };
    expect(appReducer(state, setLoading(false))).toEqual(expectedResult);
  });
});
