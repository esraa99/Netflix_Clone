import React from 'react';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import movie from '../../assets/data/movie';
import { Image, FlatList, Pressable } from 'react-native';
import { MaterialIcons, AntDesign, Entypo, Feather } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';

const FirstSeason = movie.seasons.items[0];

const FirstEpisode = FirstSeason.episodes.items[0];

const MovieDetailScreen = () => {
    return (
        <View>
            <Image source={{ uri: FirstEpisode.poster }} style={styles.image} />

            <FlatList
                data={FirstSeason.episodes.items}
                renderItem={({ item }) => <EpisodeItem episode={item} />}
                style={{ marginBottom: 250 }}
                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>

                        <Text style={styles.title}>{movie.title}</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.agecontainer}>
                                <Text style={styles.age}>+12</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>
                        <Pressable style={styles.playbtn} onPress={() => console.warn('Plage')} ><Text style={styles.txtbtnplay}><Entypo name="controller-play" size={16} color="black" />{''} Play</Text></Pressable>

                        <Pressable style={styles.downloadbtn} onPress={() => console.warn('Plage')} ><Text style={styles.txtbtndownload}><Feather name="download" size={16} color="white" />{''} Download</Text></Pressable>
                        <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>cast:{movie.cast}</Text>
                        <Text style={styles.year}>creator:{movie.creator}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color="white" /><Text style={{ color: 'gray' }}>My List</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Entypo name="share" size={24} color="white" /><Text style={{ color: 'gray' }}>Rate</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="like2" size={24} color="white" /><Text style={{ color: 'gray' }}>Share</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
};

export default MovieDetailScreen;