import { UserState } from './user';
import { ReducerState } from 'react-navigation-redux-helpers';
 
export interface ApplicationState {
    user: UserState;
    nav: ReducerState;
  }