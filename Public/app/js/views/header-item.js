define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var tmplHeaderItem = require( 'tmpl!app/templates/header-item' );
	
	var HeaderItemView = Marionette.ItemView.extend({
		template: tmplHeaderItem
		, tagName: 'li'
		, className: 'header-item'
	});

	return HeaderItemView;
} );