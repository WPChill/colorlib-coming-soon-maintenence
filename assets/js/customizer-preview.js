(function ($) {

    //Page heading preview
    wp.customize('colorlib_coming_soon_page_heading', function (text) {
        text.bind(function (textValue) {
            jQuery('#colorlib_coming_soon_page_heading').html(textValue);
        });
    });

    //Page content preview
    wp.customize('colorlib_coming_soon_page_content', function (text) {
        text.bind(function (textValue) {
            jQuery('#colorlib_coming_soon_page_content').html(textValue);
        });
    });

    //Page footer preview
    wp.customize('colorlib_coming_soon_page_footer', function (text) {
        text.bind(function (textValue) {
            jQuery('#colorlib_coming_soon_page_footer').html(textValue);
        });
    });

    

})(jQuery);

