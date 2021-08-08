function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function siteLogoClick() {
    window.location = "https://photo.santosla.com";
}

$(window).resize(function() {
    var container_width = $('#pageContainer').width();
    $('#pageContainer').html('<div class="fb-page" data-href="https://www.facebook.com/facebook" data-width="' + container_width + '" data-height="250" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
    FB.XFBML.parse();
});

function changeFBPagePlugin(width, height, url) {

    if (!isNaN(width) && !isNaN(height)) {
        $(".fb-page").attr("data-width", width).attr("data-height", height);
    }
    if (url) {
        $(".fb-page").attr("data-href", url);
    }
    FB.XFBML.parse();
}