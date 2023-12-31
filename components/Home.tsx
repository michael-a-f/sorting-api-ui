import { useTheme, Text, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import {  useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee';


export default function Home() {
  const theme = useTheme()
  let [fontsLoaded] = useFonts({
    Bungee_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    logo: {
      backgroundColor: theme.colors.backdrop,
      marginTop: 30,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderWidth: 2,
      borderRadius: 40,
      borderColor: theme.colors.primaryContainer,
    },
    logoText: {
      color: theme.colors.onBackground,
      fontFamily: "Bungee_400Regular",
      textShadowColor: "red",
      textShadowRadius: 10,
      textShadowOffset: {
        width: -1,
        height: 1,
      },
      fontSize: 48,
    },
    btn: {
      backgroundColor: theme.colors.backdrop,
      width: 250,
      borderRadius: 40,
      borderWidth: 2,
      borderColor: theme.colors.primaryContainer,
      fontFamily: "Bungee_400Regular",
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Search 'n Sort</Text>
      </View>

      <View style={styles.container}>
        <Button style={styles.btn}>About</Button>
        <Button style={styles.btn}>Sorting Visualizer</Button>
        <Button style={styles.btn}>Searching Visualizer</Button>
        <Button style={styles.btn}>GitHub</Button>
      </View>
    </View>
  );
}