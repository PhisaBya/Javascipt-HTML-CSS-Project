

$(document).ready(function() {
    // preload the image for each link
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    })

    // set up the event handlers for each link
    $("#image_list a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#image").fadeOut(1000, function () {
            $("#image").attr("src", imageURL).fadeIn(1000);

        });
        // cancel the default action of the link
        evt.preventDefault();  // jQuery cross-browser method
    }); // end click

    // move the focus to the first link
    $("li: first-child a").focus();
}); // end ready




