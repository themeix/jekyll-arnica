(function ($) {
    "use strict";

    $(document).ready(function () {
        $(".ar-post-item").slice(0, 10).show();
        $(".loadmore-cat, .loadmore-tag, .loadmore-au, .ar-loadmore").on("click", function (e) {
            e.preventDefault();
            $(".ar-post-item:hidden").slice(0, 10).slideDown();
            if ($(".ar-post-item:hidden").length == 0) {
                $(".loadmore-cat, .loadmore-tag, .loadmore-au, .ar-loadmore").text("No More Posts").addClass("noContent");
            }
        });

    });
})(jQuery);