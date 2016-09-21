define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    return Condition = Backbone.Model.extend({
        data: {
            "name": "Product",
            "products": {
                "alpha": {
                    "description": "Alpha product description",
                    "display_name": "Product: Alpha",
                    "id": "alpha"
                },
                "beta": {
                    "description": "Beta product description",
                    "display_name": "Product: Beta",
                    "id": "beta"
                },
                "zeta": {
                    "description": "Zeta product description",
                    "display_name": "Product: Zeta",
                    "id": "zeta"
                }
            }
        },

        fetch: function (options) {
            options = options ? _.clone(options) : {};

            if (!this.set(this.data, options)) {
                return false;
            }
            if (options.success) {
                options.success(this, {});
            }
            this.trigger('reset')
        },

        save: function (options) {
            options = options ? _.clone(options) : {};

            if (options.success) {
                options.success(this, {});
            }
            return {};
        }
    });

});