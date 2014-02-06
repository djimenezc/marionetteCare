(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/router-person'
		],
		function( RouterPerson ) {

			describe('RouterPerson Router', function () {

				it('should be an instance of RouterPerson Router', function () {
					var router-person = new RouterPerson();
					expect( router-person ).to.be.an.instanceof( RouterPerson );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );