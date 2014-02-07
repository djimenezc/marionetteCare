define([
	'backbone',
	'views/item/UserView'
],
function( Backbone, Userview  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a Usersview CollectionView");
		},
		
    	itemView: Userview,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
