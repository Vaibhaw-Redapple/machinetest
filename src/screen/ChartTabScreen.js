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

import { AreaChart, Grid, ProgressCircle } from 'react-native-svg-charts';
import * as shape from 'd3-shape'

const initialLayout = { width: Dimensions.get('window').width, height: Dimensions.get('window').height };

export default class ChatTabScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areaChart: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
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
          <View style={{flex:1}}>
            <Text>Progress Chart</Text>
            <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
          </View>
          <View style={{flex: 1,}}>
            <Text>Area Chart</Text>
            <AreaChart
                style={{ height: 200, width: initialLayout.width*0.9 }}
                data={this.state.areaChart}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

})
