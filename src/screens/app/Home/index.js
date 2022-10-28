import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../../components/Header";

import { categories } from '../../../data/categories';
import CategoryBox from "../../../components/CategoryBox";

const Home = () => {
  const renderCategoryItem = ({ item, index }) => {
    console.log(item)
    return (
      <CategoryBox
        title={item.title}
        image={item.image}
      />
    )
  }

  return (
    <SafeAreaView>
      <Header showSearch title="Find All You Need" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  )
}

export default React.memo(Home);
