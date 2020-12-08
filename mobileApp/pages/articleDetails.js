import React, { Component } from 'react';
import { ActivityIndicator, addons, FlatList, Text, View, ScrollView, StyleSheet,Image,Linking} from 'react-native';
import styles from '../styles/globalStyles';
import Card from '../components/card';
var { vw, vh } = require("../node_modules/react-native-expo-viewport-units");
export default class articleDetails extends Component {
  constructor(props) {
    super(props);
}


  render() {
    
    const data = this.props.navigation.getParam('item');
    console.log(data.urlToImage);
    return (
        <View style={styles2.container}>
        <ScrollView
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
              marginTop:10,
            }}
        >
             <Card>
            <Text style = {styles2.titleText}>
                {data.title}
            </Text>
            </Card>
          
           {data.author != null ? (
            <Card>
                <View style={{ alignItems: "center" }}>
                <Text style = {{fontWeight: 'bold'}}>Author(s)</Text>
                <Text>{data.author}</Text>
                </View>
            </Card>
           ) : null
             }
            {data.description != null ? (
            <Card>
            <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}>Description</Text>
                <Text>{data.description}</Text>
            </Card>
            ) : null
            }
            {data.content != null ? (
            <Card>
                <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}>Summary</Text>
                <Text>{data.content.substr(0,data.content.indexOf('['))}</Text>
            </Card>
            ):null}
            {data.url != null ? (
            <Card>
                <Text style = {{fontWeight: 'bold', alignSelf: 'center'}}>Continue Reading</Text>
                <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>{data.url}</Text>
            </Card>
            ) : null}
            
        </ScrollView>
    </View>
    );
        }
};

const styles2 = StyleSheet.create({
    container: {
      flex:1,
      flexGrow:1,
      height:300,
      position: 'relative',
      paddingTop:50,
      paddingRight: 10,
    
    },
    image: {
      width: '100%',
      height: '100%',
    },
    logo: {
      width: 66,
      height: 58,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontWeight: 'bold', 
        textAlign: 'center'
      },
  });
  