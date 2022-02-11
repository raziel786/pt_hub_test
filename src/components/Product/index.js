import React from 'react';
import { TouchableOpacity, ImageBackground, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { calculatePrice } from '../../utilities';

export default function Product({ product }) {
  const { name, image, short_description, price, discount, discount_type } =
    product;

  const navigation = useNavigation();

  const styles = {
    container: {
      borderRadius: 8,
      overflow: 'hidden',
      aspectRatio: 4 / 3,
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#00000096',
      width: '100%',
      height: '40%',
      padding: 8,
    },
    bottomPosition: {
      height: '100%',
      justifyContent: 'center',
    },
    text: {
      fontSize: 12,
      color: 'white',
      paddingVertical: 2,
    },
    nameText: {
      fontSize: 12,
      color: 'white',
      paddingVertical: 2,
      width: '80%',
      fontWeight: 'bold',
    },
    strikethrough: {
      fontSize: 12,
      color: 'white',
      textDecorationLine: 'line-through',
    },
    newPriceText: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    avatar: {
      position: 'absolute',
      right: 8,
      top: 8,
      width: 20,
      height: 20,
      borderRadius: 9999,
      backgroundColor: 'grey',
    },
    desc: {
      fontSize: 10,
      color: 'lightgray',
    },
  };

  const transitionToDetails = () => {
    navigation.navigate('Details', { product });
  };

  return (
    <TouchableOpacity onPress={() => transitionToDetails()}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.bottomContainer}>
            <View style={styles.avatar} />
            <View style={styles.bottomPosition}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.nameText}>
                {name}
              </Text>
              <View style={styles.nameText}>
                {calculatePrice(price, discount, discount_type)}
              </View>
              <Text ellipsizeMode="tail" numberOfLines={2} style={styles.desc}>
                {short_description}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
