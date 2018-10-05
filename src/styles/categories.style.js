import React from "react";
import {StyleSheet} from "react-native";

const colors = {
    "primary": "#3691e4",
    "header": "#6600e4",
};


const values = {
    "font_header_size": 30,
    "font_header_weight": "900",
    "font_title_size": 20,
    "font_title_weight": 'bold',
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 64,
        alignSelf: "stretch",
    },
    header: {
        color: colors.primary,
        margin: 10,
        fontSize:values.font_header_size,
        fontWeight: values.font_header_weight,
    },
    container :{
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    title: {
        color: colors.primary,
        flex: 10,
        margin: 10,
        fontSize:values.font_title_size,
        fontWeight: values.font_title_weight,
    },
});

export { styles }