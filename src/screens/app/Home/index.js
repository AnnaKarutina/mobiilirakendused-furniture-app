import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from "../../../components/Header";

const Home = () => {
  return (
    <SafeAreaView>
      <Header showSearch title="Find All You Need" />
    </SafeAreaView>
  )
}

export default React.memo(Home);
