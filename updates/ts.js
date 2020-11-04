
    window.addEventListener('DOMContentLoaded', function() {
        (function($) {
            whereimgoing = '#listview0';
            livedata = "#section0";
            newposition = $('#listview0').position();
            mynum = 0;
            mypage = 1;
            mywhatiam = 0;
            highlight_button = 0;
            var ua = window.navigator.userAgent;
            var isIE = /MSIE|Trident/.test(ua);
           
    
            function swipedetect(a,b){var c,d,f,g,h,i,j,k=a,l=b||function(){};k.addEventListener("touchstart",function(a){var b=a.changedTouches[0];c="none",dist=0,d=b.pageX,f=b.pageY,j=new Date().getTime(),a.preventDefault()},!1),k.addEventListener("touchmove",function(a){a.preventDefault()},!1),k.addEventListener("touchend",function(a){var b=a.changedTouches[0];g=b.pageX-d,h=b.pageY-f,i=new Date().getTime()-j,i<=200&&(Math.abs(g)>=5&&Math.abs(h)<=100?c=0>g?"left":"right":Math.abs(h)>=5&&Math.abs(g)<=100&&(c=0>h?"up":"down")),l(c),a.preventDefault()},!1)}
    
            $.fn.scrollStopped = function(callback) {
          var that = this, $this = $(that);
          $this.scroll(function(ev) {
            clearTimeout($this.data('scrollTimeout'));
            $this.data('scrollTimeout', setTimeout(callback.bind(that), 650, ev));
          });
        };
        
        
            !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});
    
    
            jQuery.fn.scrollTo = function(elem, speed) {$(this).animate({scrollTop: $(this).scrollTop() - $(this).offset().top + $(elem).offset().top}, speed === undefined ? 1500 : speed);return this;};
        
        
            $('.wrapper-d').prepend('<div class="flyer_title"><div class="myname-d"> Weekly Circular for</div><div class="mypage-d">Page <span id="whatPageImOn">1</span> of <span id="myPageCount"></span></div></div>');
        
            $('.topmenu').prepend('<div class="myarrowsd left_menu"><img src="/images/promos/l2_arr_logo-2-2020.svg"/></div>').append('<div class="myarrowsd right_menu"><img src="/images/promos/r2_arr_logo-2-2020.svg"/></div>');
        
            $('.pages').wrap('<div class="flyer_content"></div>').after('<div class="see_me_at_the_bottom"><img id="down_arrow2" src="/images/promos/down_arr_logo-2-2020.svg"></div>')
        
        
            $('.pg_internal').each(function() {
            $('<div id="'+$(this).attr('id').replace('section' , 'listview')+'" class="whatiam">'+$(this).attr('data')+'</div>').insertBefore(this)
        
           mypage++
           })
           var menu_l = (100 / 7) + '%'
           $('#myPageCount').text($('.pg_internal').length)
           $('.submenu-d').each(function() {
               $(this).append('<img title="'+$(this).attr('title')+'" src="'+$(this).attr('img')+'" /><div class="submenu_title">'+$(this).attr('title')+'</div>').width(menu_l).wrap('<a class="scrollLink" data="'+$(this).attr('page')+'"></a>').fadeIn(600);
               
           })
        
         if($('.submenu-d').length > 9) {
            $('.right_menu img').fadeIn();
            $('.internal_overflow').css('width' , $('.submenu-d').css('width').replace('px' , '') * $('.submenu-d').length )
         } else {
            $('.internal_overflow , .internal_menu ').css('width' , '100%').css('max-width' , '1200px');
            $('.myarrowsd').hide()
         }
        
    
            function show_arrow_now() {
                $('.see_me_at_the_bottom').delay(600).fadeIn()
             }
            
    
                $('.scrollLink').on('click', function() {
                    $('.scrollLink').css('opacity', '1'),
                     $('.scrollLink').removeClass('imclicked'), 
                     livedata = '#section' + $(this).attr('data'), 
                     whereimgoing = '#listview' + $(this).attr('data');
                     newposition = $(whereimgoing).position()
                     addmenu = newposition.top - 80 
                     $("html").animate({scrollTop: addmenu }, 1800);
                    what_page_amI_on = parseInt($(this).attr('data')) + 1
                     $("#whatPageImOn").delay(800).text(what_page_amI_on);
                }) 
                
                $(window).resize(function() {
                    $(".submenu-d").width((100 / $(".submenu-d").length) + "%");
                    if ($('.wrapper-d').width() <= 767) {
                        $(".internal_overflow").width('250%')
                    } else {
                        $(".internal_overflow").width('175%')
                    }
                });
                var d = new Date();
                var month = [];
                month[0] = "Jan.";
                month[1] = "Feb.";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "Aug.";
                month[8] = "Sept.";
                month[9] = "Oct.";
                month[10] = "Nov.";
                month[11] = "Dec.";
                var day = [];
                day[1] = "1<span class='t_make_small'>st</span>";
                day[2] = "2<span class='t_make_small'>nd</span>";
                day[3] = "3<span class='t_make_small'>rd</span>";
                day[4] = "4<span class='t_make_small'>th</span>";
                day[5] = "5<span class='t_make_small'>th</span>";
                day[6] = "6<span class='t_make_small'>th</span>";
                day[7] = "7<span class='t_make_small'>th</span>";
                day[8] = "8<span class='t_make_small'>th</span>";
                day[9] = "9<span class='t_make_small'>th</span>";
                day[10] = "10<span class='t_make_small'>th</span>";
                day[11] = "11<span class='t_make_small'>th</span>";
                day[12] = "12<span class='t_make_small'>th</span>";
                day[13] = "13<span class='t_make_small'>th</span>";
                day[14] = "14<span class='t_make_small'>th</span>";
                day[15] = "15<span class='t_make_small'>th</span>";
                day[16] = "16<span class='t_make_small'>th</span>";
                day[17] = "17<span class='t_make_small'>th</span>";
                day[18] = "18<span class='t_make_small'>th</span>";
                day[19] = "19<span class='t_make_small'>th</span>";
                day[20] = "20<span class='t_make_small'>th</span>";
                day[21] = "21<span class='t_make_small'>st</span>";
                day[22] = "22<span class='t_make_small'>nd</span>";
                day[23] = "23<span class='t_make_small'>rd</span>";
                day[24] = "24<span class='t_make_small'>th</span>";
                day[25] = "25<span class='t_make_small'>th</span>";
                day[26] = "26<span class='t_make_small'>th</span>";
                day[27] = "27<span class='t_make_small'>th</span>";
                day[28] = "28<span class='t_make_small'>th</span>";
                day[29] = "29<span class='t_make_small'>th</span>";
                day[30] = "30<span class='t_make_small'>th</span>";
                day[31] = "31<span class='t_make_small'>st</span>";
                var n = month[d.getMonth()];
                var j = day[d.getDate()];
                var yr = d.getYear();
                $(".myname-d").append(" " + n + " " + j + " " + "2020");
    
                function contentloader(append_Products) {
                    url_to_products = $(append_Products).attr('data');
                    if (isIE) {
                        $.ajax({
                            url: '/catalog/flyerContent.jsp?' + url_to_products + '+end',
                            context: "application/json",
                            dataType: "json"
                        }).done(function(data) {
                            //appendData(data); 
                            setTimeout(function() {
                                appendData(data);
                            }, 300)
                        });
                    } else {
                        fetch('/catalog/flyerContent.jsp?' + url_to_products).then(function(response) {
                            return response.json();
                        }).then(function(data) {
                            appendData(data);
                        }).catch(function(err) {
                            console.log('error: ' + err);
                        });
                    }
    
                    function appendData(data) {
                        for (var i = 0; i < data.length; i++) {
                            var div = document.createElement("li");
                            str = data[i].relatedColorCodes 
                            res = str.split(";");
                            if (res[0] === undefined || res[0] === null || res[0] === 'undefined' || res[0] === '') {
                                color0 = ''
                            } else {
                                color0 = res[0];
                                color0 = '<li class="variant"><img data="/' + res[0].slice(0, -4) + '" src="/images/promos/' + color0.slice(-3).toLowerCase() + '.jpg"></li>';
                            }
                            if (res[1] === undefined || res[1] === null || res[1] === 'undefined' || res[1] === '') {
                                color1 = ''
                            } else {
                                color1 = res[1];
                                color1 = '<li class="variant"><img data="/' + res[1].slice(0, -4) + '" src="/images/promos/' + color1.slice(-3).toLowerCase() + '.jpg"></li>';
                            }
                            if (res[2] === undefined || res[2] === null || res[2] === 'undefined' || res[2] === '') {
                                color2 = ''
                            } else {
                                color2 = res[2];
                                color2 = '<li class="variant"><img data="/' + res[2].slice(0, -4) + '" src="/images/promos/' + color2.slice(-3).toLowerCase() + '.jpg"></li>';
                            }
                            if (res[3] === undefined || res[3] === null || res[3] === 'undefined' || res[3] === '') {
                                color3 = ''
                            } else {
                                color3 = res[3];
                                color3 = '<li class="variant"><img data="/' + res[3].slice(0, -4) + '" src="/images/promos/' + color3.slice(-3).toLowerCase() + '.jpg"></li>';
                            }
                            if (res[4] === undefined || res[4] === null || res[4] === 'undefined' || res[4] === '') {
                                color4 = ''
                            } else {
                                color4 = res[4];
                                color4 = '<li class="variant"><img data="/' + res[4].slice(0, -4) + '" src="/images/promos/' + color4.slice(-3).toLowerCase() + '.jpg"></li>';
                            }
                            div.innerHTML = '<a href="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="' + data[i].detailImg + '" alt="' + data[i].displayName + '"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">' + color0 + color1 + color2 + color3 + '</ul></div><span class="livehtmld">' + data[i].displayName + '</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>' + data[i].sku + '</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="' + data[i].sku + '" data-bv-redirect-url="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '" data-bv-ready="true"></div></div><div id="price-container-' + data[i].sku + '" class="price-container plp-price-container-js" href="' + data[i].seoLink + '"><div class="salePrice">$' + data[i].listPrice + '</div></div></div></div></a>';
                            if (data[i].regularPriceStrikeThrough === 'Yes') {
                                Savings = parseFloat(data[i].listPrice) - parseFloat(data[i].salePrice);
                                PercentOffPrice = ' (' + Math.round((parseFloat(Savings) / parseFloat(data[i].listPrice)) * 100) + '% Off)';
                                div.innerHTML = '<a href="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="' + data[i].detailImg + '" alt="' + data[i].displayName + '"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">' + color0 + color1 + color2 + color3 + '</ul></div><span class="livehtmld" >' + data[i].displayName + '</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>' + data[i].sku + '</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="' + data[i].sku + '" data-bv-redirect-url="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '" data-bv-ready="true"></div></div><div id="price-container-' + data[i].sku + '" class="price-container plp-price-container-js" href="' + data[i].seoLink + '"><div class="salePrice">$' + data[i].salePrice + '</div><div class="originalPrice">reg $' + data[i].listPrice + '</div><div class="savings">Save $' + Savings.toFixed(2) + '!' + PercentOffPrice + '</div></div></div></div></a>';
                            }
                            if (data[i].showPriceInCartOnly === 'Yes') {
                                div.innerHTML = '<a href="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="' + data[i].detailImg + '" alt="' + data[i].displayName + '" ></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">' + color0 + color1 + color2 + color3 + '</ul></div><span class="livehtmld" >' + data[i].displayName + '</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>' + data[i].sku + '</div><div class="originalPrice sub5">reg $' + data[i].listPrice + '</div><div class="priceMsg">Price Lower in Cart<span class="pcr-tooltip">?<small class="tooltip-body top center"> Why don&rsquo;t we show the price? As a retailer, we set our prices independently, but in some cases the manufacturer does not allow us to show our price until you take further action. Don&rsquo;t worry; you&rsquo;ll be able to see the price in checkout before you decide to buy it.</small></span></div></div></div></a>'
                            }
                            if (data[i].showPriceInCheckoutOnly === 'Yes') {
                                div.innerHTML = '<a href="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="' + data[i].detailImg + '" alt="' + data[i].displayName + '" ></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">' + color0 + color1 + color2 + color3 + '</ul></div><span class="livehtmld" >' + data[i].displayName + '</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>' + data[i].sku + '</div><div class="originalPrice sub5">reg $' + data[i].listPrice + '</div><div class="priceMsg">Price Lower in Checkout<span class="pcr-tooltip">?<small class="tooltip-body top center"> Why don&rsquo;t we show the price? As a retailer, we set our prices independently, but in some cases the manufacturer does not allow us to show our price until you take further action. Don&rsquo;t worry; you&rsquo;ll be able to see the price in checkout before you decide to buy it.</small></span></div></div></div></a>';
                            }
                            if ($(append_Products).hasClass('largeProduct')) {
                                div.innerHTML = '<a href="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"></div><div class="product-details-container"><div class="product-variant-container"></div><span class="livehtmld">' + data[i].displayName + '</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>' + data[i].sku + '</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="' + data[i].sku + '" data-bv-redirect-url="' + data[i].seoLink.replace('https://www.pcrichard.com', '') + '" data-bv-ready="true"></div></div><div id="price-container-' + data[i].sku + '" class="price-container plp-price-container-js" href="' + data[i].seoLink + '"><div class="salePrice">$' + data[i].listPrice + '</div></div></div></div></a>'
                            }
                            $(append_Products).append(div) 
    
                            $('.livehtmld').each(function() {
                                $(this).html($(this).text())
                            }) 
                            $('.gridproducts li a').on('click', function() {
                                pageloader = $(this).parent('li').parent('div').parent('div').attr('id').replace('section', '');
                                var newurldd = replaceUrlParam('page', pageloader);
                                history.pushState(null, null, newurldd);
                            })
                        }
                    }
                }
                $(".whatiam").on("inview", function(event, visible) {
                    what_page_amI_on = parseInt($(this).attr('id').replace('listview', '')) + 1
                     $("#whatPageImOn").delay(800).text(what_page_amI_on)
                })
                
                $("#global-email-mobile-footer").on("inview", function(event, isInView) {
                    if (isInView) {
                        $('.see_me_at_the_bottom').hide()
                    } else {
                        $('.see_me_at_the_bottom').fadeIn();
                    }
                })
    



                    
                if (isIE === true) {
                    $(".img").on("inview", function (event, isInView) {
                        if (isInView) {
                            var haslink = $(this).attr('link');
                            if($(window).width() < 768) {
                                if (typeof haslink !== typeof undefined && haslink !== false) {
                    $(this).not('.completed').html('<a style="" href="'+$(this).attr('link')+'"><img class="objMobile" src=/images/promos/'+$(this).attr('mobile')+' height=100%  width=100%/></a>');
                    } else {
                    $(this).not('.completed').html('<img class="objMobile" src=/images/promos/'+$(this).attr('mobile')+' height=100%  width=100%/>');  
                    }
                    $(this).not('.completed').addClass('completed');
                    
                            } else {
                    
                                if (typeof haslink !== typeof undefined && haslink !== false) {
                    $(this).not('.completed').html('<a href="'+$(this).attr('link')+'"><img class="objDesktop" src=/images/promos/'+$(this).attr('desktop')+' height=100% width=100%/></a>');
                    } else {
                    $(this).not('.completed').html('<img class="objDesktop" src=/images/promos/'+$(this).attr('desktop')+' height=100%  width=100%/>');  
                    }
                    
                                $(this).not('.completed').addClass('completed');
                            }
                     }
                    
                    
                    });
                    
                    } 



    
                $(".gridproducts").on("inview", function(event, isInView) {
                    if (isInView) {
                        $(this).not('.imloaded').each(function() {
                            $(this).attr("id", "list" + mynum);
                            mynum++;
                            append_Products = "#" + $(this).attr("id");
                            contentloader(append_Products);
                            $(this).addClass("imloaded");
                        })
                    }
                });
                var scrollTimer;
    
                function afterScroll(hidemenu) {
                    $('.scrollLink[data=' + (hidemenu - 1) + ']').delay(1000).css('opacity', '0.5').addClass('imclicked')
                }
                $(window).scroll(function(event) {
                    var scroll = $(window).scrollTop();
                    $('.scrollLink').css('opacity', '1')
                     if (scroll > 170) {
                        clearTimeout(scrollTimer);
                        $(".topmenu").addClass("topmenu-scroll");
                        $(".flyer_title").addClass("flyer_title-scroll");
                        $(".scrollLink").removeClass("imclicked");
                        hidemenu = $('#whatPageImOn').text() 
                        scrollTimer = setTimeout(function() {
                            afterScroll(hidemenu)
                        }, 2);
                    } else {
                        $(".topmenu").removeClass("topmenu-scroll");
                        $(".flyer_title").removeClass("flyer_title-scroll");
                        $('.internal_overflow .scrollLink:first-child').css('opacity', '0.5')
                    }
                    if ($(window).scrollTop() + $(window).height() > ($(document).height() - $('.page-footer').height())) {
                        $('.see_me_at_the_bottom').hide()
                    } else {
                        $('.see_me_at_the_bottom').show()
                    }
                });
                $("#down_arrow2").on("touchstart click", function() {
                    getlastpage = $('#myPageCount').text()
                     getupcomingpage = parseInt($('#whatPageImOn').text()) + 1
                    if (getlastpage === getupcomingpage) {
                        gotonext = '#listview' + (getupcomingpage - 1)
                         gotonextpos = $(gotonext).position() 
                         gotonextnow = gotonextpos.top - 80 
                         $("html").animate({
                            scrollTop: gotonextnow
                        });
                        $('.scrollLink').removeClass('imclicked');
                    } else {
                        parseInt($('#whatPageImOn').text()) + 1 
                        gotonext = '#listview' + (parseInt($('#whatPageImOn').text()) + 1)
                         gotonextpos = $(gotonext).position()
                          gotonextnow = gotonextpos.top - 80
                           $("html").animate({
                            scrollTop: gotonextnow
                        });
                        $('.scrollLink').removeClass('imclicked');
                    }
                })
                
                if (isIE) {
                    return false;
                } else {
                    $.getScript("/images/promos/gopageURL2020.js", function(data, textStatus, jqxhr) {
                        if (window.location.search.has('page') === true) {
                            whereimgoing = '#listview' + $.urlParam('page') 
                            newposition = $(whereimgoing).position() 
                            addmenu = newposition.top - 80 
                            $("html").animate({
                                scrollTop: addmenu
                            }, 1800);
                        } else {
                            window.history.pushState("object or string", "Weekly Circular", document.location + "?page=0");
                            $('html').delay(600).scrollTop(0) 
                            $('.internal_overflow .scrollLink:first-child').css('opacity', '0.5')
                        }
                    });
                } setTimeout(show_arrow_now, 2000) 
                
                $('.right_menu').on('click', function() {
                    new_width = '+=' + ($('.submenu-d').css('width').replace('px', '') * 3) + 'px';
                    $('.internal_menu').animate({
                        scrollLeft: new_width
                    });
                    $('.left_menu').children('img').fadeIn();
                    return false;
                }) 
    
                $('.left_menu').on('click', function() {
                    new_width = '-=' + ($('.submenu-d').css('width').replace('px', '') * 3) + 'px';
                    $('.internal_menu').animate({
                        scrollLeft: new_width
                    });
                    if ($('.internal_menu').scrollLeft() < 140) {
                        $(this).children('img').fadeOut()
                    }
                    return false;
                }) 
                
                $('.pages').scrollStopped(function(ev) {
                    $('.imclicked').removeClass('imclicked')
                });
    
            



    
                    $(".img").each(function() {
                        if ($(window).width() < 768) {
                            $(this).not('.completed').html('<a style="" href="' + $(this).attr('link') + '"><img class="objMobile" src=/images/promos/' + $(this).attr('mobile') + ' height=100% width=100%/></a>');
                            $(this).not('.completed').addClass('completed');
                            $('.img a').on('click', function() {
                                pageloader = $(this).parent('div').parent('div').attr('id').replace('section', '');
                                var newurldd = replaceUrlParam('page', pageloader);
                                history.pushState(null, null, newurldd);
                                document.location = $(this).attr('href');
                                return false
                            })
                        } else {
                            $(this).not('.completed').html('<a href="' + $(this).attr('link') + '"><img class="objDesktop" src=/images/promos/' + $(this).attr('desktop') + ' height=100% width=100%/></a>');
                            $(this).not('.completed').addClass('completed');
                            $('.img a').on('click', function() {
                                pageloader = $(this).parent('div').parent('div').attr('id').replace('section', '');
                                var newurldd = replaceUrlParam('page', pageloader);
                                history.pushState(null, null, newurldd);
                                document.location = $(this).attr('href');
                                return false
                            })
                        }
                    })



                   
                  




                })(jQuery);
        });
