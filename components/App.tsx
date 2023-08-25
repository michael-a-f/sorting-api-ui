import { AppRegistry, SafeAreaView } from 'react-native';
import { PaperProvider, MD3DarkTheme as DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { expo as expoAppDetails} from '../app.json'
import BottomTab from './BottomTab';


export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView style={{flex: 1}}>
          <BottomTab />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  
  );
}

AppRegistry.registerComponent(expoAppDetails.name, () => App);