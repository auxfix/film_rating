import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { MovieListItemType } from './MovieListItem/types';

/* --- STATE --- */

interface SearchMovies {
  readonly moviename: string;
  readonly movies: MovieListItemType[];
  readonly totalResults: number;
}

/* --- ACTIONS --- */
type SearchMoviesActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = SearchMovies;
type ContainerActions = SearchMoviesActions;

export { RootState, ContainerState, ContainerActions };
