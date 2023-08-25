import { useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function Searching() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }
    });
    
    return (
        <View style={styles.container}>
        </View>
  );
}