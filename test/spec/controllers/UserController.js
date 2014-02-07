(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/UserController'
		],
		function( Usercontroller ) {

			describe('Usercontroller Controller', function () {

				it('should be an instance of Usercontroller Controller', function () {
					var UserController = new Usercontroller();
					expect( UserController ).to.be.an.instanceof( Usercontroller );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );