;(function ($, window, document, undefined) {
    "use strict";

    var pluginName = "quickSlidebars",
        defaults = {
            slidebarName: null,
            bodyOpenClass: 'qs-open',
            burgerMenuSelector: '.qs-toggle',
            burgerMenuOpenClass: 'qs-toggle--open',
            hasChildSelector: '.qs-item--has-child',
            slideDuration: 200
        };

    /**
     * Constructor
     * @param element
     * @param options
     * @constructor
     */
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this._$element = $(this.element);
        this._controller = new slidebars();

        this.init();
    }

    $.extend(Plugin.prototype, {

        /**
         * jquery constructor
         */
        init: function () {
            this._controller.init();
            this._bindBurgerMenuEvent();
            this._bindCanvasEvents();
            this._bindMenuItemToggle();
        },

        /**
         * @private
         */
        _bindBurgerMenuEvent: function () {
            var self = this;
            $(this.settings.burgerMenuSelector).on('click tap', function (event) {
                event.stopPropagation();
                event.preventDefault();

                // toggle slidebar
                $(this).toggleClass(self.settings.burgerMenuOpenClass);
                $('body').toggleClass(self.settings.bodyOpenClass);
                self._controller.toggle(self.settings.slidebarName);
            });
        },

        /**
         * @private
         */
        _bindCanvasEvents: function () {
            var self = this;
            $('[canvas="container"]').on('click tap', function () {
                // close slidebar
                $(self.settings.burgerMenuSelector).removeClass(self.settings.burgerMenuOpenClass);
                $('body').removeClass(self.settings.bodyOpenClass);
                self._controller.close(self.settings.slidebarName);
            });
        },

        /**
         * @private
         */
        _bindMenuItemToggle: function () {
            var self = this;
            this._$element.on('click tap', self.settings.hasChildSelector, function (event) {

                var $menuitem = $(event.currentTarget),
                    $menuitemSiblings = $menuitem.parent().siblings();

                event.preventDefault();

                $menuitemSiblings.find('a').removeClass('open');
                $menuitemSiblings.find('ul').slideUp(self.settings.slideDuration);

                if ($menuitem.hasClass('open')) {
                    $menuitem.next('ul').slideUp(self.settings.slideDuration);
                } else {
                    $menuitem.next('ul').slideToggle(self.settings.slideDuration);
                }

                $menuitem.toggleClass('open');
            });
        }
    });

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);