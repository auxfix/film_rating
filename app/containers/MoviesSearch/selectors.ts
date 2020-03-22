import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectHome = (state: ApplicationRootState) => {
  return state.movieSearch || initialState;
};


const makeSelectMovies = () =>
  createSelector(selectHome, substate =>
    substate.movies);

const makeSelectSearchName = () =>
  createSelector(selectHome, substate => {
    return substate.moviename;
  });

export { selectHome, makeSelectSearchName, makeSelectMovies };