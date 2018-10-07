import React, { PropTypes, Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

class NearbyPlaceItem extends Component {
    render () {
        return (
            <View style={ this.props.style.container }>
                <Text style={ this.props.style.title }> {this.props.item.name} </Text>
                <Text style={ this.props.style.info }> {this.props.item.vicinity} </Text>
            </View>
        );
    }
}

export default NearbyPlaceItem;
