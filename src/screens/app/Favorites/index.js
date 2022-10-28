import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../../components/Header";
import { products } from "../../../data/products";
import { FlatList } from "react-native";
import FavoriteItem from "../../../components/FavoriteItem";

const Favorites = () => {
  const renderItem = ({item}) => {
    return (
      <FavoriteItem {...item} />
    )
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title="Favorites" />
        <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item?.id)} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(Favorites);
