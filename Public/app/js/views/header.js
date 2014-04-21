define( function( require ) {
	'use strict';

	var Backbone = require( 'backbone' );

	var HeaderItemView = require( 'app/js/views/header-item' );
	var tmplHeader = require( 'tmpl!app/templates/header' );
	
	var HeaderView = Marionette.CompositeView.extend({
		template: tmplHeader
		, className: 'header'
		, itemView: HeaderItemView
		, itemViewContainer: '.nav'
		, initialize: function( options ) {
			this.collection = options.collection || new Backbone.Collection()
		}
	});

	return HeaderView;
} );