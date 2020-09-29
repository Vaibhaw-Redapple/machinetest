import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';

const initialLayout = { width: Dimensions.get('window').width, height: Dimensions.get('window').height };

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      email: "",
      password: "",
      name: "",
      dob: ""
    }
  }
  onPress () {
    this.props.navigation.goBack();
  }
  render(){
    return(
      <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.inputForm}>
        <View style={styles.inputTextCont}>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.setState({name: text})}
            placeholder="Enter name"
            selectionColor={"white"}
            autoCorrect={false}
            autoFocus={true}
            placeholderTextColor={'#fff'}
            value={this.state.name}
          />
        </View>
          <View style={styles.inputTextCont}>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.setState({email: text})}
              placeholder="Enter email"
              selectionColor={"white"}
              keyboardType="email-address"
              autoCorrect={false}
              autoFocus={true}
              placeholderTextColor={'#fff'}
              value={this.state.email}
            />
          </View>
          <View style={styles.inputTextCont}>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              placeholder="Enter pass"
              selectionColor={"white"}
              autoCorrect={false}
              placeholderTextColor={'#fff'}
              value={this.state.password}
            />
          </View>
          <View style={styles.submitViewCont}>
            <TouchableOpacity onPress={()=>this.onPress()} activeOpacity={1} disabled={this.props.disabled || !this.state.activeValue}>
                <View style={styles.submitCont}>
                  <Text style={!validateForm(this.state) ? styles.submitText : [styles.submitText,{color: '#fff'}]}>Register</Text>
                </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} activeOpacity={1} >
            <View style={styles.registerTextView}>
              <Text>Back To Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </>
    )
  }
}
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}
const validateForm = (state) => {
  if(!validate(state.email)) {
    return false
  } else if(state.password === ""){
    return false
  } else {
    return true
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputForm: {
    width: Math.min(initialLayout.width, 414)*0.85,
    borderRadius: 16,
    height: initialLayout.height * 0.5,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputTextCont: {
    // paddingLeft: 0,
    alignSelf: 'center',
    backgroundColor: '#3251a2',
    width: '90%',
    height: 44,
    justifyContent: 'center',
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 19,
    color: '#fff',
  },
  submitViewCont: {
    alignSelf: 'center',
  },
  submitCont: {
    backgroundColor: '#00b2ff',
    width: 206,
    height: 44,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  submitText: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#48d1ff',
  },
  registerTextView: {
    marginTop: 30,
    alignSelf: 'flex-end',
  }
})
