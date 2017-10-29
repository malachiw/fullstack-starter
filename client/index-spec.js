// index-spec.js
// Tests for the index.js file. 
//
'use strict';
var expect = require('chai').expect;
var Index = require('./index.js');

// Let's make sure the index.js exists.
describe('index.js', function() {
	it('should exist', function(){
		expect(Index).to.not.be.undefined;
	});
});

// We need to intialise by creating an object so let's make sure the object 
// exists.

describe('appState', function(){
	it('should exist', function(){
		//var expected = {};
		var actual = Index.appState;
		expect(actual).to.not.be.undefined;
	});
});

describe('appState.foodList', function(){
	it('should exist', function(){
		var actual = Index.appState.foodList;
		expect(actual).to.not.be.undefined;
	});
});

describe('appState.showFoodList', function(){
	it('should start set to true', function(){
		var actual = Index.appState.showFoodList;
		expect(actual).to.be.true;
	});
});

describe('initialiseCheesecakePage', function(){
	it('should be a function and null', function(){
		var actual = Index.initialiseCheesecakePage;
		expect(actual, 'Fails because actual is ' + actual).to.be.null;
	});
});
