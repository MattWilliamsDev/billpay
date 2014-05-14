define( function( require ) {
	'use strict';

	var BaseModel = require( 'common/js/models/base-model' );
	
	var Payee = require( 'app/js/models/payee' );
	var Payment = require( 'app/js/models/payment' );

	var ApplicationModel = BaseModel.extend({});

	return ApplicationModel;
} );