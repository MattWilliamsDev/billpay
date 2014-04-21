define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var PayeeCollection = require( 'app/js/models/payees' );
	var PayeeModel = require( 'app/js/models/payee' );
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
		, onRender: function() {
			var payees = [];
			_.each( this.model.get( 'payees' ), function( payee ) {
				payees.push( new PayeeModel({ model: payee }) );
			}, this );
			this.content.show( new PayeeCollection({}) );
		}
	});

	return MainLayout;
} );