import React from 'react';
import { Text, View } from '../Themed';
import { Image, FlatList } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';


interface EpisodeItemprops {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }
}

const EpisodeItem = (props: EpisodeItemprops) => {
    const { episode } = props;
    return (
        <View style={{ marginVertical: 10 }}>
            <View style={styles.row}>
                <Image source={{ uri: episode.poster }} style={styles.image} />
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>

                </View>
                <AntDesign name="download" size={24} color={'white'} />

            </View>
            <Text style={styles.plot}>{episode.plot}</Text>

        </View>

    );
}

export default EpisodeItem;