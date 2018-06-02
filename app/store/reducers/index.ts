import { combineReducers, Dispatch, Reducer } from 'redux';
import MainStackNavigator from '../../config/router';

import { UserState } from '../types/user';
import userReducer from './user';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { ApplicationState } from '../types'; 
import { NavigationState } from 'react-navigation';

const navReducer = createNavigationReducer(MainStackNavigator);
export default combineReducers<ApplicationState>({
    user: userReducer,
    nav: navReducer,
  });