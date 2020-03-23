import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

interface MyMovieListItemType {
  Title: string;
  imdbID: string;
  rating: number;
}

export { MyMovieListItemType };

/* --- STATE --- */

interface MyMoviesState {
  readonly movies: MyMovieListItemType[];
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = MyMoviesState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
