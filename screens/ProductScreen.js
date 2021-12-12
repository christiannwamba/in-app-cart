import React from 'react';

import { View, Text, Button, Image } from 'react-native';

import { DataStore } from '@aws-amplify/datastore';
import { Product as ProductModel, Cart } from '../src/models';
import { Analytics, Notifications } from 'aws-amplify';

export default function ProductScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = React.useState([]);
  const [inCart, setInCart] = React.useState(false);
  React.useEffect(() => {
    async function fetchProduct() {
      const models = await DataStore.query(ProductModel, productId);
      const cartItem = await DataStore.query(Cart, (c) =>
        c.productId('eq', productId)
      );
      setProduct(models);
      setInCart(!!cartItem.length);
    }
    fetchProduct();
  }, [productId]);

  async function addToCart() {
    await DataStore.save(
      new Cart({
        productId,
      })
    );
  
    const event = { name: 'sales_event', attributes: { name: product.name } };
    Analytics.record(event);
    Notifications.InAppMessaging.dispatchEvent(event);
    Notifications.InAppMessaging.onMessageReceived(() => {
      console.log(1234);
    });
    setInCart(true);
  }

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: '#EBEBEB',
      }}
    >
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

        {inCart ? (
          <Text>In Cart</Text>
        ) : (
          <Button
            title="Add to Cart"
            onPress={() => {
              addToCart();
            }}
          ></Button>
        )}
      </View>
    </View>
  );
}
