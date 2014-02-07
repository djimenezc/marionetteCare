(function() {
	'use strict';

	var root = this;

	root.define([
		'views/UsersView'
		],
		function( Usersview ) {

			describe('Usersview View', function () {

				it('should be an instance of Usersview View', function () {
					var UsersView = new Usersview();
					expect( UsersView ).to.be.an.instanceof( Usersview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );