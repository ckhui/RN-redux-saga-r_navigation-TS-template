/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import  { Component }  from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BackHandler, AsyncStorage } from 'react-native';

import MainStackNavigator from './config/router';
import store from './config/store';
import { Provider } from 'react-redux';
import { NavigationState, NavigationDispatch } from 'react-navigation';
import {
  createNavigationPropConstructor,       // handles #1 above
  initializeListeners,                   // handles #4 above
  ReducerState,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { ApplicationState } from './store/types';
import { ConnectedReduxProps } from './store/reducers/helper';

const navigationPropConstructor = createNavigationPropConstructor('root');

interface Props {
}

class App extends React.Component<Props & ReduxProps> {
  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav,
    );
    return <MainStackNavigator navigation={navigation} />;
  }
}

interface ReduxProps {
  nav: NavigationState;
  dispatch: NavigationDispatch;
}

const mapStateToProps = (state: ApplicationState) => ({
  nav: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}