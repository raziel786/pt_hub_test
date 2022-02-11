import ProductsList from '../../../assets/products.json';
import { Text } from 'react-native';
import Products from '../../components/Product';
import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { orderedProductsByCategory } from '../../utilities';

const screenHeight = Dimensions.get('window').height;

const styles = {
  root: {
    padding: 16,
    height: screenHeight,
    paddingBottom: 84, // for the bottom tab navigation
  },
  title: {
    fontSize: 20,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  scrollView: {
    height: 200,
  },
  productView: {
    paddingRight: 8,
  },
};

export default function Market() {
  const categories = [
    ...new Set(ProductsList.map((product) => product.category)),
  ];
  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {categories.map((category) => {
          return (
            <View>
              <Text style={styles.title}>{category}</Text>
              <ScrollView style={styles.scrollView} horizontal>
                {orderedProductsByCategory(category).map((product) => (
                  <View style={styles.productView}>
                    <Products product={product} />
                  </View>
                ))}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
