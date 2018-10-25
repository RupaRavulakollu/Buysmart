
import React,{Component} from 'react';
import {View,TouchableHighlight,Text} from 'react-native';
import TouchID from 'react-native-touch-id';
import {Actions} from  'react-native-router-flux';


export default class FingerPrintScan extends Component {
    _pressHandler() {
      TouchID.authenticate('')
        .then(success => {
          alert('Authenticated Successfully');
          Actions.home()
        })
        .catch(error => {
          alert('Authentication Failed');
        });
    }

    componentWillMount(){
        this._pressHandler();
    }
   
    render() {
      return (
        <View>
          
          <TouchableHighlight onPress={this._pressHandler} style>
            <Text>
              Authenticate with Touch ID
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
  };