import ActionTypes, { Sort } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  movies: [],
  sort: {
    field: Sort.NAME,
    order: Sort.ASC,
  },
};

function myMoviesReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_MY_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
      };
    case ActionTypes.CHANGE_SORTING:
      return {
        ...state,
        sort: { ...action.payload },
      };
    default:
      return state;
  }
}

export default myMoviesReducer;
