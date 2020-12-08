import React, { Component } from 'react';
import { ActivityIndicator, addons, FlatList, Text, View, ScrollView, StyleSheet} from 'react-native'
import styles from '../styles/globalStyles';
import Card from '../components/card';
var d = new Date();
var g = new Date();
g.setDate(g.getDate()-1);
d.setDate(d.getDate()-2); 
g = g.toISOString();
d = d.toISOString();
g = g.substr(0,g.indexOf('T'));
d = d.substr(0,d.indexOf('T'));
g = g.concat("T00:00:00Z");
d = d.concat("T00:00:00Z");
console.log(g);
export default class apiTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
  
    };
  }

  componentDidMount() {
    console.log('https://api.covid19api.com/country/canada/status/confirmed/live?from='+d+'&to='+g)
    fetch('https://api.covid19api.com/country/canada/status/confirmed/live?from='+d+'&to='+g)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json});
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
        <Text style={styles.formTitleCreateNew}>COVID-19 Cases: By Province</Text>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            item.Cases != 0 ? (
              <Card>
              <Text style = {styles2.titleText}>{item.Province} </Text>
              <Text style = {styles2.cases}>{item.Cases}</Text>
            </Card>
            )
            : null
            )}
          />
        </View>
      </View>
    );
  }
};

const styles2 = StyleSheet.create({
   container: {
    flex:1,
    flexGrow:1,
    marginRight:20,
    height:300,
    marginTop:50,
    position: 'relative',
  
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cases:{
    color: "red"
  }
});