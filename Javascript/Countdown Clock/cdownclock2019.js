

window.addEventListener("DOMContentLoaded", function () {   
    ! function (e) {

$('#clockcontainer').html('<div class="main_container-d"> <div id="b1" class="whitebox"></div><div class="clock_dots">:</div><div id="b2" class="whitebox"></div><div class="clock_dots">:</div><div id="b3" class="whitebox"></div></div>');

$('#clockcontainer').wrap('<a title="'+alt_and_title+'" alt="'+alt_and_title+'" href="'+url+'"></a>')

        function sizer() {
    if ($(window).width() < 769) {$("#clockcontainer").css('min-height' ,  $('#clockcontainer').width() - ($('#clockcontainer').width() * .42))}else {}
    $('#clockcontainer').fadeIn()
}

        e("#url-cc").attr("href", url), e("#url-cc").attr("alt", alt_and_title), e("#url-cc").attr("title", alt_and_title), e(window).width() < 721 ?  e("#clockcontainer").css("background-image", "url(" + mobile_url + ")") : e("#clockcontainer").css("background-image", "url(" + desktop_img + ")"), e(window).resize(function () {
            e(window).width() < 721 ? e("#clockcontainer").css("background-image", "url(" + mobile_url + ")").css('min-height' , $('#clockcontainer').width() - ($('#clockcontainer').width() * .42)-5) : e("#clockcontainer").css("background-image", "url(" + desktop_img + ")").css('min-height' , $('#clockcontainer').width() - ($('#clockcontainer').width() * .91)+3)
        }), livedate = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate() + 1);
        var t = new Date(livedate).getTime(),
            n = setInterval(function () {
                var e = (new Date).getTime(),
                    a = t - e,
                    i = (Math.floor(a / 864e5), Math.floor(a % 864e5 / 36e5)),
                    o = Math.floor(a % 36e5 / 6e4),
                    c = Math.floor(a % 6e4 / 1e3);
                document.getElementById("b3").innerHTML = i + '<div class="wh">Hours</div>', document.getElementById("b2").innerHTML = o + '<div class="wh">Minutes</div>', document.getElementById("b1").innerHTML = c + '<div class="wh">Seconds</div>', a < 0 && (clearInterval(n), $('.whitebox').html('0'))
            }, 1e3)

            setTimeout(sizer, 500)
    }(jQuery)
});

