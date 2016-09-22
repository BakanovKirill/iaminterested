/**
 * Created with PyCharm.
 * User: feanor
 * Date: 8/9/13
 * Time: 2:10 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main.html'

], function ($, _, Backbone, mainTpl) {

    return MainView = Backbone.View.extend({
        el: $("#container"),
        template: _.template(mainTpl),
        events: {
            'click .js-contact': 'showForm'
        },

        initialize: function (options) {
            this.listenTo(this.model, 'reset', this.render);
        },

        render: function (e) {
            var tpl = this.template({
                products: this.model.get('products')
            });
            this.$el.html(tpl);
            this.$el.show();
        },
        showForm: function(e){
            this.trigger('showForm')
        }
    });
});