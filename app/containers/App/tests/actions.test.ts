import { action } from 'typesafe-actions';
import { setLoading } from '../actions';
import ActionTypes from '../constants';

describe('App Actions', () => {
  describe('setLoading', () => {
    it('set true', () => {
      const expectedResult = action(ActionTypes.SET_LOADING, {
        isLoading: true,
      });

      expect(setLoading(true)).toEqual(expectedResult);
    });
    it('set false', () => {
      const expectedResult = action(ActionTypes.SET_LOADING, {
        isLoading: false,
      });

      expect(setLoading(false)).toEqual(expectedResult);
    });
  });
});
