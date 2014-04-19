define(function( require ) {
	'use strict';

	// Vendor
	var $                = require( 'jquery' );
	var _                = require( 'underscore' );
	var Backbone         = require( 'backbone' );
	var Marionette       = require( 'marionette' );
	var Bootstrap		 = require( 'bootstrapjs' );
	
	// App
	var Controller       = require( 'app/js/routing/controller' );
	var Router           = require( 'app/js/routing/router' );
	
	var ApplicationModel = require( 'app/js/models/application' );
	var MainLayout       = require( 'app/js/views/main-layout' );

	var app = new Marionette.Application();

	app.addRegions({
		body: '#body'
	});

	app.addInitializer(function() {
		// Create the router
		app.router = new Router({
			controller: new Controller( app )
		});

		app.model = new ApplicationModel();

		app.layout = new MainLayout({
			model: app.model
			, app: app
		});

		app.body.show( app.layout );

		Backbone.history.start({
			pushState: false
			, root: '/'
		});
	});

	return app;
});