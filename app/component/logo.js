import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

class Logo extends Component {
    render(){
        return(
            <View style={{flexGrow: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image style={{width:100,height:100}}
                    source={require('../images/logo.png')}
                />
                <Text style={{marginVertical: 15, fontSize: 18, color: 'rgba(255,255,255,0.7)'}}>Welcome to Mechanic Hero</Text>
            </View>
        );   
    }
}

export default Logo;