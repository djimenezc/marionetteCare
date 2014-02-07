(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/UsersView'
		],
		function( Usersview ) {

			describe('Usersview Collectionview', function () {

				it('should be an instance of Usersview Collectionview', function () {
					var UsersView = new Usersview();
					expect( UsersView ).to.be.an.instanceof( Usersview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );