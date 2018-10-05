import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert
} from "react-native";

import * as categoriesStyle from "@styles/categories.style"
import { CategoryListItem } from "./components"

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.onCategoryItemClic = this.onCategoryItemClick.bind(this);
    }

    onCategoryItemClick (item) {
        Alert.alert(item.title);
    }

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.onCategoryItemClick(item)} >
            <CategoryListItem
                item= {item}
                style= {categoriesStyle.styles}
            />
        </TouchableOpacity>
    );

    render() {
        return (
            <View style= {categoriesStyle.styles.page}>
                <Text style={categoriesStyle.styles.header}>Nearby places</Text>
                <FlatList
                    data={this.props.categories}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoryList)