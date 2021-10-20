import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from './src/screens/screen-name';
import SplashScreen from './src/screens/splash-screen/splash-screen';

const Stack = createStackNavigator();

const NoneComponent = () => <></>;

const Navigator: () => JSX.Element = () => (
    <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenName.SPLASH_SCREEN}>
        <Stack.Screen
            name={ScreenName.SPLASH_SCREEN}
            component={SplashScreen}
        />
        <Stack.Screen name={ScreenName.HOME} component={NoneComponent} />
        <Stack.Screen name={ScreenName.CATEGORIES} component={NoneComponent} />
        <Stack.Screen name={ScreenName.FAVORITES} component={NoneComponent} />
        <Stack.Screen
            name={ScreenName.RECIPE_DETAILS}
            component={NoneComponent}
        />
        <Stack.Screen name={ScreenName.DONATION} component={NoneComponent} />
    </Stack.Navigator>
);

const App: () => JSX.Element = () => (
    <NavigationContainer>
        <Navigator />
    </NavigationContainer>
);

export default App;
