import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Button from "../components/button";
import styles from '../styles/globalStyles';
import {Video} from 'expo-av'; 
import Card from "../components/card";
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import VideoPlayer from 'expo-video-player'

export default function webStream(props) {
  return (
      <View style = {styles.container}>
    <Video
  source={{ uri: 'https://storage.cloud.google.com/umarbucket512/hottubfinalloop.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="contain"
  shouldPlay
  isLooping
  style={{ width: "100%", height: "100%", alignSelf: 'center' }}
/>
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