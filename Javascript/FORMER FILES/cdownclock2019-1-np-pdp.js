





desktop_img_pdp = '/images/promos/dotd-1200x100-np-pdp.png',
mobile_url_pdp = '/images/promos/dotd-720x410-np-pdp.png',
url_pdp = "/browse?Ntt="+$('#clockcontainer').attr('data'),
alt_and_title_pdp = 'Click Here for' + $('#clockcontainer').attr('data')
window.addEventListener("DOMContentLoaded", function () {   
    ! function (e) {

$(window).load(function() {
    var linkElem = document.createElement('link');
    document.getElementsByTagName('head')[0].appendChild(linkElem);
    linkElem.rel = 'stylesheet';
    linkElem.type = 'text/css';
    linkElem.href = '/images/promos/cdownclock2019-np-pdp.css'; 


    $('#clockcontainer').html('<div class="main_container-d"> <div id="b1" class="whitebox"></div><div class="clock_dots">:</div><div id="b2" class="whitebox"></div><div class="clock_dots">:</div><div id="b3" class="whitebox"></div></div>');

    $('#clockcontainer').wrap('<a title="'+alt_and_title_pdp+'" alt="'+alt_and_title_pdp+'" href="'+url_pdp+'"></a>')
    
    function sizer() {
    $('#clockcontainer').fadeIn()
    }
    
            $("#url-cc").attr("href", url_pdp), $("#url-cc").attr("alt", alt_and_title_pdp), $("#url-cc").attr("title", alt_and_title_pdp), livedate = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate() + 1);
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


            })

        }(jQuery)
    });