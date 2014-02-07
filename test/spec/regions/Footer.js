(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/Footer'
		],
		function( Footer ) {

			describe('Footer Region', function () {

				it('should be an instance of Footer Region', function () {
					var Footer = new Footer();
					expect( Footer ).to.be.an.instanceof( Footer );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );