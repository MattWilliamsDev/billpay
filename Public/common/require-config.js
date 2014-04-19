requirejs.config({
	baseUrl: '/',
	waitSeconds: 60,
	paths: {
		// APP PATHS
		app: 'app',
		
		// VENDOR PATHS (just to show you exactly what we have set up)
		backbone: 'bower_components/backbone/backbone',
		underscore: 'bower_components/underscore/underscore',
		jquery: 'bower_components/jquery/dist/jquery',
		json2: 'bower_components/json2/json2',
		marionette: 'bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
		'backbone.wreqr': 'bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
		'backbone.babysitter': 'bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
		text: 'bower_components/requirejs-text/text',
		handlebars: 'bower_components/handlebars/handlebars',
		moment: 'bower_components/moment/min/moment-with-langs'
	},
	shim: {
		'backbone': {
			deps: [ 'underscore', 'jquery', 'json2' ],
			exports: 'Backbone'
		},
		'jquery': {
			exports: '$'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	}
});
