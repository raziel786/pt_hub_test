import ProductsList from '../../assets/products.json';
import React from 'react';
import { View, Text } from 'react-native';

export const getMe2DecimalPointsWithCommas = amount => {
  return Number(amount).toLocaleString('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const orderedProductsByCategory = category => {
  return ProductsList.filter(product => product.category === category).sort(
    (a, b) => a.order - b.order,
  );
};

export const calculatePrice = (
  price,
  discount,
  discount_type,
  dark = false,
) => {
  const styles = {
    text: {
      fontSize: 12,
      color: dark ? 'black' : 'white',
      paddingVertical: 2,
    },
    strikethrough: {
      fontSize: 12,
      color: dark ? 'black' : 'white',
      textDecorationLine: 'line-through',
    },
    newPriceText: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };
  if (discount_type === null) {
    return (
      <Text style={styles.text}>
        {price === 0 ? 'Free' : `£${getMe2DecimalPointsWithCommas(price)}`}
      </Text>
    );
  }
  const newPrice =
    discount_type === 'amount'
      ? price - discount
      : price - price * (discount / 100);

  return (
    <View style={styles.newPriceText}>
      <Text style={styles.strikethrough}>{`£${price} `}</Text>
      <Text style={styles.text}>
        {newPrice === 0
          ? 'Free'
          : ` £${getMe2DecimalPointsWithCommas(newPrice)}`}
      </Text>
    </View>
  );
};
