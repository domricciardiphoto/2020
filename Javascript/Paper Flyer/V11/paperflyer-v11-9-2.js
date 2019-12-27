
// Name: PaperFlyer JS
// Version: paperflyer-v11-6-BF RC Black Friday Colors
// Paired CSS: paperflyer-v9-v1-min.css
// Version Notes: (.6) Responsive Popup javascript
// Author: Dominick Ricciardi
window.addEventListener('DOMContentLoaded', function() {
    pagestoload=[load0,load1,load2,load3,load4,load5,load6,load7,load8,load9,load10,load11,load12,load13,load14,load15,load16,load17,load18,load19,load20,load21,load22,load23,load24,load25,load26,load27,load28,load29,load30,load31,load32,load33,load34,load35,load36,load37,load38,load39,load40];
 
    $('#submenu').after('<div class="dconpop"><div class="plist">'+popup_header_message+'</div><div class="close_box"><div class="close_box_icon">X</div></div><div class="dconpop_content">'+header_top_code+'<ul class="product-grid"></ul></div></div><div class="blackout"></div><div class="header2"><div class="progress-container"><div class="progress-bar" id="myBar"></div></div></div>');

    $('.dragscroll').after('<div id="arrows_containers"><div class="left_arrow"></div><div class="right_arrow"></div></div><div class="maxtrix_title-d" style="margin-top: -30px;"><h3 style="padding-left: 1.4%">Promotions</h3></div><div class="promotion_boxes_container"></div> <div class="cf promo-single-container"></div>');

(function($) {
    var closeme_d;
    highlight_button = 0;
    var pagecount = $('.internalflyer').length;
    winScroll = $('.fsi_wrapper').scrollLeft();
    if ($('.customer-service').css('width').replace('px', '') > 767) {
        width = $('.customer-service').css('width').replace('px', '') - 100;
    } else {
        width = $('.customer-service').css('width').replace('px', '') - 40;
    }
var widthofpages = (pagecount * width);
$("#pages_total").text(pagecount);
$('.internalflyer').width(width);
$('.internal-scroll').width(widthofpages);
$('.submenu_overflow').width(widthofpages);
$('.submenu_button').width(width);
//-------------------Marketing Function

    function marketing() {
    var t = document.location.pathname,
        e = $.urlParam('page'),
        a = 'Weekly Circular',
        i = $('#pg' + $.urlParam('page')).attr('category'),
        r = t + "/" + i + "/" + e;
    (function (t, e, a, i, r, p, c) {
        t.GoogleAnalyticsObject = r, t[r] = t[r] || function () {
            (t[r].q = t[r].q || []).push(arguments)
        }, t[r].l = 1 * new Date, p = e.createElement(a), c = e.getElementsByTagName(a)[0], p.async = 1, p.src = i, c.parentNode.insertBefore(p, c)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-38154392-1", "auto"), ga("send", "pageview", r), ga("send", "event", a, i, r)
}
//-------------------------------------ON Context Menu
function liveContextMenu() {
$('.internalflyer a').contextmenu(function() {
     gotolistofproducts = $(this).attr('xlink:href');
     if(gotolistofproducts.indexOf('/') > -1) {
     } else {
        $(this).attr('href', '/browse?Ntt='+gotolistofproducts+'&monhd')
     }
     })
    }

/*-------------------------------------Live Functions-----*/
function live_multiproduct(url_to_products) {
    $('html').not('.dconpop').css('overflow' , 'hidden').css('height' , '100%');
    $(window).scrollTop(0),
    newurldd = replaceUrlParam('page', highlight_button);
    history.pushState(null, null, newurldd); 
    $('.customer-service').css('position' , 'inherit');
$('.dconpop').show(),
$('.blackout').fadeIn();
window.onpopstate = function() {if($('.dconpop').css('display') == 'block') {$('.close_box_icon').click()
    return false;}}; history.pushState({}, '');
fetch('/catalog/flyerContent.jsp?'+url_to_products)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

            function appendData(data) {
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("li");

         

            str = data[i].relatedColorCodes
            res = str.split(";");

        if(res[0] === undefined || res[0] === null || res[0] === 'undefined' || res[0] === '') {
            color0 = ''
        } else {
            color0 = res[0];
            color0 = '<li class="variant"><img data="/'+res[0].slice(0,-4)+'" src="/images/promos/'+color0.slice(-3).toLowerCase()+'.jpg"></li>';
        }
        if(res[1] === undefined || res[1] === null || res[1] === 'undefined' || res[1] === '') {
            color1 = ''
        } else {
            color1 = res[1];
            color1 ='<li class="variant"><img  data="/'+res[1].slice(0,-4)+'" src="/images/promos/'+color1.slice(-3).toLowerCase()+'.jpg"></li>';
        }
        if(res[2] === undefined || res[2] === null || res[2] === 'undefined' || res[2] === '') {
            color2 = ''
        } else {
            color2 = res[2];
            color2 = '<li class="variant"><img  data="/'+res[2].slice(0,-4)+'" src="/images/promos/'+color2.slice(-3).toLowerCase()+'.jpg"></li>';
        }
        if(res[3] === undefined || res[3] === null || res[3] === 'undefined' || res[3] === '') {
            color3 = ''
        } else {
            color3 = res[3];
            color3 = '<li class="variant"><img  data="/'+res[3].slice(0,-4)+'" src="/images/promos/'+color3.slice(-3).toLowerCase()+'.jpg"></li>';
        }
        if(res[4] === undefined || res[4] === null || res[4] === 'undefined' || res[4] === '') {
            color4 = ''
        } else {
            color4 = res[4];
            color4= '<li class="variant"><img  data="/'+res[4].slice(0,-4)+'" src="/images/promos/'+color4.slice(-3).toLowerCase()+'.jpg"></li>';
        }

          
        liveContextMenu()
            if(priceing_promotional === 1) {

            div.innerHTML = '<a href="'+data[i].seoLink.replace('' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice"><img style="width:45%; margin-top:6px;" src="/images/promos/bf-asset-logo-price-d.png"></div></div></div></div></a>'

            } else {
               
  

            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].listPrice+'</div></div></div></div></a>';
                


            if(data[i].regularPriceStrikeThrough === 'Yes') {
            Savings = parseFloat(data[i].listPrice) - parseFloat(data[i].salePrice)
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].salePrice+'</div><div class="originalPrice">reg $'+data[i].listPrice+'</div><div class="savings">Save $'+Savings.toFixed(2)+'!</div></div></div></div></a>';
            }

            if(data[i].showPriceInCartOnly === 'Yes') {
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW lpg-d" style=""><span class="dollar-sign">$</span> Low Price Guarantee</div><div class="BUYNOW" style="width:185px;">Price Lower In Cart</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="originalPrice largereg-d">reg $'+data[i].listPrice+'</div></div></div></div></a>';  
            }

            if(data[i].showPriceInCheckoutOnly === 'Yes') {
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW lpg-d" style=""><span class="dollar-sign">$</span> Low Price Guarantee</div><div class="BUYNOW" style="width:200px;">See Final Price In Checkout</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="originalPrice largereg-d">reg $'+data[i].listPrice+'</div></div></div></div></a>';
            }

            if(jQuery.inArray(data[i].sku, hidearray_d10 ) >= 0) {
                div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW lpg-d" style=""><span class="dollar-sign">$</span> Low Price Guarantee</div><div class="BUYNOW" style="width:200px;">See Final Price In Checkout</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"></div></div></div></a>';

            }

            if(jQuery.inArray(data[i].sku, hidearray_d15 ) >= 0) {
            div.innerHTML = '<a href="'+data[i].seoLink.replace('' , '')+'"><div class="product-tile"><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice"><img style="max-height: 90px; margin-top:6px;" src="'+coverimage_d15+'"></div></div></div></div></a>'

            }

            }


            $('.product-grid').append(div)
            $('.livehtmld').each(function() {$(this).html($(this).text())})

            $('.lpg-d').on('click' , function() {
                window.open('/content/low_price_guarantee', '_blank');
                return false;
            })
        
            
        }
    }
        
            return false;           
}

function live_singleproduct(url_to_products) {
    $('html').not('.dconpop').css('overflow' , 'hidden').css('height' , '100%');

    $(window).scrollTop(0),
    newurldd = replaceUrlParam('page', highlight_button);
    history.pushState(null, null, newurldd); 
    $('.customer-service').css('position' , 'inherit');
    $('.dconpop').show(),
    $('.blackout').fadeIn();
    $('.dconpop').css('min-height' , 'inherit');

    window.onpopstate = function() {if($('.dconpop').css('display') == 'block') {$('.close_box_icon').click()
    return false;}}; history.pushState({}, '');


    fetch('/catalog/flyerContent.jsp?'+url_to_products)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

            function appendData(data) {
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("li");

            if(priceing_promotional === 1) {
            
            
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile product-tile_100" ><div class="BUYNOW">Buy Now</div><div class="product-image product-image_100"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container product-details-container_100"><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice"><img  style="margin-top:6px;" src="/images/promos/bf-asset-logo-price-d.png"></div></div></div></div></a>';

            } else {
            

            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile product-tile_100" ><div class="BUYNOW">Buy Now</div><div class="product-image product-image_100"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container product-details-container_100"><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].listPrice+'</div></div></div></div></a>';
            

            if(data[i].regularPriceStrikeThrough === 'Yes') {
            Savings = parseFloat(data[i].listPrice) - parseFloat(data[i].salePrice)
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile product-tile_100" ><div class="BUYNOW">Buy Now</div><div class="product-image product-image_100"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container product-details-container_100"><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].salePrice+'</div><div class="originalPrice">reg $'+data[i].listPrice+'</div><div class="savings">Save $'+Savings.toFixed(2)+'!</div></div></div></div></a>';
            }

            if(data[i].showPriceInCartOnly === 'Yes') {
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile  product-tile_100"><div class="BUYNOW fpc-d" >Price Lower In Cart</div><div class="product-image  product-image_100"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container product-details-container_100"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="originalPrice">reg $'+data[i].listPrice+'</div></div></div></div></a>';  
            }
    
            if(data[i].showPriceInCheckoutOnly === 'Yes') {
            div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile  product-tile_100"><div class="BUYNOW fpc-d">See Final Price In Checkout</div><div class="product-image  product-image_100"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container product-details-container_100"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="originalPrice">reg $'+data[i].listPrice+'</div></div></div></div></a>';
            }


            if(jQuery.inArray(data[i].sku, hidearray_d10 ) >= 0) {
                div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile  product-tile_100"><div class="BUYNOW fpc-d">See Final Price In Checkout</div><div class="product-image  product-image_100"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container product-details-container_100"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"></div></div></div></a>'

            }

            if(jQuery.inArray(data[i].sku, hidearray_d15 ) >= 0) {
            div.innerHTML = '<a href="'+data[i].seoLink.replace('' , '')+'"><div class="product-tile"><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice"><img style="max-height: 90px;  margin-top:6px;" src="'+coverimage_d15+'"></div></div></div></div></a>'

            }




            }

        



            $('.product-grid').append(div);
            $('.livehtmld').each(function() {$('.livehtmld').html($(this).text())})

            
        }
    }

    return false; 
}

    //-------------------Arrow function

    function arrowparam() {
    if (highlight_button == 0) {
        $('.left_arrow').hide();

    } else {
        $('.left_arrow').show();

    }

    if (highlight_button == $('.internalflyer').length - 1) {
        $('.right_arrow').hide();

    } else {
        $('.right_arrow').show();

    }

}


//-------------------popup functions

$('.close_box_icon').on('click', function () {
    $('html').css('overflow' , 'auto').css('height' , 'auto');
    $('.dconpop').hide();
    $('.product-grid').empty();
    $('.blackout').hide();
    $('.internalflyer svg').show();
})

$('.plist').on('click', function () {
    $('.dconpop').hide();
    $('.product-grid').empty();
    $('.blackout').hide();
    $('.internalflyer svg').show();
})

//-------------------create URL var


$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

function replaceUrlParam(paramName, paramValue) {
    var url = window.location.href;

    if (paramValue == null) {
        paramValue = '';
    }

    var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
    if (url.search(pattern) >= 0) {
        return url.replace(pattern, '$1' + paramValue + '$2');
    }

    url = url.replace(/[?#]$/, '');
    return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
}


let searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('page') === true) {
    var where_to_move = $.urlParam('page') * width;
    $(".fsi_wrapper").scrollLeft(where_to_move)
} else {
    window.history.pushState("object or string", "Weekly Circular", document.location + "?page=0");
    $('#menuFSI0').css('background-color', '#fff');
}

arrow_param_loading = parseInt($.urlParam('page'));
if (arrow_param_loading === 0) {
    $('.left_arrow').hide();
} else {
    $('.left_arrow').show();
}

//-------------------breadcrumbs

$('.breadcrumbs').after('<div class="flyer_header"><h1><span class="mobile-hide-title">P.C. Richard &amp; Son :</span><span id="ae6"> '+pg_title_d+'</span></h1></div>');
$('#submenu').after('<div id="menu_box_desktop_name"><h2><strong>Categories</strong></h2></div><div id="menu_box_desktop"><div class="page_num"><div id="ae1"><div id="ae2">PAGE&nbsp;</div><input id="pageof" aria-label="Type a page number to jump to and press Enter" alt="Type a page number to jump to and press Enter" role="textbox" maxlength="2">&nbsp;OF&nbsp;&nbsp;<span id="pages_total"></span></div></div><div class="menu_number_overflow"></div></div>');
$('.submenu_button').each(function () {
    $(this).append('<img src="' + $(this).attr('data_image') + '"><div class="undermenu">' + $(this).attr('data_name') + '</div>');
});



//-------------------Menu buttons

for (pg1 = 0; $(".internalflyer").length > pg1; pg1++) {
    $(".menu_number_overflow").append('<div id="menuFSI' + pg1 + '" class="menu_item" data="' + pg1 + '" category="' + $("#pg" + pg1).attr("category") + '">' + parseInt(pg1 + 1) + "</div>");
}


$('ul.breadcrumbs').children('li').not('.social').each(function () {
    breadme = $(this).html()
    $(this).html(breadme + '<span class="arrow_step"> ></span>')
})


    
$('ul.breadcrumbs>li:nth-child(2)').html('<a title="'+pg_title_d+'" href="'+pg_url_d+'" class="ico">'+pg_title_d+'</a><span class="arrow_step"> &gt;</span>').after('<li><span class="arrow_step"> &gt;</span><a title="Page ' + (parseInt(highlight_button) + 1) + '" href="'+pg_url_d+'?page=' + highlight_button + '" class="ico">Page ' + (parseInt(highlight_button) + 1) + '</a><li>');


//-------------------draggable code

    (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add'+EventListener;
    var removeEventListener = 'remove'+EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont){
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() {pushed = 0;}, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        if (pushed) {
                            (scroller = el.scroller||el).scrollLeft -=
                                newScrollX = (- lastClientX + (lastClientX=e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (- lastClientY + (lastClientY=e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
            })(dragged[i++]);
        }
    }
        reset();
    exports.reset = reset;
}));



//---------------------Promotional Boxes

function what_add_box() {

if(large_promotions === 0) {
    $('.promotion_boxes_container').hide(),
    $('.maxtrix_title-d').hide(),
    $('.maxtrix_title-d:first-of-type').show(),
    $('.fsi_wrapper').css('margin-bottom' , '20px');
}

if(bottom_boxes === 1) {   
switch ($('#pg'+highlight_button).attr('category')) {
case 'Computers':
$('.promotion_boxes_container').html(Computers);
$('.promo-single-container').html(Computers_small);
    break;
case 'Flat Panel TVs':
$('.promotion_boxes_container').html(Flat_Panel_TVs)
$('.promo-single-container').html(Flat_Panel_TVs_small);
    break;
case 'Appliances':
$('.promotion_boxes_container').html(Appliances)
$('.promo-single-container').html(Appliances_small);
    break;
case 'Home Audio':
$('.promotion_boxes_container').html(Home_Audio)
$('.promo-single-container').html(Home_Audio_small);
    break;
case 'Smart Home':
$('.promotion_boxes_container').html(Smart_Home)
$('.promo-single-container').html(Smart_Home_small);
    break;
case 'Vacuums':
$('.promotion_boxes_container').html(Vacuums)
$('.promo-single-container').html(Vacuums_small);
    break;
case 'Portable Audio':
$('.promotion_boxes_container').html(Portable_Audio)
$('.promo-single-container').html(Portable_Audio_small);
    break;
case 'Laundry':
$('.promotion_boxes_container').html(Laundry)
$('.promo-single-container').html(Laundry_small);
    break;
case 'Samsung':
$('.promotion_boxes_container').html(Samsung)
$('.promo-single-container').html(Samsung_small);
    break;
    case 'Frigidaire':
$('.promotion_boxes_container').html(Frigidaire)
$('.promo-single-container').html(Frigidaire_small);
    break;
    case 'GE':
$('.promotion_boxes_container').html(GE)
$('.promo-single-container').html(GE_small);
    break;
case 'Whirlpool':
$('.promotion_boxes_container').html(Whirlpool)
$('.promo-single-container').html(Whirlpool_small);
    break;
case 'LG':
$('.promotion_boxes_container').html(LG)
$('.promo-single-container').html(LG_small);
    break;
case 'Refrigerators':
    $('.promotion_boxes_container').html(Refrigerators)
$('.promo-single-container').html(Refrigerators_small);
    break;
case 'Recliners':
$('.promotion_boxes_container').html(Recliners)
$('.promo-single-container').html(Recliners_small);
    break;
case 'Mattresses':
$('.promotion_boxes_container').html(Mattresses)
$('.promo-single-container').html(Mattresses_small);
    break;
case 'Video Games':
$('.promotion_boxes_container').html(Video_Games)
$('.promo-single-container').html(Video_Games_small);
    break;
case 'Seasonal':
$('.promotion_boxes_container').html(Seasonal)
$('.promo-single-container').html(Seasonal_small);
    break;
case 'Health & Beauty':
$('.promotion_boxes_container').html(Health_and_Beauty)
$('.promo-single-container').html(Health_and_Beauty_small);
    break;
case 'Heating & Cooling':
$('.promotion_boxes_container').html(Heating_and_Cooling)
$('.promo-single-container').html(Heating_and_Cooling_small);
    break;
case 'Cameras & Camcorders':
$('.promotion_boxes_container').html(Cameras_and_Camcorders)
$('.promo-single-container').html(Cameras_and_Camcorders_small);
    break; 
case 'Home Office':
$('.promotion_boxes_container').html(Home_Office)
$('.promo-single-container').html(Home_Office_small);
    break;
case 'Cover':
$('.promotion_boxes_container').html(Cover)
$('.promo-single-container').html(Cover_small);
    break;      
case 'Electronics':
$('.promotion_boxes_container').html(Electronics)
$('.promo-single-container').html(Electronics_small);
}
}




}





//-------------------Menu buttons show hide

$('#menu_box_desktop_name').on('mouseover', function () {
    $('#submenu').show(),
    $('.customer-service').css('position' , 'relative');

})

$('#ae4').on('mouseout', function () {
    closeme_d = setTimeout(function () {
        $('#submenu').hide(),
        $('.customer-service').css('position' , 'inherit');
    }, 600);
})

$('.submenu_button').on('mouseover', function () {
    clearTimeout(closeme_d);

})

$("#pageof").val(parseInt($.urlParam('page')) + 1);
$('#menuFSI' + $.urlParam('page')).css('background-color', '#fff');

$("#pageof").keypress(function (t) {
    if (13 == t.which) {
        var e = $(this).val() - 1;
        $("#menuFSI" + e.toString()).click();

    }
})

$("#pages_total").text(' '+pagecount)

am0 ='#pg'+highlight_button,
am1 ='#pg'+(parseInt(highlight_button)+1),
bm0 = highlight_button,
bm1 = parseInt(highlight_button)+1,

$(am0).html(pagestoload[bm0]),
$(am1).html(pagestoload[bm1]),

//-------------------on Scroll

$(".fsi_wrapper").scroll(function () {
    winScroll = $('.fsi_wrapper').scrollLeft(),
    pagecount = $('.internalflyer').length,
    highlight_button = ((winScroll / pagecount) / (width / pagecount)).toFixed(),
    scrolled = (width * highlight_button) / $('.internal-scroll').width() * 100 + 3.333333333333334,
    $("#pageof").val(parseInt(highlight_button) + 1),
    $('.menu_item').css('background-color', '#104590'),
    $('#menuFSI' + highlight_button).css('background-color', '#fff'),

    am0 ='#pg'+highlight_button,
    am1 ='#pg'+(parseInt(highlight_button)+1),
    am2 ='#pg'+(parseInt(highlight_button)-1),
    bm0 = highlight_button,
    bm1 = parseInt(highlight_button)+1,
    bm2 = parseInt(highlight_button)-1,

    $(am0).html(pagestoload[bm0]),
    $(am1).html(pagestoload[bm1]),
    $(am2).html(pagestoload[bm2]),


    document.getElementById("myBar").style.width = scrolled + "%",
    $('ul.breadcrumbs>li:nth-child(3)').html('<li><a title="Page ' + (parseInt(highlight_button) + 1) + '" href="/content/weekly-ad?page=' + highlight_button + '" class="ico">Page ' + (parseInt(highlight_button) + 1) + '</a><li>'),
    setTimeout(arrowparam, 600)


/*--------------------------------------------------------------------*/
liveContextMenu()

if(bottom_boxes === 1) {   
    switch ($('#pg'+highlight_button).attr('category')) {
        case 'Computers':
$('.promotion_boxes_container').html(Computers);
$('.promo-single-container').html(Computers_small);
    break;
case 'Flat Panel TVs':
$('.promotion_boxes_container').html(Flat_Panel_TVs)
$('.promo-single-container').html(Flat_Panel_TVs_small);
    break;
case 'Appliances':
$('.promotion_boxes_container').html(Appliances)
$('.promo-single-container').html(Appliances_small);
    break;
case 'Home Audio':
$('.promotion_boxes_container').html(Home_Audio)
$('.promo-single-container').html(Home_Audio_small);
    break;
case 'Smart Home':
$('.promotion_boxes_container').html(Smart_Home)
$('.promo-single-container').html(Smart_Home_small);
    break;
case 'Vacuums':
$('.promotion_boxes_container').html(Vacuums)
$('.promo-single-container').html(Vacuums_small);
    break;
case 'Portable Audio':
$('.promotion_boxes_container').html(Portable_Audio)
$('.promo-single-container').html(Portable_Audio_small);
    break;
case 'Laundry':
$('.promotion_boxes_container').html(Laundry)
$('.promo-single-container').html(Laundry_small);
    break;
case 'Samsung':
$('.promotion_boxes_container').html(Samsung)
$('.promo-single-container').html(Samsung_small);
    break;
    case 'Frigidaire':
$('.promotion_boxes_container').html(Frigidaire)
$('.promo-single-container').html(Frigidaire_small);
    break;
    case 'GE':
$('.promotion_boxes_container').html(GE)
$('.promo-single-container').html(GE_small);
    break;
case 'Whirlpool':
$('.promotion_boxes_container').html(Whirlpool)
$('.promo-single-container').html(Whirlpool_small);
    break;
case 'LG':
$('.promotion_boxes_container').html(LG)
$('.promo-single-container').html(LG_small);
    break;
case 'Refrigerators':
    $('.promotion_boxes_container').html(Refrigerators)
$('.promo-single-container').html(Refrigerators_small);
    break;
case 'Recliners':
$('.promotion_boxes_container').html(Recliners)
$('.promo-single-container').html(Recliners_small);
    break;
case 'Mattresses':
$('.promotion_boxes_container').html(Mattresses)
$('.promo-single-container').html(Mattresses_small);
    break;
case 'Video Games':
$('.promotion_boxes_container').html(Video_Games)
$('.promo-single-container').html(Video_Games_small);
    break;
case 'Seasonal':
$('.promotion_boxes_container').html(Seasonal)
$('.promo-single-container').html(Seasonal_small);
    break;
case 'Health & Beauty':
$('.promotion_boxes_container').html(Health_and_Beauty)
$('.promo-single-container').html(Health_and_Beauty_small);
    break;
case 'Heating & Cooling':
$('.promotion_boxes_container').html(Heating_and_Cooling)
$('.promo-single-container').html(Heating_and_Cooling_small);
    break;
case 'Cameras & Camcorders':
$('.promotion_boxes_container').html(Cameras_and_Camcorders)
$('.promo-single-container').html(Cameras_and_Camcorders_small);
    break; 
case 'Home Office':
$('.promotion_boxes_container').html(Home_Office)
$('.promo-single-container').html(Home_Office_small);
    break;
case 'Cover':
$('.promotion_boxes_container').html(Cover)
$('.promo-single-container').html(Cover_small);
    break;      
case 'Electronics':
$('.promotion_boxes_container').html(Electronics)
$('.promo-single-container').html(Electronics_small);
}
}




/*--------------------------------------------------------------------*/


$('.internalflyer a').on('click', function () {
url_to_products = $(this).attr('xlink:href');
if(url_to_products.indexOf('/') > -1) {
var newurldd = replaceUrlParam('page', highlight_button);
history.pushState(null, null, newurldd);
//document.location = $(this).attr('xlink:href');
window.open($(this).attr('xlink:href'), '_blank');
} else {
    if(url_to_products.indexOf('+') > -1) {
    live_multiproduct(url_to_products)
} else {
    live_singleproduct(url_to_products)
}
}
return false;
});



})

//-------------------Arrows function

$('.right_arrow').on('click', function () {
    arrow_param = parseInt(highlight_button) + 1;
    where_to_move = arrow_param * width;
    $(".fsi_wrapper").animate({
        scrollLeft: where_to_move
    });
});

$('.left_arrow').on('click', function () {
    arrow_param = parseInt(highlight_button) - 1;
    where_to_move = arrow_param * width;
    $(".fsi_wrapper").animate({
        scrollLeft: where_to_move
    });
});

//-------------------Menu Clicks

$('.menu_item').on('click', function () {
    $('#submenu').hide();
    $("#pageof").val(parseInt($(this).attr('data')) + 1);
    var where_to_move = $(this).attr('data') * width;
    var where_to_move_noscroll = '-' + where_to_move + 'px';
    var newurldd = replaceUrlParam('page', $(this).attr('data'));
    history.pushState(null, null, newurldd);
    $(".fsi_wrapper").scrollLeft(where_to_move)
    arrow_param = parseInt($.urlParam('page'));
    if (arrow_param === 0) {
        $('.left_arrow').hide();
    } else {
        $('.left_arrow').show();
    }

    if ($(this).is(':last-child')) {
        $('.right_arrow').hide();
        $('.left_arrow').show();
    } else {
        $('.right_arrow').show();
    }

    $('.menu_item').css('background-color', '#104590'),
    $('#menuFSI' + $.urlParam('page')).css('background-color', '#fff'),
    $('#pg'+(parseInt($.urlParam('page'))+1)).html(eval('load'+(parseInt($.urlParam('page'))+1))),
    marketing()
});



$('.direct').on('click' , function() {
    var newurldd = replaceUrlParam('page', highlight_button);
    history.pushState(null, null, newurldd); 
})
scrolled = (width * highlight_button) / $('.internal-scroll').width() * 100 + 3.333333333333334
document.getElementById("myBar").style.width = scrolled + "%"; 
marketing();




$('.submenu_button').on('click', function () {
    var where_to_move = $(this).attr('data') * width
    $("#pageof").val(parseInt($(this).attr('data')) + 1)
    $(".fsi_wrapper").animate({
        scrollLeft: where_to_move
    }, 800);
    var newurldd = replaceUrlParam('page', $(this).attr('data'));
    history.pushState(null, null, newurldd);
    arrow_param = parseInt(parseInt($(this).attr('data')) + 1);
    if (arrow_param === 0) {
        $('.left_arrow').hide();
    } else {
        $('.left_arrow').show();
    }
    $('.menu_item').css('background-color', '#104590');
    $('#menuFSI' + $.urlParam('page')).css('background-color', '#fff');
    marketing()

})



$(window).bind("resize", function () {
    width = $('.customer-service').css('width').replace('px', ''),
    widthofpages = ($('.internalflyer').length * width),
    $('.internalflyer').width(width),
    $('.internal-scroll').width(widthofpages),
    $('.menu_item').css('background-color', '#104590'),



    $('#menuFSI' + highlight_button).css('background-color', '#fff'),
    $('#menuFSI'+highlight_button).click()
    $('#pg'+(parseInt(highlight_button)-1)).html(eval('load'+(parseInt(highlight_button)-1))),
    $('#pg'+(parseInt(highlight_button)-2)).html(eval('load'+(parseInt(highlight_button)-2)));
});





$('.internalflyer a').on('click', function () {
url_to_products = $(this).attr('xlink:href');
if(url_to_products.indexOf('/') > -1) {
var newurldd = replaceUrlParam('page', highlight_button);
history.pushState(null, null, newurldd);
document.location = $(this).attr('xlink:href');
} else {
    if(url_to_products.indexOf('+') > -1) {
    live_multiproduct(url_to_products)
} else {
    live_singleproduct(url_to_products)
}

}
return false;
});



what_add_box()



//-------------Close on blackout click

$('.blackout').on('click' ,function() { $(this).hide() ,$('.dconpop').hide() ,$('.product-grid').empty(),$('html').css('overflow' , 'auto').css('height' , 'auto') })


//---------------On Context Menu
liveContextMenu()



//--------------On Back Button Click
window.onpopstate = function() {
if($('.dconpop').css('display') == 'block') {
$('.close_box_icon').click()
return false;
}
}; history.pushState({}, '');

//--------------Countdown Clock

switch (CountDownClock) {
    case 'Nothing':
    break;
    case 'Header':
        $('.header2').after(header_top_code);
    break;
    case 'Clock':
       $('.header2').after(CC_clock_code);
        function sizer() {
            $('#clockcontainer-BF').show()
        }
              livedate = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate() + 1);
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
    break;
}

// on resize popup  ------------------------------------

$('.dconpop').css('max-height' , window.innerHeight -50)
$('.dconpop').css('overflow' , 'auto');

function dcomp_resize() {
$('.dconpop').css('max-height' , window.innerHeight -50)
$('.dconpop').css('overflow' , 'auto');  
}
window.addEventListener("resize", dcomp_resize);


})(jQuery);

});