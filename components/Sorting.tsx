import { useTheme, FAB } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Chips from './Chips';
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
        justifyContent: 'space-between'
      },
      sortContainer: {
        backgroundColor: theme.colors.surfaceDisabled,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
    })

    function generateRandomList(length: any) {
        return Array.from({length: length}, () => Math.floor(Math.random() * 100) + 1);
    }
    
    // State needed to send a request
    const [listLength, setListLength] = useState(40);
    const [list, setList] = useState(() => generateRandomList(listLength));
    const [algorithm, setAlgorithm] = useState("bubble");

    // State for metadata about screen that components need to know
    const [framesPerSecond, setFramesPerSecond] = useState(24);
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const [currentFrame, setCurrentFrame] = useState<SortFrame>(() => new SortFrame(list, {}));

    // State for storing API response for current Sort
    const [frames, setFrames] = useState([]);

    // Function that will fetch Sort Frames from API and set in state
    const fetchSortedFrames = () => {
      if (!isSorted && !isSorting) {
        setIsSorting(true);
        fetch(`${process.env.EXPO_PUBLIC_BASE_API_URL}/sort?algorithm=${algorithm}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(list),
        }).then(response => response.json())
          .then(sortedFrames => {
            setFrames(sortedFrames)
          })
          .catch(error => {
            setIsSorting(false);
            console.error(error);
          });
        }
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
            setIsSorted(true);
          }
        }, (1000 / framesPerSecond) * i);
      }
    }

    const getBarColor = (highlights: Record<string, number>, currentIndex: number, defaultColor: string) => {
      if (isSorted) {
        return theme.colors.inversePrimary;
      } else if (currentIndex == highlights["current"]) {
        return 'red';
      } else if (currentIndex == highlights["pivot"]) {
        return 'yellow';
      } else if (currentIndex == highlights["left"]) {
        return 'green';
      } else if (currentIndex == highlights["right"]) {
        return 'orange';
      } else {
        return defaultColor;
      }
    }

    
  return (
    <View style={styles.container}>
      <Chips algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <View style={styles.sortContainer}>
        {currentFrame.list.map((val, idx) => {
          const barColor = getBarColor(currentFrame.highlights, idx, theme.colors.primary)
          return <View key={idx} style={{borderWidth: 0.5, height: `${val}%`, flex: 1, backgroundColor: barColor}}/>
        })}
      </View>
      <View style={styles.fabContainer}>
        <FAB icon="cog" />
        <FAB icon="shuffle" onPress={() => {
            setList(generateRandomList(listLength));
            setCurrentFrame(new SortFrame(list, {}));
            setIsSorted(false);
          }}/>
        <FAB icon={isSorting ? "pause" : "play"} onPress={() => fetchSortedFrames()}/>
      </View>
    </View>
  );
}