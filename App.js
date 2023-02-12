import {  SafeAreaView, StatusBar, View } from 'react-native';
import Cesta from './src/telas/Cesta/Cesta';
import { useFonts,Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic   } from '@expo-google-fonts/montserrat';
import mock from './src/Mocks/Cesta'
import AppLoading from "expo-app-loading";

export default function App() {
  const [fonts]= useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  if(!fonts){
    return <AppLoading/>
  }
  return (

      <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mock} />
      </SafeAreaView>

  );
}
