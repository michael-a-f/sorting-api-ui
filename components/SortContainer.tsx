import { useTheme, Chip, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import SortFrame from '../ts/SortFrame';

export default function SortContainer({ frame } : {frame: SortFrame}) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        sortContainer: {
            backgroundColor: theme.colors.surfaceDisabled,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
    })
    

  return (
    <View style={styles.sortContainer}>
    {frame.list.map((val, idx) => {
        return <View key={idx} style={{borderWidth: 0.5, height: `${val}%`, flex: 1, backgroundColor: theme.colors.primary}}/>
    })}
</View>
  );
}