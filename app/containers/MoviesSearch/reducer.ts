import ActionTypes from './constants';
import { ContainerActions, ContainerState } from './types';

export const initialState: ContainerState = {
  moviename: '',
  movies: [],
  totalResults: 0,
};

function searchMovieReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_MOVIE_NAME:
      return {
        ...state,
        moviename: action.payload,
      };
    case ActionTypes.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.Search,
        totalResults: action.payload.totalResults,
      };
    default:
      return state;
  }
}

export default searchMovieReducer;
