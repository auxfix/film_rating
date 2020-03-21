import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { MovieListItem } from './MovieListItem/types';

/* --- STATE --- */

interface SearchMovies {
  readonly moviename: string;
  readonly movies: MovieListItem[];
}

/* --- ACTIONS --- */
type SearchMoviesActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = SearchMovies;
type ContainerActions = SearchMoviesActions;

export { RootState, ContainerState, ContainerActions };
