import { StyleSheet } from 'react-native';
import categories from '../../assets/data/categories'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    image: {
        width: 100,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styles;