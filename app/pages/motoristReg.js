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
            password: '',
            lastname: '',
            firstname: '',
            contact: '',
            address: ''
        }
    }

    userLogin = async() => {
        const {username,password,lastname,firstname,contact,address} = this.state;
        var url = 'http://192.168.254.109:80/capstone101/android/motoristRegistration.php';
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                address: address,
                contact : contact,
 


            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson != 'Try Again'){
                    AsyncStorage.setItem('motoristid',responseJson);
                    alert('Successfully Registered!');
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
                        placeholder="Lastname"
                        placeholderTextColor="#ffffff"
                        returnKeyType = "next"
                        onChangeText = {lastname => this.setState({lastname})}
                        onSubmitEditing={() => this.firstnameInput.focus()}
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
                        placeholder="Firstname"
                        placeholderTextColor="#ffffff"
                        returnKeyType = "next"
                        onChangeText = {firstname => this.setState({firstname})}
                        onSubmitEditing={() => this.contactInput.focus()}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.lastnameInput =input}
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
                        placeholder="Contact Number"
                        placeholderTextColor="#ffffff"
                        returnKeyType = "next"
                        onChangeText = {contact => this.setState({contact})}
                        onSubmitEditing={() => this.addressInput.focus()}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.contactInput =input}
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
                        placeholder="Address"
                        placeholderTextColor="#ffffff"
                        returnKeyType = "next"
                        onChangeText = {address => this.setState({address})}
                        onSubmitEditing={() => this.usernameInput.focus()}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.addressInput =input}
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
                        placeholder="Username"
                        placeholderTextColor="#ffffff"
                        returnKeyType = "next"
                        onChangeText = {username => this.setState({username})}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.usernameInput =input}
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
                    <Text style={styles.textSignUp}>Already Have an account?  </Text>
                    <Text style={styles.signUpButton} onPress={() => this.props.navigation.navigate('Login')}>Login</Text>
                </View>
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
        flexDirection: 'row'
    },
    textSignUp: {
        color : 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signUpButton: {
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
