define([
    'backbone'
],
    function (Backbone) {
        'use strict';

        return Backbone.Router.extend({
            /* Backbone routes hash */
            routes: {

                'user/view': 'viewUser',
                'users/list': 'listUsers',
                'users/search' : 'search',
                'user/delete' : 'deleteUser',
                'user/add' : 'add'
            },

            view: function () {
                console.log('view user');
            },
            list: function () {
                console.log('view user');
            },
            search: function () {
                console.log('view user');
            },
            deleteUser: function () {
                console.log('view user');
            },
            add: function () {
                console.log('view user');
            }

        });
    });
