define( function( require ) {
	'use strict';

	var $ = require( 'jquery' );
	var Backbone = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var global = require( 'common/js/globals' );
	window = window || {};
	
	var Controller = Marionette.Controller.extend({
		initialize: function( app ) {
			this.app = app;
		}
		, index: function( view ) {
			var data = window.getTempData();
			global.data = data;
			console.log( 'New View', view );
		}
	});

	return Controller;
} );