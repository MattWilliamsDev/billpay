define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var PaymentView = require( 'app/js/views/payment' );
	var tmplPaymentsView = require( 'tmpl!app/templates/payments' );
	
	var PaymentsView = Marionette.CompositeView.extend({
		template: tmplPaymentsView
		, className: 'payments-collection'
		, itemView: PaymentView
		, itemViewContainer: '.payment-details'
		, initialize: function( options ) {
			this.collection = options.collection;
			// this.listenTo( this.collection, 'change', this.render );
		}
	});

	return PaymentsView;
} );