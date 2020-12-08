import React, { Component } from 'react';
import { ActivityIndicator, addons, FlatList, Text, View, ScrollView, StyleSheet} from 'react-native'
import styles from '../styles/globalStyles';
import Card from '../components/card';
import Button from "../components/button";
export default class canadaStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
  
    };
  }

  componentDidMount() {
    fetch('https://api.covid19tracker.ca/summary')
      .then((response) => response.json())
      .then((jsonResp) => {
        this.setState({data: jsonResp["data"][0]});
        console.log(JSON.stringify(jsonResp));
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false }); 
      });
  }

  render() {
    
    const { data, isLoading } = this.state;
    return (
      <View style={styles2.container }>
          <ScrollView 
            showsVerticalScrollIndicator={false}
               contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 20,
                marginTop:10,
                
            }}
          >
            <Text style={styles.formTitleCreateNew}>COVID-19 Stats: Canada</Text>
            <Card>
              <Text style = {styles2.titleText}>Current Date</Text>
                  <Text>{this.state.data.latest_date}</Text>
            </Card>
              <Card>
                  <Text style = {styles2.titleText}>Total Cases</Text>
                  <Text style = {styles2.cases}>{this.state.data.total_cases}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Change in Cases</Text>
                  <Text style = {styles2.cases}>{this.state.data.change_cases}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Total Fatalities</Text>
                  <Text style = {styles2.cases}>{this.state.data.total_fatalities}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Change in Fatalities</Text>
                  <Text style = {styles2.cases}>{this.state.data.change_fatalities}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Total Recoveries</Text>
                  <Text style = {styles2.rec}>{this.state.data.total_recoveries}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Change in Recoveries</Text>
                  <Text style = {styles2.rec}>{this.state.data.change_recoveries}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Total Hospitalizations</Text>
                  <Text style = {styles2.cases}>{this.state.data.total_hospitalizations}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Change in Hospitalizations</Text>
                  <Text style = {styles2.cases}>{this.state.data.change_hospitalizations}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}>Total Critical Patients</Text>
                  <Text style = {styles2.cases}>{this.state.data.total_criticals}</Text>
              </Card>
              <Card>
                  <Text style = {styles2.titleText}> Change in Critical Patients</Text>
                  <Text style = {styles2.cases}>{this.state.data.change_criticals}</Text>
              </Card>
              <Button
					    text="Provincial Statistics"
					      onPress={() => this.props.navigation.navigate("apiTest")}
				/>
          </ScrollView>
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
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    cases:{
      color: "red"
    },
    rec: {
      color: "green",
    }
});
