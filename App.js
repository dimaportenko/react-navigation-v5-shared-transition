/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import ProductScreen from './src/screens/ProductDetails';
import ProductList from './src/screens/ProductList';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();
// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={() => ({title: 'Product List'})}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={navigation => ({
            title: navigation.route.params.product.name,
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const {product} = route.params;
            return [
              `item.${product.key}.photo`,
              `item.${product.key}.name`,
              `item.${product.key}.price`,
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
