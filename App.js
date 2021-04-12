import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import IndexScreen from "./src/screens/IndexScreen";
import LogInScreen from './src/screens/LogInScreen';
import SignupScreen from './src/screens/SignupScreen';
import NewsScreen from './src/screens/NewsScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import CreateScreen from './src/screens/CreateScreen';
import AccountScreen from './src/screens/AccountScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createSwitchNavigator({
    Signup: SignupScreen,
    Login: LogInScreen
  }), 
  mainFlow: createBottomTabNavigator({
    NewsScreenFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    Create: CreateScreen,
    Account: AccountScreen
  })
});





// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Login: LogInScreen,
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "Be A Star"
//     }
//   }
// );

export default createAppContainer(switchNavigator);

