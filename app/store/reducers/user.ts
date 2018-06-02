import { Reducer } from 'redux';
import { UserState, UserActions , UserActionsType} from '../types/user';

const initialState: UserState = {
    name: undefined,
  };

export default (state: UserState= initialState, action: UserActions) => {
  switch (action.type) {
    case UserActionsType.LOG_IN: 
      return {...state, name: action.payload.user.name};
    default:
      return state;
  }
};
  