import { StyleSheet } from "react-native";
var {
	vw,
	vh,
	vmin,
	vmax,
} = require("../node_modules/react-native-expo-viewport-units");

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		elevation: 3,
		backgroundColor: "#fff",
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "#333",
		shadowOpacity: 0.3,
		shadowRadius: 5,
		marginHorizontal: 10,
		marginBottom: 30,
		marginLeft: 20,
		marginRight:30,
		minWidth: "95%",
		maxWidth: "95%",
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 20,
	},
	textOrgTitle: {
		fontWeight: "bold",
		color: "black",
		fontSize: 20,
		marginBottom: vw(2.2),
	},
	textOrgDesc: {
		color: "#999999",
		fontSize: 15,
		marginBottom: vw(2.2),
	},
	textOrgCount: {
		color: "green",
		fontSize: 12,
	},
	icon: {
		width: vh(2.5),
		height: vh(2.5),
	},
	iconContainer: {
		width: vh(2.5),
		height: vh(2.5),
	},
});

export default styles;