import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';


function Slider() {

    const data = [
        {
            title: "1"
        },
        {
            title: "2"
        }
    ]

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    const dimension = Dimensions.get('screen');
    const sliderWidth = dimension.width;
    const itemWidth = sliderWidth / 2;

    return (
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={data}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems:"center"
    },

    title: {
        color: "#fff",

    }
})

export default Slider;