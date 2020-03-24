import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectDetails = (state: ApplicationRootState) => {
  return state.movieDetails || initialState;
};

const selectDetailsState = () =>
  createSelector(
    selectDetails,
    st => st,
  );

const makeSelectMovieDetails = () =>
  createSelector(
    selectDetails,
    substate => substate.movieDetails,
  );
const makeSelectMovieDetailsError = () =>
  createSelector(
    selectDetails,
    substate => substate.error,
  );

export {
  selectDetails,
  makeSelectMovieDetails,
  selectDetailsState,
  makeSelectMovieDetailsError,
};
