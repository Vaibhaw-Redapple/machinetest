import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
const initialLayout = { width: Dimensions.get('window').width, height: Dimensions.get('window').height };
export default class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.data
  }
  comment = () => {
    this.setState({
      comments: [...this.state.comments, {id: this.state.comments.length+1, image: "https://picsum.photos/seed/picsum/100/100", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}]
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.userImage}>
              <Image source={{uri: this.state.user.profileUrl}} style={{width: 30, height: 30}} borderRadius={15}/>
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.name}>{this.state.user.name}</Text>
              <Text style={styles.timeAgo}>{this.state.timeAgo}</Text>
            </View>
          </View>
          <View>
            <View style={styles.options}/>
          </View>
        </View>
        <View styles={styles.postContainer}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.postText}>{this.state.postText}</Text>
          <View style={styles.imagePost}>
            <Image source={{uri: this.state.imageUrl}} style={{height: 200}} />
          </View>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comments', {data: this.state.comments})}>
        <View style={styles.postsInfo}>
          <View>
            <Text>{this.state.like}</Text>
          </View>

          <View style={styles.postsShareCount}>
            <Text>{this.state.comments.length} comments</Text>
            <Text>{this.state.share} shares</Text>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.postFooter}>
          <View>
            <Text>Like</Text>
          </View>
          <View>
            <Text onPress={()=>this.comment()}>Comment</Text>
          </View>
          <View>
            <Text onPress={()=>this.setState({share: this.state.share+1})}>Share</Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    width: initialLayout.width,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    paddingTop: 6,
    paddingStart: 16,
    paddingEnd: 16,
  },
  userInfo: {
    flexDirection: 'row',
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  userDetails: {
    flexDirection: 'column',
    marginStart: 6,
  },
  name: {
    fontSize: 14,
    color: '#000'
  },
  timeAgo: {
    fontSize: 12,
    color: '#ccc'
  },
  options: {
    backgroundColor: '#000',
    height: 10,
    width: 20,
  },
  postContainer: {
    // margin: 6,
    // paddingStart: 6
  },
  postText: {
    paddingStart: 6,
    paddingEnd: 6,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imagePost: {
    width: initialLayout.width*0.95,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    height: 200,
    marginBottom: 16,
  },
  postsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 6,
    paddingEnd: 6,
    marginBottom: 6,
  },
  postsShareCount: {
    flexDirection: 'row', width: 160, justifyContent: 'space-between'
  },
  postFooter: {
    alignSelf: 'center',
    width: initialLayout.width*0.98,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 44,
    paddingStart: 6,
    paddingEnd: 6,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
