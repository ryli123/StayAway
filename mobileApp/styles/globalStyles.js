import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
var { vw, vh } = require("../node_modules/react-native-expo-viewport-units");
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
	organizationDetailsContainer: {
		marginTop: 8,
		marginBottom: 5,
	},
	loginCenterContainer: {
		marginLeft: vw(7),
	},
	registerCenterContainer: {
		marginLeft: vw(10),
		marginRight: vw(1),
		marginVertical: vh(1),
	},
	container: {
		flex: 1,
		flexGrow:1,
		alignItems: "center",
		justifyContent: "center",
		maxHeight: height,
		height: 300,
		marginTop : vh(5),
		alignItems: 'stretch',

	},
	container2: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		maxHeight: height,
		height: "auto",
		marginTop: vh(3),
		marginRight:5,


	},
	backgroundImage: {
		flex: 1,
		resizeMode: "stretch",
		transform: [
			{ scaleY: 1.5 },
			{ scaleX: 1.5 },
			{ translateX: 0 },
			{ translateY: vh(10) },
		],
	},
	flatlistContainer: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0)",
		maxHeight: height,
		height: "auto",
		paddingBottom: vh(4),
		marginRight: vw(4),
		marginTop: vh(5),
	},
	containerOrgDesc: {
		flex: 1,
		backgroundColor: "#dab",
		alignItems: "center",
		textAlign: "center",
		justifyContent: "center",
		maxHeight: height,
		height: "auto",
	},
	textContainer: {
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		top: vh(5),
		marginLeft: vw(13),
		marginBottom: vh(13.3),
		flex: 1,
	},

	text: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
		margin: vw(2.2),
		marginVertical: vh(0),
	},
	textTitle: {
		fontWeight: "bold",
		color: "white",
		fontSize: 40,
		margin: vw(2.2),
		marginTop: vh(0),
	},
	voteSubtitle: {
		fontWeight: "bold",
		color: "white",
		fontSize: 30,
		textAlign: "center",
		margin: vw(2.2),
	},
	text2: {
		fontWeight: "bold",
		color: "black",
		fontSize: 18,
		margin: vw(2.2),
		marginVertical: 0,
		textAlign: "center",
		marginBottom: 10,
	},
	buttonContainer: {
		marginBottom: vh(13.3),
		alignItems: "center",
	},
	orgButtonContainer: {
		alignItems: "center",
	},

	loginButton: {
		marginTop: 0,
		marginHorizontal: vw(5.6),
		marginBottom: vh(4.4),
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#66C",
		padding: 20,
		elevation: 10,
		borderRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowOffset: { width: 5, height: 5 },
		width: 260,
		bottom: 0,
	},
	imageTitle: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: height * 0.025,
	},
	inputContainer: {
		marginLeft: width * 0.06,
		marginRight: width * 0.02,
	},
	videoContainer: {
		flex: 1,
        justifyContent: "center",
		alignItems: "center",
  		height: 100,
  		top: 0,
  		left: 0,
	},

	//form stuff

	formTitle: {
		fontWeight: "bold",
		color: "black",
		fontSize: 50,
		textAlign: "center",
		marginBottom: vh(2),
	},
	formTitleRegister: {
		fontWeight: "bold",
		color: "white",
		fontSize: 40,
		textAlign: "center",
	},
	formTitleCreateNew: {
		fontWeight: "bold",
		color: "black",
		fontSize: 35,
		marginBottom: vh(3),
		textAlign: "center",
	},

	formText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 20,
	},
	formTextRegister: {
		fontWeight: "bold",
		color: "white",
		fontSize: 15,
	},

	formContainer: {
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		top: vh(15),
		marginLeft: vw(3),
	},
	formContainerRegister: {
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		top: vh(10),
		marginLeft: vw(3),
		flex: 1,
		height: "auto",
		maxHeight: height,
		width: "100%",
	},

	formTextbox: {
		borderWidth: 1,
		borderColor: "white",
		color: "white",
		padding: 10,
		marginBottom: 3,
		alignItems: "center",
		maxWidth: "90%",
	},
	textboxModal: {
		borderWidth: 1,
		borderColor: "#DBD",
		padding: 10,
		fontSize: 18,
		margin: vh(2),
	},

	textbox2: {
		borderWidth: 0,
		borderColor: "white",
		borderBottomWidth: 2,
		color: "white",
		paddingVertical: 10,
		marginBottom: 3,
		minWidth: "90%",
		maxWidth: "90%",
	},

	textarea: {
		borderWidth: 1,
		borderColor: "white",
		color: "white",
		padding: 10,
		marginBottom: 3,
		minHeight: vh(10),
		maxHeight: vh(30),
		maxWidth: "90%",
		minWidth: "90%",
	},

	formComponent: {
		marginBottom: vh(1),
	},
	formTextboxes: {
		marginBottom: vh(1),
		paddingLeft: vw(6),
	},
	btnComponent: {
		marginBottom: vh(1),
		justifyContent: "center",
		alignItems: "center",
	},

	//organizations

	organizationBackgroundImage: {
		flex: 1,
		resizeMode: "contain",
		transform: [
			{ scaleY: 1.5 },
			{ scaleX: 1.7 },
			{ rotate: "325deg" },
			{ translateX: vw(-20) },
			{ translateY: vh(-1) },
		],
		position: "absolute",
		top: vh(-10),
	},
	organizationTextTitle: {
		fontWeight: "bold",
		color: "white",
		fontSize: 30,
		textAlign: "center",
		margin: vw(2.2),
		marginBottom: vh(2),
	},
	addNewBtn: {
		height: vh(8),
		width: vh(8),
		borderRadius: 100,
		backgroundColor: "#66C",

		justifyContent: "center",
		alignItems: "center",

		padding: 0,
		margin: 0,
		position: "absolute",

		bottom: vh(4),
		right: vh(4),

		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowOffset: { width: 5, height: 5 },
		flex: 1,
	},
	organizationTextContainer: {
		width: "100%",
		height: "100%",
		flex: 1,
	},
	textPlusContainer: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",

		position: "absolute",
		left: vw(0.4),
		top: vw(-1),
	},

	plus: {
		color: "white",
		fontSize: 56,
		textAlign: "center",
		textAlignVertical: "center",
	},

	modal: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	organizationText: {
		fontSize: 18,
		marginVertical: vw(3),
	},

	organizationTextContainer: {
		fontWeight: "bold",
		color: "white",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		top: vh(10),
		marginBottom: vh(2),
		marginLeft: vw(3),
	},

	menuView: {
		flex: 1,
		bottom: vh(-2),
		left: vh(-16),
		marginTop: 22,
		position: "absolute",
	},

	modalContentContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		height: "50%",
		padding: vw(10),
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.3,
		shadowOffset: { width: 1, height: 1 },
	},
	close: {
		position: "absolute",
		top: vh(2),
		right: vh(2),
	},
	textTitleOrgDetails: {
		textAlign: "center",
		fontWeight: "bold",
		color: "white",
		fontSize: 40,
		marginTop: vh(10),
		marginBottom: height * 0.02,
	},
	BallotTitle: {
		fontWeight: "bold",
		color: "white",
		fontSize: 28,
		textAlign: "center",
		margin: vw(2.2),
		marginTop: vh(2),
		marginBottom: 10,
	},
	OrgDescUserListTitle: {
		fontWeight: "bold",
		color: "rgba(0,0,0,0.7)",
		fontSize: 20,
		textAlign: "center",
		margin: vw(2.2),
		marginBottom: height * 0.02,
		marginTop: height * 0.002,
	},

	textSubtitleBallot: {
		fontWeight: "bold",
		color: "black",
		fontSize: 20,
		textAlign: "center",
		margin: vw(2.2),
		marginBottom: 10,
	},
	votingInfoTextWrapper: {
		textAlign: "center",
		width: "100%",
		alignItems: "center",
	},
	votingBr: {
		width: "95%",
		borderBottomColor: "grey",
		borderBottomWidth: vh(0.09),
		borderRadius: 5,
		marginTop: vh(3),
		marginBottom: vh(2),
	},
	br: {
		width: "85%",
		borderBottomColor: "grey",
		borderBottomWidth: vh(0.2),
		borderRadius: 5,
	},
	textBoxDetails: {
		backgroundColor: "rgba(255,255,255,0.8)",
		borderRadius: 1,
		padding: 20,
		marginHorizontal: 4,
		marginBottom: 30,
		marginTop: 30,
		minWidth: "95%",
		maxWidth: "95%",
	},

	//profile styles

	profileTextContainer: {
		fontWeight: "bold",
		color: "white",
		marginTop: vh(10),
		marginLeft: vw(3),
	},
	profileContainer: {
		flex: 1,
		backgroundColor: "#dab",
		alignItems: "center",
		maxHeight: height,
		height: "auto",
	},
	subTitleContainer: {
		fontWeight: "bold",
		color: "white",
		marginLeft: vw(3),
	},
	userPicContainer: {
		width: vh(11),
		height: vh(11),
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: vh(4),
		top: vh(-8),
	},
	userPic: {
		width: vh(7.15),
		height: vh(7.15),
	},
	userPicButton: {
		width: vh(7),
		height: vh(7),
	},
	userPicBtnContainer: {
		width: vh(7),
		height: vh(7),
	},

	profileText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 20,
		marginVertical: 0,
		display: "flex",
	},
	profileSubTitle: {
		fontWeight: "bold",
		color: "white",
		fontSize: 28,
		marginVertical: vh(2.2),
		display: "flex",
		alignItems: "center",
	},

	profileButton: {
		margin: vh(2),

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#66C",
		elevation: 8,
		borderRadius: 60,

		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowOffset: { width: 5, height: 5 },

		width: vh(8),
		height: vh(8),
		position: "absolute",
		top: vh(1),
		left: vh(-22),
	},
	profileTitle: {
		fontWeight: "bold",
		color: "white",
		fontSize: 30,
		textAlign: "center",
		margin: vw(2.2),
	},
	ballotTextContainer: {
		justifyContent: "center",
	},
});

export default styles;