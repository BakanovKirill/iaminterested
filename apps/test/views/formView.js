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
    'text!templates/form.html'

], function ($, _, Backbone, formTpl) {

    return FormView = Backbone.View.extend({
        el: $("#container"),
        template: _.template(formTpl),
        initialize: function (options) {
            //this.el
        },

        render: function (e) {
            tpl = this.template({});
            this.$el.html(tpl);
        },
        show: function (e) {
            this.$el.show();
        }
    });
});