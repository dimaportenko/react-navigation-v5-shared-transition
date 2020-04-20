import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {useRoute} from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

export default () => {
  const route = useRoute();
  const {product} = route.params;

  return (
    <ScrollView>
      <SharedElement id={`item.${product.key}.photo`}>
        <Image
          source={{uri: product.image}}
          resizeMode="contain"
          style={styles.image}
        />
      </SharedElement>
      <View style={styles.titleWrap}>
        <SharedElement id={`item.${product.key}.name`}>
          <Text style={styles.text}>{product.name}</Text>
        </SharedElement>
        <SharedElement id={`item.${product.key}.price`}>
          <Text style={styles.text}>{`$ ${product.price}`}</Text>
        </SharedElement>
      </View>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 273,
    width: '100%',
  },
  text: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  titleWrap: {
    margin: 10,
    flex: 1,
    alignItems: 'center'
  },
  description: {
    margin: 10,
  },
});
