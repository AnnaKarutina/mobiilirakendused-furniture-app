// import React, { useEffect } from 'react';
// import { Image} from 'react-native';
//
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
//
// import Splash from "./src/screens/auth/Splash";
// import Signin from "./src/screens/auth/Signin";
// import Signup from "./src/screens/auth/Signup";
//
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
//
// import { colors } from './src/utils/colors';
//
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//
// import Home from './src/screens/app/Home';
// import Favorites from './src/screens/app/Favorites';
// import Profile from './src/screens/app/Profile';
//
// import ProductDetails from './src/screens/app/ProductDetails';
//
// import Settings from "./src/screens/app/Settings";
//
// import CreateListing from "./src/screens/app/CreateListing"
// import MyListings from "./src/screens/app/MyListings";
//
// const WEB_CLIENT_ID = '578524956869-pjsmg3vcrmnvrc36qu7892snk5vqoc7s.apps.googleusercontent.com'
// const IOS_CLIENT_ID = '578524956869-ctndmbjkpfd10htgf7863nflegk961mi.apps.googleusercontent.com'
// const REVERSED_IOS_CLIENT_ID = 'com.googleusercontent.apps.578524956869-ctndmbjkpfd10htgf7863nflegk961mi'
//
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
//
// const ProfileStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
//       <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
//       <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
//       <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   )
// }
//
// const Tabs = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused }) => {
//         let icon;
//
//         if (route.name === 'Home') {
//           icon = focused
//             ? require('./src/assets/tabs/home_active.png')
//             : require('./src/assets/tabs/home.png');
//         } else if (route.name === 'ProfileStack') {
//           icon = focused
//             ? require('./src/assets/tabs/profile_active.png')
//             : require('./src/assets/tabs/profile.png');
//         } else if (route.name === 'Favorites') {
//           icon = focused
//             ? require('./src/assets/tabs/bookmark_active.png')
//             : require('./src/assets/tabs/bookmark.png');
//         }
//
//         // You can return any component that you like here!
//         return <Image style={{ width: 24, height: 24 }} source={icon} />
//       },
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarStyle: { borderTopColor: colors.lightGrey }
//     })}
//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Favorites" component={Favorites} />
//     <Tab.Screen name="ProfileStack" component={ProfileStack} />
//   </Tab.Navigator>
// )
//
// const App = () => {
//   const isSignedIn = false;
//
//   useEffect(() => {
//     GoogleSignin.configure({
//       scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//       webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
//       offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//       iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     });
//   }, [])
//
//   const theme = {
//     colors: {
//       background: colors.white,
//     }
//   }
//
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer theme={theme}>
//         <Stack.Navigator>
//           {isSignedIn ? (
//             <>
//               <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
//               <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
//             </>
//           ) : (
//             <>
//               <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//               <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
//               <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };
//
// export default App;

import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState();

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
