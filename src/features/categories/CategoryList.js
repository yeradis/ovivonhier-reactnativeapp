import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";

import * as categoriesStyle from "@styles/categories.style"
import { CategoryListItem } from "./components"
import Category from "../category"
import * as actions from "../../actions"

class CategoryList extends Component {

    static navigationOptions = {
        title: 'Nearby places',
        headerTitleStyle : categoriesStyle.styles.header,
        headerStyle:{
            backgroundColor:'white',
        }
    };

    constructor(props) {
        super(props);
        this.onCategoryItemClic = this.onCategoryItemClick.bind(this);
    }

    componentDidMount() {
        this.props.getCategories();
    }

    onCategoryItemClick (item) {
        this.props.navigation.navigate('Category',{
            categoryKey: item.key,
            categoryTitle: item.title
        });
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

export default connect(mapStateToProps, actions)(CategoryList);