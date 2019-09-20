import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import Button from 'apsl-react-native-button';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from '../component/logo';

export default class App extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    userLogin = async() => {
        const {username,password} = this.state;
        var url = 'http://192.168.254.109:80/capstone101/android/loginUser.php';
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                user: username,
                pass: password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson != 'Try Again'){
                    AsyncStorage.setItem('user_id',responseJson);
                    this.props.navigation.navigate('MotoHome');
                }else{
                    alert(responseJson);
                }
            }).catch((error) => {
                console.error(error);
            })
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                <StatusBar barStyle="dark-content" />
                    <Logo/>
                    <TextInput
                        style={{
                            width: 300,
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            borderRadius: 25,
                            paddingHorizontal: 16,
                            fontSize: 16,
                            color: '#ffffff',
                            marginVertical: 10
                        }}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Username"
                        placeholderTextColor="#ffffff"
                        returnKeyType = "next"
                        onChangeText = {username => this.setState({username})}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TextInput 
                        style={{
                            width: 300,
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            borderRadius: 25,
                            paddingHorizontal: 16,
                            fontSize: 16,
                            color: '#ffffff',
                            marginVertical: 10
                        }}
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        secureTextEntry={true} placeholder="Password"
                        placeholderTextColor="#ffffff"
                        onChangeText = {password => this.setState({password})}
                        ref = {(input) => this.passwordInput =input}/>
                    <Button style={styles.buttonStyle8}
                            textStyle={styles.textStyle8}
                            onPress={this.userLogin}>
                        <View style={styles.customViewStyle}>
                            <Text style={{fontFamily: 'Avenir', color:'white'}}>
                            LOGIN
                            </Text>
                        </View>
                    </Button>
                <View style={styles.signUpText}>
                    <Text style={styles.textSignUp}>Don't have an account yet? Register as</Text>
                    {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
                        <View style={{height: 10, backgroundColor: 'gray', width: '100%'}}/>
                        <Text style={styles.signUpButton} onPress={() => this.props.navigation.navigate('Motor')}>Motorist</Text>
                        <View style={{height: 10, backgroundColor: 'gray', width: '100%'}}/>
                        <Text style={styles.signUpButton} onPress={() => this.props.navigation.navigate('Mecha')}>Mechanic</Text>
                    {/* </View> */}
                </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 16,
        // flexDirection: 'row'
    },
    textSignUp: {
        color : 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signUpButton: {
        width: 150,
        padding: 10,
        paddingLeft: 40,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#1c313a',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    buttonStyle:{
        backgroundColor: '#1c313a',
        borderRadius: 25,
        width: 300,
        marginVertical: 10,
        paddingVertical: 12
    },  
    buttonLogin: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    buttonStyle8: {
        backgroundColor: '#1c313a',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 25,
      },
    textStyle8: {
        width: 200,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    },
    customViewStyle: {
        width: 120,
        height: 40,
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 30,
        flexDirection: 'row',
    }
});
