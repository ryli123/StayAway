import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Card from "../components/card";
import styles from '../styles/globalStyles';
import styles2 from '../styles/cardStyles'; 
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import VideoPlayer from 'expo-video-player'

export default function liveStreamMux(props) {
  return (
    <View style = {styles.container}>
      <VideoPlayer
    videoProps={{
    shouldPlay: true,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri: 'https://storage.googleapis.com/umarbucket512/video.mp4',
    },
  }}
/>
  </View>
  );
}

