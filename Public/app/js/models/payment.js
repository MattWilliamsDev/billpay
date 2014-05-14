define( function( require ) {
	'use strict';

	var moment = require( 'moment' );

	var BaseModel = require( 'common/js/models/base-model' );
	
	var Payment = BaseModel.extend({
		defaults: {
			name: 'New Payment'
			, payeeId: 0
			, payee: 'Payee Name'
			, dueDate: moment()
			, amount: 0.00
			, isRecurring: false
			, frequency: 'once'
			, repeat: 0
			, editable: false
		}
	});

	return Payment;
} );