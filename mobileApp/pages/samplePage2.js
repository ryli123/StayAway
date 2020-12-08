import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Button from "../components/button";
import styles from '../styles/globalStyles';

export default function samplePage2(props) {
  return (
    <View style={styles.container}>
		<View style={styles.textContainer}>
				<Text style={styles.text}>Sample Page 2</Text>
		</View>
	</View>
  );
}
