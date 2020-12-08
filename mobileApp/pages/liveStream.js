
import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Button from "../components/button";
import styles from '../styles/globalStyles';
import {Video} from 'expo-av'; 
import Card from "../components/card";
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import VideoPlayer from 'expo-video-player'

export default function liveStream(props) {
  return (
    <View style = {styles.container}>
      <Image source={{ uri: "https://storage.googleapis.com/umarbucket512/fileframes" }} style={styles2.image} />
    </View>
  );
}
const styles2 = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20, 
    fontWeight: "bold" 
  },
  image: {
    justifyContent: 'center',
     alignSelf: 'center',
     width: 300,
     height: 300,
     resizeMode: "contain",
  },
  cases:{
    color: "red"
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
 },
});