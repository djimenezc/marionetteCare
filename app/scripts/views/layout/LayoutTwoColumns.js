define([
    'backbone',
    'hbs!tmpl/layout/LayoutTwoColumns_tmpl'
],
    function (Backbone, LayouttwocolumnsTmpl) {
        'use strict';

        /* Return a Layout class definition */
        return Backbone.Marionette.Layout.extend({

            initialize: function () {
                console.log('initialize a Layouttwocolumns Layout');
            },

            template: LayouttwocolumnsTmpl,


            /* Layout sub regions */
            regions: {},

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {},

            /* on render callback */
            onRender: function () {
            }
        });

    });
