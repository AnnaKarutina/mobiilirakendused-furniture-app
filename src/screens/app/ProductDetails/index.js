import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from "react-native";
import { Image, View } from "react-native";
import Button from "../../../components/Button";
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({ route, navigation }) => {
  console.log(route)
  const { product } = route?.params || {};
  console.log(product)

  const onBackPress = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {product?.images?.length ? (
            <ImageCarousel images={product?.images} />
          ) : (
            <Image style={styles.image} source={{ uri: product?.image }} />
          )}

          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
        </Pressable>

      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark_blue.png')} />
        </Pressable>
        <Button title="Contact Seller" />
      </View>

    </SafeAreaView>
  )
}

export default React.memo(ProductDetails);
