import {StyleSheet} from 'react-native';

const colors = {
    'primary': '#3691e4',
    'header': '#6600e4',
    'info': '#000000',
};

const values = {
    'font_header_size': 20,
    'font_header_weight': 'bold',
    'font_title_size': 20,
    'font_title_weight': 'bold',
    'font_info_size': 15,
    'font_info_weight': 'normal'
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 12,
        alignSelf: 'stretch'
    },
    header: {
        color: colors.primary,
        margin: 10,
        fontSize: values.font_header_size,
        fontWeight: values.font_header_weight,
        textAlign: 'center',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'stretch'
    },
    title: {
        color: colors.primary,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        fontSize: values.font_title_size,
        fontWeight: values.font_title_weight
    },
    info: {
        color: colors.info,
        flex: 1,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: values.font_info_size,
        fontWeight: values.font_info_weight
    },
    picture: {
        flex: 1,
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    }
});

export { styles };
