import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

export const initialState: ContainerState = {
  loading: false,
};

function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        loading: action.payload.isLoading,
      };
    default:
      return state;
  }
}

export default appReducer;
