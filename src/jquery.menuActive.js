(function($) {
    $.fn.menuActive = function(options) {
        var defauts = {
            homeFirst: false,
            fullUrl: false,
            find: 'a',
            attribute: 'href',
            parent: false,
            className: 'active'
        };

        var o = $.extend(defauts, options);

        var url = window.location.pathname;
        if(o.fullUrl) {
            url = window.location.href;
        }

        var _this = this;
        var checkString;

        // now grab every link from the navigation
        $(_this).find(o.find).each(function(index) {
            // and test its href against the url pathname
            checkString = url.match($(this).attr('href'));
            if ((checkString != null && $(this).attr('href') != '/') || (url == $(this).attr('href'))) {
                $(this).addClass(o.className);

                if(index > 0 && o.homeFirst) {
                    $(_this).find(o.find).first().removeClass(o.className);
                }
            }
        });
    };
})(jQuery);
