define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var tmplMainLayout = require( 'tmpl!app/templates/main-layout' );
	
	var MainLayout = Marionette.Layout.extend({
		template: tmplMainLayout
		, className: 'app-container'
		, regions: {
			content: '.content'
		}
		, initialize: function( options ) {
			this.app = options.app;
			this.model = options.model;
		}
	});

	return MainLayout;
} );