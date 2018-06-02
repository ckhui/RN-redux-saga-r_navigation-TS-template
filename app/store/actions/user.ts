import { ActionCreator } from 'redux';
import {
    UsersLoginAction,
    UserState,
    UserActionsType
} from '../types/user';

export const userLogInAction: ActionCreator<UsersLoginAction> = (user: UserState) => ({
    type: UserActionsType.LOG_IN,
    payload: {
      user,
    },
  });