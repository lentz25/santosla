function mobileMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
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

// Slideshow

var slideIndex = 1;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    $('.mySlides').eq(slideIndex - 1).css('display', 'block')
    setTimeout(carousel, 3000); // Change image every 3 seconds
}

// Gallery

function gallery(album, count) {
    for (var x = 2; x < count + 1; x += 2) {
        var left = document.createElement('img')
        var right = document.createElement('img')
        left.src = "./images/" + album + "/" + (x - 1) + ".jpg"
        right.src = "./images/" + album + "/" + x + ".jpg"
        $('.left-' + album + '-gallery').append(left)
        $('.right-' + album + '-gallery').append(right)
    }
}

// Mouse over on services
$(document).ready(function() {
    $("#services div").hover(
        function() {
            $("h1", this).css("top", "0")
            $("ul", this).css("display", "list-item")
    },
        function() {
            $("h1", this).css("top", "40%")
            $("ul", this).css("display", "none")
    });
});