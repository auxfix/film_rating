import ActionTypes from './constants';
import { ContainerActions, ContainerState, MovieDetails } from './types';

export const initialState: ContainerState = {
  movieDetails: undefined,
  ratingWasChanged: false,
};

function searchMovieReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case ActionTypes.RATING_WAS_CHANGED:

      return {
        ...state,
        ratingWasChanged: true,
        movieDetails: {
          ...state.movieDetails,
          raiting: action.payload,
        },
      };
    case ActionTypes.RATING_WAS_SAVED:
      return {
        ...state,
        ratingWasChanged: false,
      };
    default:
      return state;
  }
}

export default searchMovieReducer;

