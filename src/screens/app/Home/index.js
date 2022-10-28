import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../../components/Header";

import { categories } from '../../../data/categories';
import CategoryBox from "../../../components/CategoryBox";

import { products } from '../../../data/products';
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      const updatedProducts = products.filter((product) => product?.category === selectedCategory);
      setFilteredProducts(updatedProducts);
    }else if (!selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory])

    const renderCategoryItem = ({ item, index }) => {
    //console.log(item)
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        title={item.title}
        image={item.image}
      />
    )
  }

  const renderProductItem = ({ item }) => {
    console.log(item)
    return (
      <ProductHomeItem {...item} />
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

      <FlatList
        numColumns={2}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={{ height: 200 }} />}
      />
    </SafeAreaView>
  )
}

export default React.memo(Home);
