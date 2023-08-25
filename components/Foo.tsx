import { useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function Foo() {
  const theme = useTheme()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    }
  })

  return (
    <View style={styles.container}>
      
  </View>
  );
}