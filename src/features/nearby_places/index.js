import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    View,
    FlatList,
    TouchableOpacity,
    Alert
} from "react-native";

import * as categoriesStyle from "@styles/categories.style"
import * as nearbyPlaceStyle from "@styles/nearbyPlace.style"

import NearbyPlaceItem  from "./components/NearbyPlaceItem"
import * as actions from "../../actions"

class NearbyPlaces extends Component {

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
        navigator.geolocation.getCurrentPosition (
            (position) => {
                const latitude = Number(position.coords.latitude.toFixed(6));
                const longitude = Number(position.coords.longitude.toFixed(6));

                let category = this.props.navigation.getParam('categoryKey', 'NO-KEY')
                this.props.getNearbyPlaces(category, latitude, longitude);
            },
            (error)    => { console.log(error) },
            {
                enableHighAccuracy: true,
                timeout:            20000,
                maximumAge:         10000
            }
        );
    }

    onCategoryItemClick (item) {
        Alert.alert(item.name);
    }

    _keyExtractor = (item, index) => item.reference;

    _renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.onCategoryItemClick(item)} >
            <NearbyPlaceItem
                item= {item}
                style= {nearbyPlaceStyle.styles}
            />
        </TouchableOpacity>
    );

    render() {
        return (
            <View style= {categoriesStyle.styles.page}>
                <FlatList
                    data={this.props.places}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        places: state.places
    }
}

export default connect(mapStateToProps, actions)(NearbyPlaces)