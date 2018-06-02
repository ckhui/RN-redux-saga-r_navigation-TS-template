import { Action } from 'redux';

export enum UserActionsType {
    LOG_IN = 'LOG_IN',
}

export interface UserState {
    name?: String;
}

export interface UsersLoginAction extends Action {
    type: UserActionsType.LOG_IN;
    payload: {
      user: UserState
    };
  }

  // all the action type here
export type UserActions = UsersLoginAction;