import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const changeUsername = (name: string) => action(ActionTypes.CHANGE_MOVIE_NAME, name);
