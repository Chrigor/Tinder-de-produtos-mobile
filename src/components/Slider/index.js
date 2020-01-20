import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';


function Slider() {

    const [data, setData] = useState([]);

    const dataCorrect = [
        {
            title: "1",
            backgroudImage: { uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
        },
        {
            title: "2",
            backgroudImage: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTl1UdulPMtbyxdp-edAAWVhHV2z0_LqNvnLHE5Y3fTKvHC2W&s' },
        },
        {
            title: "3",
            backgroudImage: { uri: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg' },
        }
    ]

    useEffect(() => {
        setData(dataCorrect);
    }, [])


    _renderItem = ({ item, index }) => {
        return (
            // <View style={styles.slide}>
                <ImageBackground source={item.backgroudImage} style={styles.slide}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>asiddashusdauhsdauhsda </Text>
                </ImageBackground>
            // </View>
        );
    }

    return (
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={data}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            layout={'tinder'}
        />
    )
}

const dimension = Dimensions.get('screen');
const sliderWidth = dimension.width;
const itemWidth = sliderWidth / 1.1;
const sliderHeight = dimension.height;

const styles = StyleSheet.create({
    slide: {
        alignSelf: "center",
        margin: 5,
        width: sliderWidth,
        height: sliderHeight / 1.5,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        color: "#fff",
    }
})

export default Slider;