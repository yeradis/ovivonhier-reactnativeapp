import React, { PropTypes, Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

class CategoryListItem extends Component {
    render () {
        return (
            <View style={ this.props.style.container }>
                <Image source={ this.props.item.icon } />
                <Text style={ this.props.style.title }> {this.props.item.title} </Text>
            </View>
        );
    }
}

export default CategoryListItem;
