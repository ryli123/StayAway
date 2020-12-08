import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";

//pages
import Welcome from "../pages/welcome";
import samplePage1 from "../pages/samplePage1"; 
import samplePage2 from "../pages/samplePage2"; 
import apiTest from "../pages/apiTest"; 
import liveStream from "../pages/liveStream"; 
import liveStreamMux from "../pages/liveStreamMux"; 
import newsPage from "../pages/newsPage";
import articleDetails from "../pages/articleDetails";
import webStream from "../pages/webStream";
import canadaStats from "../pages/canadaStats";

const screens = {
    Welcome: {
        screen: Welcome,
	},
	samplePage1: {
        screen: samplePage1,
	},
	samplePage2: {
		screen: samplePage2,
	},
	apiTest: {
		screen: apiTest,
	},
	liveStream :{
		screen: liveStream,
	},
	liveStreamMux :{
		screen: liveStreamMux,
	},
	newsPage: {
		screen: newsPage,
	},
	articleDetails: {
		screen: articleDetails,
	},
	webStream: {
		screen: webStream,
	},
	canadaStats: {
		screen: canadaStats,
	}
};

const mainStack = createStackNavigator(screens, {
	headerMode: "none",
	navigationOptions: {
		headerVisible: false,
		gesturesEnabled: false,
	},
});

export default createAppContainer(mainStack);