import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    View,
    FlatList,
    TouchableOpacity,
    Alert
} from "react-native";

import * as categoriesStyle from "@styles/categories.style"
import { CategoryListItem } from "../categories/components"
import * as actions from "../../actions"

class Category extends Component {

    static navigationOptions = ({ navigation }) => {
        const {state} = navigation;
        return {
            title: `${state.params.title}`,
            headerTitleStyle : categoriesStyle.styles.header,
            headerStyle:{
                backgroundColor:'white',
            },
        };
    };

    constructor(props) {
        super(props);
        this.onCategoryItemClic = this.onCategoryItemClick.bind(this);
        this.updateNavigationTitle();
    }

    updateNavigationTitle() {
        let title = this.props.navigation.getParam('categoryTitle', '')
        this.props.navigation.setParams({ title: title.toUpperCase() })
    }

    componentDidMount() {
        let key = this.props.navigation.getParam('categoryKey', 'NO-KEY')
        this.props.getCategory(key);
    }

    onCategoryItemClick (item) {
        Alert.alert(this.props.navigation.getParam('categoryKey', 'NO-KEY'));
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
                    data={this.props.category}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps, actions)(Category)