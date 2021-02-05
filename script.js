$(document).ready(() => {
    
    // fade in images
    $(".thumbnail").click((evt) => {
        $("#main-image").attr("src", evt.target.src).hide().fadeIn(250);
    })

    // thumbnails change opacity to 0.6 on mousenter
    $(".thumbnail").on("mouseenter", (evt) => {
        $(evt.currentTarget).css("opacity", "0.6");
    })

    // thumbnails change opacity to 1 on mouseleave
    $(".thumbnail").on("mouseleave", () => {
        $(".thumbnail").css("opacity", "1.0");
    })

    // thumbnails bounce on hover
    $(".thumbnail").hover(
        evt => $(evt.currentTarget).stop(true).animate({top: 5}, "fast"),
        evt => $(evt.currentTarget).stop(true).animate({top: 0}, "fast"),

    )


});    