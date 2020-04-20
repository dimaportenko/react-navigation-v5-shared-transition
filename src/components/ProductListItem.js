import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default props => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item);
      }}>
      <View style={styles.product}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.text}>{`$ ${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: windowWidth / 2 - 30,
  },
  text: {
    margin: 3,
    textAlign: 'center',
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2,
    marginBottom: 5,
  },
});
