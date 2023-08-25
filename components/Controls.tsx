import { useTheme, Chip, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function Controls({ isSorting, setIsSorting, listLength, algorithm, list, fetchSortedFrames } : {isSorting: boolean, setIsSorting: any, listLength: number, algorithm: string, list: number[], fetchSortedFrames: any}) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        fabContainer: {
            margin: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
    })
    

  return (
    <View style={styles.fabContainer}>
        <FAB icon="cog" onPress={() => console.log('Pressed')}/>
        <FAB icon="play" onPress={() => fetchSortedFrames()}/>
    </View>
  );
}