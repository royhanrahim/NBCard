
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button, TextInput, ListView, ScrollView} from 'react-native';
import { List, ListItem } from 'native-base';

export default class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          textInput: [],
          date: new Date(),
        } 
      }

      addTextInput = (key) => {
        let textInput = this.state.textInput;
        textInput.push(<TextInput key={key} />);
        this.setState({ textInput })
      }

      render(){
        return(
          <View>
            <ScrollView>
            <Button title='+' onPress={() => 
               this.addTextInput(this.state.textInput.length)} />
            {this.state.textInput.map((value, index) => {
              return value
            })}

            </ScrollView>
          </View>
        )
      }
    }

AppRegistry.registerComponent('NativeBase', ()=> App);