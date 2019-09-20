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
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

export default class MotoHome extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state={
            user: [],
            motorist: []
        }
    }

    fetchUser = async() => {
        const user_id = await AsyncStorage.getItem('user_id');
        const response = await fetch('http://192.168.254.109:8080/getUser/'+user_id);
        const getUser = await response.json();
        this.setState({user:getUser});
    }

    componentDidMount(){
        this.fetchUser();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{
                    height: 60,
                    borderRadius: 5,
                    width: '100%',
                    backgroundColor: 'white'
                }}>
                    {
                        this.state.user.map((item,i) => {
                            return(
                                <View style={{flex:1, flexDirection: 'row'}}>
                                    <Text style={{padding: 15, fontWeight: 'bold'}}>{item.email}</Text>
                                    <Text style={{padding: 15, paddingLeft: 150}}><Icon name="logout" size={25} color="red"/></Text>
                                </View>
                            );
                        })
                    }
                </View>
                    <View style={{
                        height: 200,
                        padding: 20,
                        width: '100%',
                        backgroundColor: 'black'
                    }}>
                    <Text style={{
                        padding: 10,
                        paddingLeft: 50,
                        fontSize: 45,
                        fontWeight: 'bold',
                        color: 'orange'
                    }}>My Vehicle</Text>
                    <View style={{
                        alignContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        height: 60,
                        width: '30%',
                        backgroundColor: '#ccc',
                        borderRadius: 10
                    }}>
                        <Text style={{fontSize: 40}}>ADD</Text>
                    </View>

                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    }
});