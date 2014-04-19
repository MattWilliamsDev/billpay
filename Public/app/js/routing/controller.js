define( function( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );
	
	var Controller = Marionette.Controller.extend({
		initialize: function( app ) {
			this.app = app;
		}
		, index: function() {}
	});

	return Controller;
} );