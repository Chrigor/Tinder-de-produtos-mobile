import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';


function Slider() {

    const [data, setData] = useState([]);

    const data1 = [
        {
            title: "1"
        },
        {
            title: "2"
        }, 
        {
            title: "3"
        }
    ]

    useEffect(() => {
        setData(data1);
    }, [])


    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
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
const itemWidth = sliderWidth / 2;
const sliderHeight = dimension.height;

const styles = StyleSheet.create({
    slide: {
        height: sliderHeight/2,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems:"center"
    },

    title: {
        color: "#fff",
    }
})

export default Slider;