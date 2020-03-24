import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const setLoading = (isLoading: boolean) =>
  action(ActionTypes.SET_LOADING, { isLoading });

