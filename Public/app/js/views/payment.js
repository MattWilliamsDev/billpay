define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var PaymentModel = require( 'app/js/models/payment' );
	var tmplPayment = require( 'tmpl!app/templates/payment' );
	
	var PaymentView = Marionette.ItemView.extend({
		template: tmplPayment
		, initialize: function( options ) {
			this.model = options.model || new PaymentModel();
		}
	});

	return PaymentView;
} );