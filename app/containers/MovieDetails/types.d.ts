import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

export interface MovieDetails {
  imdbID: string;
  Title: string;
  raiting?: number;
}


/* --- STATE --- */

interface MovieDetailState {
  readonly id?: string;
  readonly movieDetails?: MovieDetails;
}

/* --- ACTIONS --- */
type MovieDetailsActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = MovieDetailState;
type ContainerActions = MovieDetailsActions;

export { RootState, ContainerState, ContainerActions };
