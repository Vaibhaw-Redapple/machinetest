import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';

import { ProgressCircle } from 'react-native-svg-charts'
const initialLayout = { width: Dimensions.get('window').width, height: Dimensions.get('window').height };

export default class ChatTabScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      LineChart: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      },

    }
  }
  render(){
    return(
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView />
        <View style={styles.container}>
          <View>
            <Text>Progress Chart</Text>
            <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
            </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

})
