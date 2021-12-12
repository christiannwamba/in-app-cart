import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Product({ product, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        {product.name}
      </Text>
      <Image
        source={{
          uri: product.image,
        }}
        style={{
          height: 300,
        }}
      ></Image>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          ${product.price}
        </Text>

        <Button
          title="View"
          onPress={() => {
            navigation.navigate('Product', { productId: product.id });
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 20,
    backgroundColor: '#EBEBEB',
    marginBottom: 30
  },
});
