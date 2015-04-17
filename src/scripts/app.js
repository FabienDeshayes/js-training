define(function(require) {
	'use strict';

	// dependencies
	var user = require('models/user');

	// caching the dom element so we only access it once
	var body = document.getElementsByTagName('body')[0];

	return {
		initialize: function() {
		var greetings = 'Hello ' + user.getName();
			body.textContent = greetings;
		}
	};
});