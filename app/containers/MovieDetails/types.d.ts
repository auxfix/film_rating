import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

export interface MovieDetails {
  imdbID: string;
  Title: string;
  rating: number;
  Year: string;
  Released: string;
  Genre: string;
  Country: string;
  Poster: string;
  Type: string;
}


/* --- STATE --- */

interface MovieDetailState {
  readonly movieDetails: MovieDetails;
  readonly ratingWasChanged: boolean;
  readonly error?: string;
}

/* --- ACTIONS --- */
type MovieDetailsActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = MovieDetailState;
type ContainerActions = MovieDetailsActions;

export { RootState, ContainerState, ContainerActions };
