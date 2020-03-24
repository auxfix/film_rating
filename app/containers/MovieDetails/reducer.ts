import ActionTypes from './constants';
import { ContainerActions, ContainerState, MovieDetails } from './types';

export const EmptyMovieDetails = {
    imdbID: '',
    rating: 0,
    Title: '',
    Country: '',
    Genre: '',
    Poster: '',
    Released: '',
    Type: '',
    Year: '',
};

export const initialState: ContainerState = {
  movieDetails: EmptyMovieDetails,
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
        error: undefined,
        movieDetails: action.payload,
      };
    case ActionTypes.LOAD_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.RATING_WAS_CHANGED:

      return {
        ...state,
        ratingWasChanged: true,
        movieDetails: {
          ...state.movieDetails,
          rating: action.payload,
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

