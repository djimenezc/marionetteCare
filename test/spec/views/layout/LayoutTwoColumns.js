(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/LayoutTwoColumns'
		],
		function( Layouttwocolumns ) {

			describe('Layouttwocolumns Layout', function () {

				it('should be an instance of Layouttwocolumns Layout', function () {
					var LayoutTwoColumns = new Layouttwocolumns();
					expect( LayoutTwoColumns ).to.be.an.instanceof( Layouttwocolumns );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );