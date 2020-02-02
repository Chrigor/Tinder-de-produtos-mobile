import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

export default class Slider extends Component {

    state = {
        data: []
    }

    componentWillMount() {
        this.getItens();
    };

    getItens = async () => {
      const response = await api.get("/products");
      const itens = response.data;
      console.log("ITEM");
      console.log(itens);
      this.setState({data: itens});
    }


    _renderItem = ({ item, index }) => {

        console.log("Item");
        console.log(item);

        return ( 
            // <View style={styles.slide}>
            <ImageBackground source={{uri: item.imagem}} style={styles.slide}>

                <Text style={styles.title}>
                    <Icon name="bullseye" size={20} />
                    {item.name}
                </Text>

                <Text style={styles.title}>
                    <Icon name="tags" size={20} iconStyle={{ marginRight: 10 }} />
                    Price {item.price}$
                </Text>

                <Text style={styles.title}>
                    <Icon name="text-width" size={20} />
                    {item.description}
                </Text>

                <Text></Text>

            </ImageBackground>
            // </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                layout={'tinder'}
            />
        )
    }
}

const dimension = Dimensions.get('screen');
const sliderWidth = dimension.width;
const itemWidth = sliderWidth / 1.1;
const sliderHeight = dimension.height;

const styles = StyleSheet.create({
    slide: {
        alignSelf: "center",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        margin: 5,
        padding: 5,
        borderRadius: 20,
    },

    title: {
        color: "#fff",
    },

})

