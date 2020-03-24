import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

interface MyMovieListItemType {
  Title: string;
  imdbID: string;
  rating: number;
  sort: SortState;
}

interface SortState {
  order: string;
  field: string;
}

export { MyMovieListItemType };

/* --- STATE --- */

interface MyMoviesState {
  readonly movies: MyMovieListItemType[];
  readonly sort: SortState;
  readonly error?: string;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = MyMoviesState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
