import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile197449Navigator from '../features/UserProfile197449/navigator';
import Tutorial197448Navigator from '../features/Tutorial197448/navigator';
import NotificationList197420Navigator from '../features/NotificationList197420/navigator';
import Settings197419Navigator from '../features/Settings197419/navigator';
import Settings197411Navigator from '../features/Settings197411/navigator';
import UserProfile197409Navigator from '../features/UserProfile197409/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile197449: { screen: UserProfile197449Navigator },
Tutorial197448: { screen: Tutorial197448Navigator },
NotificationList197420: { screen: NotificationList197420Navigator },
Settings197419: { screen: Settings197419Navigator },
Settings197411: { screen: Settings197411Navigator },
UserProfile197409: { screen: UserProfile197409Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
