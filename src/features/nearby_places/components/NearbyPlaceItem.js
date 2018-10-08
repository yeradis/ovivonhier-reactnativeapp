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
                <Image style={ this.props.style.picture } source={ {uri:  this.props.item.picture } } />
                <View>
                    <Text style={ this.props.style.title }> {this.props.item.name} </Text>
                    <Text style={ this.props.style.info }> {this.props.item.address} </Text>
                </View>
            </View>
        );
    }
}

export default NearbyPlaceItem;
