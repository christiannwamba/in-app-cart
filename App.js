import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import CartIcon from './components/icons/Cart';

import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import Amplify from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import {
  InAppMessagingProvider,
  InAppMessageDisplay,
} from 'aws-amplify-react-native';
import { Notifications } from 'aws-amplify';

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    Notifications.InAppMessaging.syncMessages();
  }, []);
  return (
    <InAppMessagingProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: 'Shop',
              headerRight: ({}) => (
                <CartIcon
                  onPress={() => navigation.navigate('Cart')}
                  title="Info"
                />
              ),
            })}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <InAppMessageDisplay />
    </InAppMessagingProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

export default App;
