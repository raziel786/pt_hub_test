import React from 'react';
import {
  Dimensions,
  Button,
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';
import { calculatePrice } from '../../utilities';

const screenHeight = Dimensions.get('window').height;

const styles = {
  root: {
    padding: 16,
    height: screenHeight,
    paddingBottom: 40,
  },
  image: {
    alignSelf: 'center',
    marginTop: 8,
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    width: '100%',
    padding: 8,
  },
};

export default function Details({ navigation, route }) {
  const {
    params: {
      product: { name, image, description, price, discount, discount_type },
    },
  } = route;
  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.buttonContainer}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{ uri: image }}
        />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.priceContainer}>
          {calculatePrice(price, discount, discount_type, true)}
        </View>
        <Text>{description}</Text>
      </ScrollView>
    </View>
  );
}
