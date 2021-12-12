import React from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { StyleSheet, ScrollView } from 'react-native';
import ProductItem from '../components/Product';
import { Product } from '../src/models';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function fetchProducts() {
      const models = await DataStore.query(Product);
      console.log(models);
      setProducts(models);
    }
    fetchProducts();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {products.map((p) => (
        <ProductItem
          key={p.id}
          product={p}
          navigation={navigation}
        ></ProductItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 20,
    backgroundColor: '#EBEBEB',
  },
});
