import {} from 'react-navigation';

import LoginScreen from '../screen/LoginScreen';
import SampleScreen from '../screen/SampleScreen';
import { createStackNavigator } from 'react-navigation';

const MainStackNavigator = createStackNavigator(
    {
        login: {
            screen: LoginScreen,
        },
        samplePage: {
            screen: SampleScreen,
        },
    }
);

export default MainStackNavigator;