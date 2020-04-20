import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getProducts} from '../api';
import {Product} from '../models/Product';
import ProductListItem from '../components/ProductListItem';

export default () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const updateProducts = (): void => {
    setProducts(getProducts());
    console.log('products', products)
  };

  useEffect(() => {
    updateProducts();
  }, []);

  const onListItemPress = product => {
    navigation.navigate('Product', {product});
  };

  const renderItem = ({item}: {item: Product}) => (
    <ProductListItem key={item.key} item={item} onPress={onListItemPress} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(product, index) => `${product.key}${index}`}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={updateProducts} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
