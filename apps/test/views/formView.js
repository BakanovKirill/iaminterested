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
            var tpl = this.template({});
            this.$el.html(tpl);
            // insert today date for default value
            this.$el.find('input#date')[0].valueAsDate = new Date()
        },
        show: function (e) {
            this.$el.show();
        }
    });
});