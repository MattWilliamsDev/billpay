define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var PaymentView = require( 'app/js/views/payment' );
	var tmplPayee = require( 'tmpl!app/templates/payee' );
	
	var PayeeView = Marionette.CompositeView.extend({
		template: tmplPayee
		, tagName: 'dt'
		, className: 'payment-list'
		, itemView: PaymentView
		, itemViewContainer: '.payments'
		, ui: {
			addPayment: '.add-payment'
		}
		, events: {
			'click @ui.addPayment': 'addPayment'
		}
		, initialize: function( options ) {
			this.collection = options.collection || options.payments || new Backbone.Collection();
			this.model = options.model;
		}
	});

	return PayeeView;
} );