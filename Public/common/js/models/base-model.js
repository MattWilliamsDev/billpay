define( function( require ) {
	'use strict';

	var Backbone = require( 'backbone' );

	var BaseModel = Backbone.Model.extend( {
		// The getDeep method is used to retrive a property inside a 
		// an object on a model. It will continue to recurse into an unlimited
		// level of subobjects until the property is found. If at any point a property
		// isn't part of an object this will return null.
		getDeep: function( dottedAttr ) {
			var attributeList = dottedAttr.split('.');
			var attr = attributeList.shift();
			var obj = this.attributes;

			while ( Boolean( attr ) ) {
				if ( obj.hasOwnProperty( attr ) ) {
					obj = obj[ attr ];
					attr = attributeList.shift();
				} else {
					obj = null;
					attr = false;
				}
			}

			return obj;
		}
	} );

	return BaseModel;
});