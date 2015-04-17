define(function() {
	'use strict';

	// declaring the name as a variable here will only make it accessible to the current scope
	var name = 'Samantha';

	return {
		// This getter is the public API for your user module. You can consider the name a private property
		// of this module as it can be modified from the outside. This is one example of a "module pattern" in Javascript
		getName: function() {
			return name;
		}
	};
})