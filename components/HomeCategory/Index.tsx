
import * as React from 'react';
import styles from './styles';
import { Image, FlatList } from 'react-native';
import { Text } from '../../components/Themed';
import categories from '../../assets/data/categories';

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }
}
const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;

    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item.poster }}></Image>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}
export default HomeCategory;
