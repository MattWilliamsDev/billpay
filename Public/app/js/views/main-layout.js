define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var global = require( 'common/js/globals' );

	var Payment = require( 'app/js/models/payment' );
	var PaymentsCollection = require( 'app/js/models/payments' );
	var PaymentsView = require( 'app/js/views/payments' );
	var tmplMainLayout = require( 'tmpl!app/templates/main-layout' );
	window = window || {};
	
	var MainLayout = Marionette.Layout.extend({
		template: tmplMainLayout
		, className: 'app-container'
		, regions: {
			content: '.content'
		}
		, initialize: function( options ) {
			this.app = options.app;
			this.model = options.model;
			this.bootstrapData = window.getTempData();
			this.parseBootstrapData();
		}
		, onRender: function() {
			// console.log( 'attributes', this.model.attributes );
			this.content.show( new PaymentsView({
				collection: this.model.get( 'payments' )
		 	}));
		}
		, parseBootstrapData: function() {
			var payments = [];
			var payment;
			_.each( this.bootstrapData.data, function( item, index ) {
				console.log( 'bootstrapped item', item );
				payment = new Payment( item );
				payments.push( payment );
			});
			this.payments = new PaymentsCollection( payments );
			this.model.set( 'payments', this.payments );
		}
	});

	return MainLayout;
} );