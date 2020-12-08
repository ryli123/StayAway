import React, { Component } from 'react';
import { ActivityIndicator, addons, Text, View, ScrollView, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from '../styles/globalStyles';
import Card from '../components/card';
import Button from "../components/button";
export default class newsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
  
    };
  }

  componentDidMount() {
    //console.log('https://api.covid19api.com/country/canada/status/confirmed/live?from='+d+'&to='+g)
    fetch('https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=fd74d03c2c6148908edb8f2cb92723d3')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.articles});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false }); 
        
      });
  }

  render() {
    
    const { data, isLoading } = this.state;
    
    return (
      <View style={styles.container2}>
        <View style = {styles.flatlistContainer}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <TouchableOpacity 
                onPress ={() =>this.props.navigation.navigate("articleDetails", {item: item})}
            >
              <Card>
              <Text>{item.source.name} </Text>
              
              <Text style = {styles2.titleText}>{item.title} </Text>
              <Text> </Text>
              <Text style = {styles2.cases}>{item.description}</Text>
            </Card>
            </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
};

const styles2 = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    width: 50,
    height: 50,
  },
  cases:{
  }
});