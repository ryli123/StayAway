import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Text, View, Image, ImageBackground, StyleSheet} from 'react-native';
import Button from "../components/button";
import styles from '../styles/globalStyles';
import apiTest from "./apiTest";
import image from '../assets/iOS-14.2-wallpaper-LAke-The-Cliff-Light-Mode.jpg'; 
import button from '../components/button';
import Card from "../components/card"

export default function Welcome(props) {
  return (
    <View style={styles.container}>
			<ImageBackground source = {image} style = {styles2.image}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>WELCOME TO</Text>
				<Text style={styles.textTitle}>STAY AWAY</Text>
				<Text style={styles.text}>
					So everyone can stay away.
				</Text>
			</View>
			<View style={styles.buttonContainer}>
			<Button
					text="Current Live Feed"
					onPress={() => props.navigation.navigate("liveStreamMux")}
				/>
				<Button 
					text="COVID-19 News"
					onPress={() => props.navigation.navigate("newsPage")}
				/>
				<Button
					text="COVID-19 Statistics"
					onPress={() => props.navigation.navigate("canadaStats")}
				/>
			</View>
			</ImageBackground>
		</View>
  );
}

const styles2 = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: "column"
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		justifyContent: "center"
	  },
	text: {
	  color: "black",
	  fontSize: 42,
	  fontWeight: "bold",
	  textAlign: "center",
	}
  });
