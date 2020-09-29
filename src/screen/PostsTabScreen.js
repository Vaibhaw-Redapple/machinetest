import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Posts from '../component/Posts';

const initialLayout = { width: Dimensions.get('window').width, height: Dimensions.get('window').height };

export default class PostsTabScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      posts: [
        {
          id: 0,
          user: {
            name: "Vaibhaw Anand",
            profileUrl: 'https://picsum.photos/seed/picsum/100/100',
          },
          timeAgo: '4 hours ago',
          postText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          like:50,
          share: 25,
          comments: [],
          emoji: 16,
          imageUrl: 'https://picsum.photos/seed/picsum/300/400',
        }
      ]
    }
  }

  render(){
    return(
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView />
        <View style={styles.container}>
          <View style={{alignItems: 'flex-end', height: 44,justifyContent: 'center'}}>
            <Text onPress={()=>this.setState({posts: [...this.state.posts, this.state.posts[0]]})}>Add New Post</Text>
          </View>
          <FlatList
            data={this.state.posts}
            renderItem={({ item, index }) => <Posts key={index.toString()} data={item}/>}
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

})
