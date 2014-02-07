(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/Header'
		],
		function( Header ) {

			describe('Header Region', function () {

				it('should be an instance of Header Region', function () {
					var Header = new Header();
					expect( Header ).to.be.an.instanceof( Header );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );