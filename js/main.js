$(document).ready(parallax);

function parallax() {
    var parallax = $(".club-parallax-slide")[0];
    var speed = -0.3;

    window.onload = function () {
        var windowYOffset = window.pageYOffset - 400;
        var elBackgroundPos = "50% " + (windowYOffset * speed) + "px";
        if (parallax !== undefined)
            parallax.style.backgroundPosition = elBackgroundPos;
    };
    window.onscroll = function () {
        var windowYOffset = window.pageYOffset - 400;
        var elBackgroundPos = "50% " + (windowYOffset * speed) + "px";
        if (parallax !== undefined)
            parallax.style.backgroundPosition = elBackgroundPos;
    };
}

$(document).ready(function () {
    $('.carousel').carousel();
    $('.slider').slider();
    $('.parallax').parallax();
    fixedBar();
});

function initMap() {
    var uluru = {lat: -23.60874, lng: -46.68876};
    var map = new google.maps.Map(document.getElementById('footer-map'), {
        scrollwheel: false,
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function initMapLocal() {
    var uluru = {lat: -23.60874, lng: -46.68876};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function fixedBar() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('.nav-container').addClass('navbar-fixed');
            $('.header-container').addClass('height-adjuster');
        }
        if ($(window).scrollTop() <= 150) {
            $('.nav-container').removeClass('navbar-fixed');
            $('.header-container').removeClass('height-adjuster');
        }
    });
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};