import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default class App extends Component {
   state= {
     placeName: '',
     places: []
   }

 placeNameChangedHandler = val => {
     this.setState({
         placeName: val
       });
    };

placeSubmitHandler = () => {
  if (this.state.placeName.trim() === "") {
    return;
  }

  this.setState(prevState => {
    return {
       places: prevState.places.concat(prevState.placeName)
     };
   });
};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
           <TextInput
             style={styles.placeInput}
             placeholder= "An awesome place"
             value={this.state.placeName} onChangeText={this.placeNameChangedHandler} />
          <Button style={styles.placeButton}
             onPress={this.placeSubmitHandler}
             title="Add" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
