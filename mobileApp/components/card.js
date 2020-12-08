
import React from "react";
import { View } from "react-native";
import styles from "../styles/cardStyles";

export default function Card(props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>{props.children}</View>
		</View>
	);
}
