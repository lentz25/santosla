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

function test() {
    console.log(document.getElementsByClassName("prices"));
}