define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );
	var PayeeView = require( 'app/js/views/payee' );
	var tmplPayees = require( 'tmpl!app/templates/payees' );
	
	var PayeesView = Marionette.CollectionView.extend({
		template: tmplPayees
		, itemView: PayeeView
		, itemViewContainer: '.payees-list'
	});

	return PayeesView;
} );