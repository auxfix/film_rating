import ActionTypes from './constants';
import { ContainerActions, ContainerState } from './types';

export const initialState: ContainerState = {
  id: undefined,
  movieDetails: undefined,
};

function searchMovieReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_DETAILS_SUCCESS:
      return {
        id: state.id,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
}

export default searchMovieReducer;

