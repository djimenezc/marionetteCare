(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/UserRouter'
		],
		function( Userrouter ) {

			describe('Userrouter Router', function () {

				it('should be an instance of Userrouter Router', function () {
					var UserRouter = new Userrouter();
					expect( UserRouter ).to.be.an.instanceof( Userrouter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );