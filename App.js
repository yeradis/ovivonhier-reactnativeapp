import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStackNavigator} from 'react-navigation';

import configureStore from './src/store';
import { CategoryList } from './src/features/categories';
import Category from './src/features/category';

const AppNavigator = createStackNavigator(
    {
        Categories: { screen: CategoryList },
        Category: { screen: Category },
        initialRouteName: 'Categories'
    }
);

export default class App extends Component {
    render () {
        return (
            <Provider store={configureStore()}>
                <AppNavigator />
            </Provider>
        );
    }
}
