define( function( require ) {
	'use strict';

	var Backbone = require( 'backbone' );
	var LocalStorage = require( 'localStorage' );

	var PaymentModel = require( 'app/js/models/payment' );
	window = window || {};
	
	var PaymentsCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage( 'PaymentsCollection' )
		, model: PaymentModel
	});

	return PaymentsCollection;
} );