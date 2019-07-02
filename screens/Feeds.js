import React, { Component } from 'react';
import { Image , View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { Container, Header,    Title,  Content, 
         Footer,    FooterTab, Button, Left,
         Right,     Body,      Icon,   Text, 
         Input,     Thumbnail, Card,   CardItem} from 'native-base';
import Status from '../components/Status'
import BlueBar from '../components/BlueBar'
import axios from 'axios'

class FeedsScreen extends Component {

  constructor(){
    super()
    this.state={
      posts:[],
      isLoading:true
    }
  }
  static navigationOptions = {header:null}

  componentDidMount(){
    that=this
    axios.get('http://192.168.0.16:3000/posts')
    .then(function (response) {
      that.setState({
        posts : response.data.data,
        isLoading:false
      })
    })
    .catch(function (error) {
      console.error(error);
    })
  
  }
  
  render() {
    return (
      <Container>
        <BlueBar/>
        <Header style={{backgroundColor:"white"}}>
          <Body>
            <Button transparent>
              <Icon name='newspaper' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='users' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='store' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent onPress={()=>this.props.navigation.navigate("Profile")}>
              <Icon name='user' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='bell' type='FontAwesome5' style={{color:"blue"}}/>
            </Button>
          </Body>
          <Body>
            <Button transparent>
              <Icon name='menu' style={{color:"blue"}}/>
            </Button>
          </Body>
        </Header>

        <Header style={{height:60, backgroundColor:"white"}}>
          <Body>
            <Thumbnail small source={require('../assets/junji-ito4.jpg')}/>
          </Body>
          <Body>
            <Button bordered rounded style={{width:270}}>
              <Text>What's on your mind?</Text>
            </Button>
          </Body>
          <Right>
            <View style={{marginRight:10}}>
              <Icon name='file-image' type='FontAwesome5' style={{color:"blue",}}/>
            </View>
          </Right>
        </Header>

        <Content>
          <ScrollView horizontal={true}>
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('../assets/moses.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('../assets/angel1.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('../assets/angel2.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('../assets/balpro.jpg')}
                  style={styles.storyProfile}
                />
              </View>
              <View style={styles.storyStyle}>
                <ImageBackground 
                  imageStyle={{borderRadius:20}}
                  source={require('../assets/angel3.jpg')}
                  style={styles.storyProfile}
                />
              </View>
            </View>
          </ScrollView>

          {
            this.state.posts.map((item,index) => {
            return(
              <View key={index}>      
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: item.User.avatar }} />
                      <Body>
                        <Text>{item.User.name}</Text>
                        <Text note>2 days ago</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: item.User.avatar }} style={{height: 280, width:360, flex: 1}}/>
                      <Status notes={item.posts}/>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>43 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>0 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon active type="FontAwesome5" name="share" />
                        <Text>Share</Text>
                      </Button>
                    </Right>
                  </CardItem>
                  </Card>
                </View>
              )
            })
            
          }
        </Content>
      </Container>
    );
  }
}

export default FeedsScreen

const styles = StyleSheet.create({
  storyStyle : {
    width:130,
    height:230,
    backgroundColor:"grey",
    borderRadius:20,
    marginTop: 10,
    marginLeft: 10,
  },
    storyProfile : {
    width:130,
    height:230,
    backgroundColor:"grey",
    borderRadius:20,
  },
});