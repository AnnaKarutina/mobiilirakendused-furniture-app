import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Button from "../../../components/Button";
import ListItem from "../../../components/ListItem";

const Profile = ({ navigation }) => {
  const num = 10;

  const onLogout = () => {
    console.log('log out clicked');
  }

  const onSettingsPress = () => {
    navigation.navigate('Settings');
  }

  const onNewListingPress = () => {
    navigation.navigate('CreateListing');
  }

  const onMyListingsPress = () => {
    navigation.navigate('MyListings');
  }

  return (
    <SafeAreaView style={{ flex:1 }}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email</Text>

          <ListItem onPress={onMyListingsPress} title="My Listings" subtitle={`You have ${num} listings`} />
          <ListItem onPress={onSettingsPress} title="Settings" subtitle="Account, FAQ, Contact" />
        </View>

        <Button onPress={onNewListingPress} style={{ flex: 0 }}  title="Add New Listing" />
      </View>
    </SafeAreaView>
  )
}

export default React.memo(Profile);
