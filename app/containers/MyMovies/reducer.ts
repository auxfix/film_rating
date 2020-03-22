import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  movies: [],
};

function myMoviesReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_MY_MOVIES_SUCCESS:
      return {
        movies: action.payload.movies,
      };
    default:
      return state;
  }
}

export default myMoviesReducer;
