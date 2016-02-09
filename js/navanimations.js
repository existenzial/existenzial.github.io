$(document).ready(function() {
    //hide blog after DOM loads
    $("#blog-posts").hide();
    $("#blog-button-hide").hide();
    //setup desc/asc arrow animations to show/hide blog
    /*$(".fa-sort-desc").on("mouseover", function(){
        $(this).effect("bounce", {times:2}, 500);
        $(this).on("click", function(){
            $(this).animate({opacity:.6},500,function(){
                $(this).animate({opacity:1},500)
            });
        });
    });*/

    $(".fa-sort-desc").on("mouseenter", function(e) {
        var el = $(this);
        if (!el.data("bnc")) el.effect("bounce", {
            direction: 'up',
            distance: 10,
            times: 1
        });
        el.data("bnc", e.type == "mouseenter" ? true : false);
    });

    $(".fa-sort-asc").on("mouseenter mouseleave", function(e) {
        var el = $(this);
        if (!el.data("bnc")) el.effect("bounce", {
            direction: 'up',
            distance: 10,
            times: 1
        });
        el.data("bnc", e.type == "mouseenter" ? true : false);
    });

    $(".fa-sort-desc").on("click", function() {
        $("#blog-posts").slideDown("slow", function() {
            $(".fa-sort-desc").hide();
            $("#blog-button-hide").show();
        });
    });

    $("#blog-button-hide").on("click", function() {
        $("#blog-posts").slideUp("slow", function() {
            $("#blog-button-hide").hide();
            $(".fa-sort-desc").show();
        });
    });

    //Animate Footer On Scroll
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $("#footer").addClass("show");
        } else {
            $("#footer").removeClass("show");
        }
    });
});