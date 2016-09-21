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
    'text!templates/success.html'

], function ($, _, Backbone, formTpl) {

    return successView = Backbone.View.extend({
        el: $("#container"),
        template: _.template(formTpl),

        render: function (e) {
            tpl = this.template({});
            this.$el.html(tpl);
        },
    });
});