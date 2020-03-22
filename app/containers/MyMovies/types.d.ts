import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { MovieDetails } from '../MovieDetails/types';

/* --- STATE --- */

interface MyMoviesState {
  readonly movies: MovieDetails[];
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = MyMoviesState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
