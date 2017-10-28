// I am recreating the index.js file originally given with this starter app. I 
// am trying to use mocha and chai to test drive the dev of the app while wiring
// everything together. I hope this will help me understand what is going on 
// under the hood.

'use strict';

// INITIALISING THE APP
// Let's create an object called appState where we will list all of the items 
// our app will show and display.

const appState={
	foodList:[],
	showFoodList:true
};

var  initialiseCheesecakePage = {

	initialise : function(){
		return null;
	}
};

module.exports = {

	appState : appState,
	initialiseCheesecakePage : initialiseCheesecakePage
};
