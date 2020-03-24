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
        error: undefined,
        moviename: action.payload,
      };
    case ActionTypes.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.Search,
        error: undefined,
        totalResults: action.payload.totalResults,
      };
    case ActionTypes.LOAD_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default searchMovieReducer;
