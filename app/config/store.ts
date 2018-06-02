import { createStore, applyMiddleware, Middleware, Store, Action } from 'redux';
import logger from 'redux-logger';

import {
  createNavigationPropConstructor,       // handles #1 above
  createNavigationReducer,               // handles #2 above
  createReactNavigationReduxMiddleware,  // handles #4 above
  initializeListeners,                   // handles #4 above
} from 'react-navigation-redux-helpers';

import createSagaMiddleware from 'redux-saga';
import reducers from '../store/reducers';
import { ApplicationState } from '../store/types';
import rootSaga from './saga';

const sageMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sageMiddleware];

// react-navigation redux integration
// Note: createReactNavigationReduxMiddleware must be run before createNavigationPropConstructor
const navMiddleware = createReactNavigationReduxMiddleware<any>(
  'root',
  state => state.nav,
);
middleware.push(navMiddleware);

// redux-logger
// NOTE: logger need to be the last middleware in order to listen to all the event
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const initialState = {};
// const initialState: ApplicationState = {
//   user: {
//     name: 'TESTING'
//   }
// };

const store = createStore<ApplicationState, Action, {}, {}>(reducers, initialState, applyMiddleware(...middleware));
sageMiddleware.run(rootSaga);
export default store;
