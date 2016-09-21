// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'models/product',
    'views/mainView',
    'views/formView',
    'views/successView'

], function ($, _, Backbone, Product, MainView, FormView, SuccessView) {

    var TestAppRouter = Backbone.Router.extend({

        routes: {
            // Define some URL routes
            'form': 'showForm',
            'success': 'showSuccess',
            // Default
            '*actions': 'index'
        },

        initialize: function () {
            this.title = document.title;
        },

        index: function () {
            document.title = this.title;
            var mainView = new MainView({model: new Product()});
            mainView.model.fetch();
            // this.listenTo(mainView, 'showForm', this.appendFormView);
        },

        // appendFormView: function () {
        //     this.navigate('form', {trigger:true})
        // },

        showForm: function () {
            var formView = new FormView();
            formView.render();
        },
        showSuccess: function () {
            var successView = new SuccessView();
            successView.render();
        }
    });
    return new TestAppRouter()
});

