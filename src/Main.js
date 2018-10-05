import React from "react";
import {Component} from "react";
import connect from "react-redux/es/connect/connect";

import * as actions from "./actions";
import CategoryList from "./features/categories/CategoryList";

class Main extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <CategoryList/>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

const ConnectedAppScreen = connect(null, actions)(Main);

export default ConnectedAppScreen;