import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../../components/Header";

import { categories } from '../../../data/categories';

const Home = () => {
  const renderCategoryItem = ({ item, index }) => {
    console.log(item)
    return (
      <Text>{item.title}</Text>
    )
  }

  return (
    <SafeAreaView>
      <Header showSearch title="Find All You Need" />
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default React.memo(Home);
