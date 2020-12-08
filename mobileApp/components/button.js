import styles from "../styles/globalStyles";
import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

export default function button({ text, onPress }) {
	return (
		<View>
			<TouchableOpacity style={styles.loginButton} onPress={onPress}>
				<Text style={styles.text}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}