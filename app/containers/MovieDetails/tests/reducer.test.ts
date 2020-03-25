import movieDetailReducer from '../reducer';
import {
  detailsLoaded,
  detailsLoadedError,
  ratingWasChanged,
  ratingWasSaved,
} from '../actions';
import { ContainerState, MovieDetails } from '../types';

const EmptyDetails = {
    imdbID: '',
    Title: '',
    Country: '',
    Genre: '',
    Released: '',
    Type: '',
    Year: '',
    rating: 0,
    Poster: '',
  };

describe('Movie Details Reducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      movieDetails: EmptyDetails,
      ratingWasChanged: false,
      error: undefined,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(movieDetailReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the detailsLoaded action correctly', () => {
    const details =  {
      imdbID: '1',
      Title: 'Best Movie',
      Country: '',
      Genre: '',
      Released: '',
      Type: '',
      Year: '',
      rating: 0,
      Poster: '',
    };

    const expectedResult = {
      movieDetails: details,
      ratingWasChanged: false,
      error: undefined,
    };
    expect(movieDetailReducer(state, detailsLoaded(details))).toEqual(expectedResult);
  });

  it('should handle the detailsLoaded action correctly', () => {
    const error = 'err_';

    const expectedResult = {
      movieDetails: EmptyDetails,
      ratingWasChanged: false,
      error: error,
    };
    expect(movieDetailReducer(state, detailsLoadedError(error))).toEqual(expectedResult);
  });

  it('should handle the ratingWasChanged action correctly', () => {
    const expectedResult = {
      movieDetails: EmptyDetails,
      ratingWasChanged: true,
      error: undefined,
    };
    expectedResult.movieDetails.rating = 4;
    expect(movieDetailReducer(state, ratingWasChanged(4))).toEqual(expectedResult);
  });

  it('should handle the ratingWasSaved action correctly', () => {
    const expectedResult = {
      movieDetails: EmptyDetails,
      ratingWasChanged: false,
      error: undefined,
    };
    expect(movieDetailReducer(state, ratingWasSaved())).toEqual(expectedResult);
  });
});
