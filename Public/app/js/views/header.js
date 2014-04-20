define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var HeaderItemView = require( 'app/js/views/header-item' );
	var tmplHeader = require( 'tmpl!app/templates/header' );
	
	var HeaderView = Marionette.CompositeView.extend({
		template: tmplHeader
		, className: 'header'
		, itemView: HeaderItemView
		, itemViewContainer: '.nav'
	});

	return HeaderView;
} );