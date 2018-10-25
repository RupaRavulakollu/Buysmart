/**
* This is the Login Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import { Container, View, Left, Right, Button, Icon, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        hasError: false,
        errorText: ''
      };
  }


  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right} title="LOGIN" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50}}>
          <View style={{marginBottom: 35, width: '100%'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: Colors.navbarBackgroundColor}}>Welcome back, </Text>
            <Text style={{fontSize: 18, textAlign: 'left', width: '100%', color: '#687373'}}>Login to continue </Text>
          </View>
          <Item>
              <Icon active name='ios-person' style={{color: "#687373"}}  />
              <Input placeholder='Username' onChangeText={(text) => this.setState({username: text})} placeholderTextColor="#687373" />
          </Item>
          <Item>
              <Icon active name='ios-lock' style={{color: "#687373"}} />
              <Input placeholder='Password' onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} placeholderTextColor="#687373" />
          </Item>
          {this.state.hasError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{this.state.errorText}</Text>:null}
          <View style={{alignItems: 'center'}}>
            <Button onPress={() => this.login()} style={{backgroundColor: Colors.navbarBackgroundColor, marginTop: 20}}>
              <Text style={{color: '#fdfdfd'}}>Login</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }

  login() {
    /*
      Remove this code and replace it with your service
      Username: this.state.username
      Password: this.state.password
    */
   var username=this.state.username;
   var password = this.state.password;
   const k = this;
   
   fetch("http://172.16.5.120:3001/login",{
    method : 'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username:username,
      password:password,
    }),    
  }).then((res)=>{
    //var response = JSON.stringify(res);
    console.warn(res._bodyText)
  })
  .catch((error)=>{
    alert("error..."+JSON.stringify(error))
  });
   
  
  // AsyncStorage.getItem("USER",(error,res)=>{
  //     //alert(res+username);
  //     if(res!== username) {
        
  //     k.setState({hasError:true,errorText:'User does not exists !'});
  //     Actions.signup();
  //     }
  //    else {
  //     AsyncStorage.getItem("PASSWORD",(error,res)=>{
  //       if(res!== password) { 
  //         //alert(res+password);
  //         k.setState({hasError:true,errorText:'Invalid password !'});
  //       }else{
  //         Actions.category();
  //         AsyncStorage.setItem("LOGIN","true");
  //       } 
  //    });
  //    }
     
  //  });
   
    //this.setState({hasError: true, errorText: 'Invalid username or password !'});
  }


}
