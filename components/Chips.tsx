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
            borderBottomWidth: 0,
            borderTopWidth: 0,
            borderColor: theme.colors.onSurfaceDisabled,
            height: 60,
            elevation: 0
        },
        chip: {
            margin:5,
            height: 35,
            borderColor: theme.colors.background,
            borderWidth: 1,
        },
        selectedChip: {
            margin:5,
            height: 35,
            backgroundColor: theme.colors.primaryContainer,
            borderColor: theme.colors.primary,
            borderWidth: 1,
        }
    })
    

  return (
        <View style={styles.scrollView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Chip 
                    selected={algorithm == "bubble"}
                    style={algorithm == "bubble" ? styles.selectedChip : styles.chip}
                    onPress={() => setAlgorithm("bubble")}>
                        Bubble Sort
                </Chip>
                <Chip 
                    selected={algorithm == "insertion"} 
                    style={algorithm == "insertion" ? styles.selectedChip : styles.chip}
                    onPress={() => setAlgorithm("insertion")}>
                        Insertion Sort
                </Chip>
                <Chip 
                    selected={algorithm == "merge"} 
                    style={algorithm == "merge" ? styles.selectedChip : styles.chip}
                    onPress={() => setAlgorithm("merge")}>
                        Merge Sort
                </Chip>
                <Chip 
                    selected={algorithm == "quick"}
                    style={algorithm == "quick" ? styles.selectedChip : styles.chip}
                    onPress={() => setAlgorithm("quick")}>
                        Quick Sort
                </Chip>
            </ScrollView>
        </View>
  );
}