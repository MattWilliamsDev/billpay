define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var PaymentModel = require( 'app/js/models/payment' );
	var tmplPayment = require( 'tmpl!app/templates/payment' );
	
	var PaymentView = Marionette.ItemView.extend({
		template: tmplPayment
		, templateHelpers: function() {
			return {
				frequencyOptions: this.frequencyOptions
			};
		}
		, tagName: 'tr'
		, ui: {
			name: '.payment-name'
			, amount: '.payment-amount'
			, dueDate: '.payment-due-date'
			, isRecurring: '.is-recurring'
			, count: '.count'
			, frequency: '.frequency'
			, saveBtn: '.save'
			, editBtn: '.edit'
		}
		, events: {
			'click @ui.editBtn': 'makeEditable'
			, 'click @ui.saveBtn': 'savePayment'
			, 'click @ui.isRecurring': 'setRecurring'
			, 'change @ui.dueDate': 'setDueDate'
			, 'change:@ui.name change:@ui.amount change:@ui.count change:@ui.frequency': 'updateAttribute'
		}
		, initialize: function( options ) {
			console.log( 'payment options', options );
			this.model = options.model;

			this.frequencyOptions = [
				'daily'
				, 'monthly'
				, 'yearly'
			];

			this.listenTo( this.model, 'change', this.render );
		}
		, makeEditable: function( $event ) {
			if ( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
			}
			this.model.set( 'editable', true );
		}
		, makeDisabled: function( $event ) {
			if ( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
			}
			this.model.set( 'editable', false );
		}
		, savePayment: function( $event ) {
			if ( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
			}
			// this.model.set();
			this.model.save();
			this.makeDisabled();
		}
		, setDueDate: function( $event ) {
			if ( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
			}
			this.model.set( 'dueDate', this.ui.dueDate.val() );
		}
		, setRecurring: function( $event ) {
			if ( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
			}
			this.model.set( 'isRecurring', this.ui.isRecurring.prop( 'checked' ) );
		}
		, updateAttribute: function( $event ) {
			console.log( 'update', $event, arguments );
		}
	});

	return PaymentView;
} );