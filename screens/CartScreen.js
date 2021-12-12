import React from 'react';
import { Image, Text, View, ScrollView, Button } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Cart as CartModel, Product as ProductModel } from '../src/models';

export default function CartScreen() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchCart() {
      const cartModels = await DataStore.query(CartModel);
      // console.log(cartModels)
      const productModels = await DataStore.query(ProductModel);
      const cartProductIds = cartModels.map((c) => c.productId);
      const models = productModels.filter((p) => cartProductIds.includes(p.id));

      setItems(models);
      console.log(items);
    }
    fetchCart();
  }, []);

  async function removeItem(id) {
    await DataStore.delete(CartModel, (c) => c.productId("eq", id));
    const models = items.filter((p) => p.id !== id);
    setItems(models);
  }

  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        {items.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={{
                  uri: item.image,
                }}
              ></Image>
              <Text style={{ fontSize: 20, marginLeft: 20 }}>{item.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>
                ${item.price}
              </Text>
              <Button title="Remove" color="red" onPress={() => removeItem(item.id)}></Button>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
