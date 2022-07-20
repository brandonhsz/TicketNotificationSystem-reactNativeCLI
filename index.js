import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import useFirebase from './src/hooks/useFirebase';

const { backgroundNotifications } = useFirebase();

backgroundNotifications();

AppRegistry.registerComponent(appName, () => App);
