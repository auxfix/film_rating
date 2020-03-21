import ActionTypes from './constants';
import { ContainerActions, ContainerState } from './types';
import { MovieListItem } from './MovieListItem/types';

export const initialState: ContainerState = {
  moviename: '',
  movies: [],
};


function searchMovieReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_MOVIE_NAME:
      return {
        moviename: action.payload,
        movies: state.movies,
      };
    case ActionTypes.LOAD_MOVIES_SUCCESS:
      return {
        moviename: state.moviename,
        movies: action.payload.movies,
      }
    default:
      return state;
  }
}

export default searchMovieReducer;
