import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectHome = (state: ApplicationRootState) => {
  return state.movieSearch || initialState;
};

const makeSelectMovies = () =>
  createSelector(
    selectHome,
    substate => substate.movies,
  );

const makeSelectTotalResults = () =>
  createSelector(
    selectHome,
    substate => substate.totalResults,
  );

const makeSelectSearchName = () =>
  createSelector(
    selectHome,
    substate => {
      return substate.moviename;
    },
  );
const makeSelectError = () =>
  createSelector(
    selectHome,
    substate => {
      return substate.error;
    },
  );

export {
  selectHome,
  makeSelectSearchName,
  makeSelectMovies,
  makeSelectTotalResults,
  makeSelectError,
};
