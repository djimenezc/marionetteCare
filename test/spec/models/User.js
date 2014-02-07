(function() {
	'use strict';

	var root = this;

	root.define([
		'models/User'
		],
		function( User ) {

			describe('User Model', function () {

				it('should be an instance of User Model', function () {
					var User = new User();
					expect( User ).to.be.an.instanceof( User );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );