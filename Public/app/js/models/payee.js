define( function( require ) {
	'use strict';

	var BaseModel = require( 'common/js/models/base-model' );
	
	var Payee = BaseModel.extend({
		defaults: {
			name: 'New Payee'
			, account: null
			, weblink: 'Web Pay URL'
			, username: 'username'
		}
	});

	return Payee;
} );