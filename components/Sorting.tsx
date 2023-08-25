import { useTheme, Chip, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Chips from './Chips';
import SortContainer from './SortContainer';
import Controls from './Controls';
import SortFrame from '../ts/SortFrame'

export default function Sorting() {
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: theme.colors.background,
        },
        fabContainer: {
          margin: 10,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'flex-end'
      },
      sortContainer: {
        backgroundColor: theme.colors.surfaceDisabled,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    })

    function generateRandomList(length: any) {
        return Array.from({length: length}, () => Math.floor(Math.random() * 100));
    }
    
    // State needed to send a request
    const [listLength, setListLength] = useState(30);
    const [list, setList] = useState(() => generateRandomList(listLength));
    const [algorithm, setAlgorithm] = useState("bubble");

    // State for metadata about screen that components need to know
    const [framesPerSecond, setFramesPerSecond] = useState(24);
    const [isSorting, setIsSorting] = useState(true);
    const [currentFrame, setCurrentFrame] = useState<SortFrame>(() => new SortFrame(list, {}));

    // State for storing API response for current Sort
    const [frames, setFrames] = useState([]);

    // Function that will fetch Sort Frames from API and set in state
    const fetchSortedFrames = () => {
      fetch(`http://192.168.68.147:8080/sort?algorithm=${algorithm}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(list),
      }).then(response => response.json())
        .then(sortedFrames => {
          setFrames(sortedFrames)
        })
        .catch(error => console.error(error));
    }

    // Hook that will fire when the frames state is updated
    useEffect(() => {
      visualizeSort(frames)  
    }, [frames]) 


    // function to visualize a sort given the frames
    const visualizeSort = (frames: SortFrame[]) => {
      for(let i = 0; i < frames.length; i++) {
        setTimeout(() => {
          setCurrentFrame(frames[i]);
          if (i == frames.length - 1) {
            setIsSorting(false);
          }
        }, (1000 / framesPerSecond) * i);
      }
    }

    
  return (
    <View style={styles.container}>

      <Chips algorithm={algorithm} setAlgorithm={setAlgorithm} />

      <View style={styles.sortContainer}>
        {currentFrame.list.map((val, idx) => {
          let barColor;
          const isSorted = idx == currentFrame.list.length - 1;
          const isCurrent = idx == currentFrame.highlights["current"];
          if (isSorted) {
            barColor = '#32cd32';
          } else if (isCurrent) {
            barColor = 'red';
          } else {
            barColor = theme.colors.primary;
          }
           return <View key={idx} style={{borderWidth: 0.5, height: `${val}%`, flex: 1, backgroundColor: barColor}}/>
        })}
      </View>

      <View style={styles.fabContainer}>
        <FAB icon="cog" onPress={() => console.log('Pressed')}/>
        <FAB icon="play" onPress={() => fetchSortedFrames()}/>
    </View>
    
    </View>
  );
}