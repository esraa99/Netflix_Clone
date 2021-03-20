import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({

    image: {
        width: 75,
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
        borderRadius: 3,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    plot: {
        color: 'darkgrey',
    },
    title: {

    },
    duration: {
        color: 'darkgrey',
        fontSize: 10,
    },
    titlecontainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    }

});

export default styles;