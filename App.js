import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from "./src/screens/auth/Splash";
import Signin from "./src/screens/auth/Signin"

const App = () => {
  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
  );
};

export default App;
