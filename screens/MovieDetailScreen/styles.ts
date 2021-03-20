
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    match: {
        color: '#00aa00',
        fontWeight: 'bold',
        marginRight: 5,

    },
    year: {
        color: '#757575'
    },
    agecontainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        padding: 2,
        marginRight: 5,
    },
    age: {
        color: 'black',
        fontWeight: 'bold'
    },
    playbtn: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5

    },
    downloadbtn: {
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5


    },
    txtbtnplay: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'

    },
    txtbtndownload: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 5
    }
})
export default styles;