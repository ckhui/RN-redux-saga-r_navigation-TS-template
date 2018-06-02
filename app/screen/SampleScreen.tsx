import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationScreenProps, NavigationScreenComponent } from 'react-navigation';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface Params { 
  paramsName: string;
}

interface State {
  enthusiasmLevel: number;
}

const SampleScreen: NavigationScreenComponent<Params, {}, Props> = (props) => {
  return (
    <View>
      <Text style={styles.welcome}>
        Sample Screen
    </Text>
      <Text style={styles.instructions}>
        This is great
    </Text>
    </View >
  );
};

SampleScreen.navigationOptions = {
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

// export default SampleScreen;

const ROUTE_NAME_NEXT_SCREEN = 'NextScreen';
interface StartScreenNavigationParams {
  id: number;
  s: string;
}

class Login2 extends React.Component<NavigationScreenProps<StartScreenNavigationParams>> {
  constructor(props: NavigationScreenProps<StartScreenNavigationParams>) {
    super(props);
    console.log('====================================');
    console.log(props);
    console.log('====================================');
  }

  render() {
      // Implicit type checks.
      const navigationStateParams: StartScreenNavigationParams | undefined = this.props.navigation.state.params;
      const id = this.props.navigation.state.params && this.props.navigation.state.params.id;
      const s = this.props.navigation.state.params && this.props.navigation.state.params.s;

      return (
          <View>
              <TouchableOpacity onPress={this.navigateToNextScreen}>
                <Text>111111</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.navigateDifferentlyToNextScreen}>
              <Text>22222</Text>
              </TouchableOpacity>
          </View>
      );
  }
  private readonly navigateToNextScreen = (): void => {
    console.log('====================================');
    console.log('Next Press');
    console.log('====================================');
      const params = {
          id: this.props.navigation.state.params && this.props.navigation.state.params.id,
          name: this.props.navigation.state.params && this.props.navigation.state.params.s,
      };
      this.props.navigation.navigate(ROUTE_NAME_NEXT_SCREEN, params);
  }
  private readonly navigateDifferentlyToNextScreen = (): void => {
      const params = {
          id: this.props.navigation.state.params && this.props.navigation.state.params.id,
          name: this.props.navigation.state.params && this.props.navigation.state.params.s,
      };
      this.props.navigation.navigate({routeName: ROUTE_NAME_NEXT_SCREEN, params});
  }
}

export default SampleScreen;