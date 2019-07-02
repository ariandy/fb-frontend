import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Hr from 'react-native-hr-component';
import { Container, Header, Title,     Content,
         Footer,    Form,   View,      Item,
         Label,     Input,  FooterTab, Button,
         Left,      Right,  Body,      Icon,    Text } from 'native-base';

class LoginScreen extends Component {

  constructor () {
    super()
    this.state = {
      buttonLogin: 'Login',
      inputUser: 'Username',
      inputPass: 'Password',
      forgotten: 'Forgot Password?',
      orDash: 'OR',
      buttonSignup: 'Sign Up',
    }
  }

  static navigationOptions ={header:null}

  inaLanguage = () => {
    this.setState({
      buttonLogin : 'Masuk',
      inputUser : 'Nama Pengguna',
      inputPass : 'Kata Sandi',
      forgotten : 'Lupa Password?',
      orDash: 'Atau',
      buttonSignup: 'Daftar'
    })
  }

  engLanguage = () => {
    this.setState({
      buttonLogin: 'Login',
      inputUser: 'Username',
      inputPass: 'Password',
      forgotten: 'Forgot Password?',
      orDash: 'OR',
      buttonSignup: 'Sign Up'
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Image source={require('../assets/headerLogin.png')} style={{height: 200, width: null, flex: 1}}/>
          
          <View style={{alignItems:"center", paddingTop:20}}>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={this.engLanguage}><Text> English </Text></TouchableOpacity>
              <Text> · </Text>
              <TouchableOpacity onPress={this.inaLanguage}><Text> Bahasa Indonesia </Text></TouchableOpacity>
              <Text> · Others... </Text>
            </View>
            <View style={{width:300, height:175, paddingTop:50}}>
              <Form>

                <Item regular style={{borderColor:"transparent", borderWidth:0,}}>
                  <Input placeholder={this.state.inputUser} style={{borderBottomWidth:1,}}/>
                </Item>
                
                <Item regular style={{borderColor:"transparent", borderWidth:0,}}>
                  <Input
                    placeholder={this.state.inputPass}
                    secureTextEntry={true}
                    style={{borderBottomWidth:1,}}
                  />
                </Item>
                
                <Button
                  block
                  style={{alignContent:"center", marginTop:10 }}
                  onPress={()=>this.props.navigation.navigate("Feeds")}
                >
                  <Text>{this.state.buttonLogin}</Text>
                </Button>

              </Form>
            </View>
          </View>

          <View style={{alignItems:"center"}}>
            <View style={{paddingTop:40, }}>
              <Text>{this.state.forgotten}</Text>
            </View>
          </View>

          <View style={{width:300, paddingTop:95, alignSelf:"center"}}>
            <Hr lineColor="#eeeeee" width={1} text={this.state.orDash} style={{color:"black"}}/>
          </View>

          <View style={{width:200, alignSelf:"center", marginTop:40}}>
            <Form>
              <Button block success style={{ alignContent:"center", marginTop:10 }}>
                <Text>{this.state.buttonSignup}</Text>
              </Button>
            </Form>
          </View>

        </Content>
      </Container>
    );
  }
}

export default LoginScreen