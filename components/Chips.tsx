import { useTheme, Chip, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function Chips({ algorithm, setAlgorithm } : {algorithm: string, setAlgorithm: any}) {
    const theme = useTheme()
    const styles = StyleSheet.create({
        scrollView: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomWidth: 0.3,
            borderTopWidth: 0.3,
            borderColor: theme.colors.onSurfaceDisabled,
            height: 60,
            elevation: 0
        },
        chip: {
            margin:5,
            height: 35,
        },
    })
    

  return (
        <View style={styles.scrollView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Chip 
                    selected={algorithm == "bubble"}
                    style={styles.chip}
                    onPress={() => setAlgorithm("bubble")}>
                        Bubble Sort
                </Chip>
                <Chip 
                    selected={algorithm == "insertion"} 
                    style={styles.chip} 
                    onPress={() => setAlgorithm("insertion")}>
                        Insertion Sort
                </Chip>
                <Chip 
                    selected={algorithm == "merge"} 
                    style={styles.chip} 
                    onPress={() => setAlgorithm("merge")}>
                        Merge Sort
                </Chip>
                <Chip 
                    selected={algorithm == "quick"}
                    style={styles.chip}
                    onPress={() => setAlgorithm("quick")}>
                        Quick Sort
                </Chip>
            </ScrollView>
        </View>
  );
}