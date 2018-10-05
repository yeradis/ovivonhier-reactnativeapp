import React, { Component } from "react";
import { Provider } from 'react-redux';

import ConnectedAppScreen from './src/Main'
import configureStore from './src/store'

export default class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <ConnectedAppScreen />
            </Provider>
        );
    }
}
