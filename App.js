import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Signin from './src/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = '578524956869-pjsmg3vcrmnvrc36qu7892snk5vqoc7s.apps.googleusercontent.com'
const IOS_CLIENT_ID = '578524956869-ctndmbjkpfd10htgf7863nflegk961mi.apps.googleusercontent.com'
const REVERSED_IOS_CLIENT_ID = 'com.googleusercontent.apps.578524956869-ctndmbjkpfd10htgf7863nflegk961mi'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default App;
