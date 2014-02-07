(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/LeftSidebar'
		],
		function( Leftsidebar ) {

			describe('Leftsidebar Region', function () {

				it('should be an instance of Leftsidebar Region', function () {
					var LeftSidebar = new Leftsidebar();
					expect( LeftSidebar ).to.be.an.instanceof( Leftsidebar );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );