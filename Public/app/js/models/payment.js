define( function( require ) {
	'use strict';

	var moment = require( 'moment' );

	var BaseModel = require( 'common/js/models/base-model' );
	
	var Payment = BaseModel.extend({
		defaults: {
			dueDate: moment()
			, amount: 0
			, isRecurring: false
			, frequency: 'once'
			, repeat: 0
		}
	});

	return Payment;
} );