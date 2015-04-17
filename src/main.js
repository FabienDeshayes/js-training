require.config({
	baseUrl: 'scripts'
});

require(['app'], function(app) {
	'use strict';
	
	app.initialize();
});