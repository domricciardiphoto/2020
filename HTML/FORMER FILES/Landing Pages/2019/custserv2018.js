$(document).ready(function () {

    $('.matrix-info').each(function () {
        $(this).append('<div class="theX">+</div>');
        $(this).children('.theX').show();
    });
    $('.whatiam').each(function () {
        centralContent_d3 = $(this).html();
        $(this).html('<h2>' + centralContent_d3 + '</h2>');
    });
    $('.matrix-title').each(function () {
        centralContent_d2 = $(this).html();
        $(this).html('<h3>' + centralContent_d2 + '</h3>');
    });
    $('.matrix-additional-info').each(function () {
        centralContent_d = $(this).html();
        $(this).html('<span class="text-animate">' + centralContent_d + '</span>')
    });


    $('.matrix-info').click(function() {
        if( $(this).children('.matrix-additional-info').is(':visible')   ) {
        $('.theX').html('+');
        $('.matrix-additional-info').hide() ;
        $(this).children('.matrix-additional-info').hide();
        $('.text-animate').hide()
        } else {
        $('.theX').html('+');
        $('.matrix-additional-info').hide() ;
        $(this).children('.matrix-additional-info').show();
        $(this).children('.matrix-additional-info').children('.text-animate').delay(150).fadeIn();
        $(this).children('.theX').text('-');
        }
    });

    $('.matrix-info').last().css('border', 'none');

    $('.animate:nth-of-type(1)').delay(100).fadeIn();
    $('.animate:nth-of-type(2)').delay(500).fadeIn();
    $('.animate:nth-of-type(3)').delay(1000).fadeIn();
    $('.animate:nth-of-type(4)').delay(1500).fadeIn();
    $('.animate:nth-of-type(5)').delay(2000).fadeIn();

    setTimeout(function () {$('.animate').css('display', 'block');}, 2000);


    $('a[href*="#"]').not('[href="asdf"]').click(function (e) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname ==
            this.hostname) {
            var i = $(this.hash);
            i = i.length ? i : $("[name=" + this.hash.slice(1) + "]"), i.length && (e.preventDefault(),
                $("html, body").animate({
                    scrollTop: i.offset().top
                }, 500, function () {
                    var e = $(i);
                    return e.focus(), !e.is(":focus") && (e.attr("tabindex", "-1"), void e.focus())
                }))
        }
    });



});