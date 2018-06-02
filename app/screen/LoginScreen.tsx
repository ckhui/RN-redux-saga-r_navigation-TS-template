import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationScreenProps, NavigationScreenComponent } from 'react-navigation';

import { connect, Dispatch } from 'react-redux';
import { ConnectedReduxProps } from '../store/reducers/helper';
import { ApplicationState } from '../store/types';
import { UserState, UserActions } from '../store/types/user';

import { userLogInAction } from '../store/actions/user';

interface Props extends ConnectedReduxProps<UserActions> {
  name: string;
  enthusiasmLevel?: number;
}

interface Params { 
  paramsName: string;
}

interface State {
  enthusiasmLevel: number;
}

const LoginScreen: NavigationScreenComponent<Params, {}, Props & ReduxProps> = (props) => {
  console.log('===============SCREEN PROPS=================');
  console.log(props);
  return (
    <View>
      <Text style={styles.welcome}>
        Name Screen 111 {props.user.name}
    </Text>
      <Text style={styles.instructions}>
        This is great
    </Text>
      <Button
        onPress={() => {
          // props.navigation.navigate('samplePage');
          props.dispatch(userLogInAction({name: 'NAME'}));
          }
        }
        title="Log in"
      />
    </View >
  );
};

LoginScreen.navigationOptions = {
  title: 'Login SCREEN',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: 'black',
  }
});

interface ReduxProps {
  user: UserState;
}
const mapStateToProps = (state: ApplicationState) => (
  {  user: state.user }
);

export default connect(mapStateToProps)(LoginScreen);