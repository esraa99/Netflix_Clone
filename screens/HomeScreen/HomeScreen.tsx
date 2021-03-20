import * as React from 'react';
import styles from './styles';
import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory/Index';

const FirstCategory = categories.items[0];

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={categories.items}
                renderItem={({ item }) => <HomeCategory category={item} />}
            />
        </SafeAreaView>
    );
}
export default HomeScreen;
