window.addEventListener('DOMContentLoaded', function() {(function($) {
    mynum = 0;mypage = 1;mywhatiam = 0;highlight_button = 0;

    function swipedetect(a,b){var c,d,f,g,h,i,j,k=a,l=b||function(){};k.addEventListener("touchstart",function(a){var b=a.changedTouches[0];c="none",dist=0,d=b.pageX,f=b.pageY,j=new Date().getTime(),a.preventDefault()},!1),k.addEventListener("touchmove",function(a){a.preventDefault()},!1),k.addEventListener("touchend",function(a){var b=a.changedTouches[0];g=b.pageX-d,h=b.pageY-f,i=new Date().getTime()-j,i<=200&&(Math.abs(g)>=5&&Math.abs(h)<=100?c=0>g?"left":"right":Math.abs(h)>=5&&Math.abs(g)<=100&&(c=0>h?"up":"down")),l(c),a.preventDefault()},!1)}


    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});

    jQuery.fn.scrollTo = function(elem, speed) {$(this).animate({scrollTop: $(this).scrollTop() - $(this).offset().top + $(elem).offset().top}, speed === undefined ? 1000 : speed);return this;};



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


    $('.wrapper-d').prepend('<div id="menu_block41" class="down_arr"><img id="back_to_top" src="/images/promos/back_to_top-2-2020.svg" style="width: 100%;"><img id="up_arrow" src="/images/promos/up_arr_logo-2-2020.svg" style="width: 100%;"><img id="down_arrow" src="/images/promos/down_arr_logo-2-2020.svg" style="width: 100%;"></div><div class="flyer_title"><div class="myname-d"> Weekly Circular for</div><div class="mypage-d">Page <span id="whatPageImOn">1</span> of <span id="myPageCount"></span></div></div>');
    $('.pg_internal').each(function() {
    $('<div id="'+$(this).attr('id').replace('section' , 'listview')+'" class="whatiam">'+$(this).attr('data')+'</div>').insertBefore(this)

   mypage++
   })
   var menu_l = (100 / $('.submenu-d').length) + '%'
   $('#myPageCount').text($('.pg_internal').length)
   $('.submenu-d').each(function() {
       $(this).append('<img title="'+$(this).attr('title')+'" src="'+$(this).attr('img')+'" /><div class="submenu_title">'+$(this).attr('title')+'</div>').width(menu_l).wrap('<a class="scrollLink" data="'+$(this).attr('page')+'"></a>').delay(700).fadeIn();
   })



function show_arrow_now() {
$(".down_arr").animate({"right":"0px"})
}


$('.scrollLink').on('click', function() {
if($(this).hasClass( "imclicked" )) {
    return false;
} else {
    $(this).addClass('imclicked');
    $(window).scrollTop(0);
    $('.scrollLink').not(this).removeClass('imclicked');
    whereimgoing = '#listview'+$(this).attr('data');
    $(".pages").delay(500).scrollTo(whereimgoing);
    what_page_amI_on = parseInt($(this).attr('data')) + 1
    $("#whatPageImOn").delay(800).text(what_page_amI_on)
}

})




$(window).resize(function () {
   $(".submenu-d").width((100 / $(".submenu-d").length) + "%");
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
               div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].listPrice+'</div></div></div></div></a>';
              
               if(data[i].regularPriceStrikeThrough === 'Yes') {
               Savings = parseFloat(data[i].listPrice) - parseFloat(data[i].salePrice)
               div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].salePrice+'</div><div class="originalPrice">reg $'+data[i].listPrice+'</div><div class="savings">Save $'+Savings.toFixed(2)+'!</div></div></div></div></a>';
               }
               if(data[i].showPriceInCartOnly === 'Yes') {
               div.innerHTML = '<div class="product-tile"><div class="product-image"><a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" class="prodImage"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'" ></a></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div></div><a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" class="product-name">'+data[i].displayName+'</a><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">'+data[i].salePrice+'</div><div class="originalPrice">reg $'+data[i].listPrice+'</div><div class="priceMsg">Price Lower in Cart<span class="pcr-tooltip">?<small class="tooltip-body top center"> Why don&rsquo;t we show the price? As a retailer, we set our prices independently, but in some cases the manufacturer does not allow us to show our price until you take further action. Don&rsquo;t worry; you&rsquo;ll be able to see the price in checkout before you decide to buy it.</small></span></div></div></div></div>'
               }
               if(data[i].showPriceInCheckoutOnly === 'Yes') {
               Savings = parseFloat(data[i].listPrice) - parseFloat(data[i].salePrice)
               div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"><img src="'+data[i].detailImg+'" alt="'+data[i].displayName+'"></div><div class="product-details-container"><div class="product-variant-container"><ul class="variantList">'+color0+color1+color2+color3+'</ul></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].salePrice+'</div><div class="originalPrice">reg $'+data[i].listPrice+'</div><div class="savings">Save $'+Savings.toFixed(2)+'!</div></div></div></div></a>';
               }
               if($(append_Products).hasClass('largeProduct')) {
               div.innerHTML = '<a href="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'"><div class="product-tile"><div class="BUYNOW">Buy Now</div><div class="product-image"></div><div class="product-details-container"><div  class="product-variant-container"></div><span class="livehtmld" style="color:#333">'+data[i].displayName+'</span><div class="model"><span class="hide-for-large-up">Model:&nbsp;</span>'+data[i].sku+'</div><div class="ratings-container"><div data-bv-show="inline_rating" data-bv-productid="'+data[i].sku+'" data-bv-redirect-url="'+data[i].seoLink.replace('https://www.pcrichard.com' , '')+'" data-bv-ready="true"></div></div><div id="price-container-'+data[i].sku+'" class="price-container plp-price-container-js" href="'+data[i].seoLink+'"><div class="salePrice">$'+data[i].listPrice+'</div></div></div></div></a>'
               }

           $(append_Products).append(div)
           $('.livehtmld').each(function() {$(this).html($(this).text())})
           $('.gridproducts li a').on('click' , function() {
pageloader = $(this).parent('li').parent('div').parent('div').attr('id').replace('section' , '');
var newurldd = replaceUrlParam('page', pageloader);
history.pushState(null, null, newurldd);;
})
           
       }
   }


}



$(".whatiam").on("inview", function (event, visible) {
what_page_amI_on = parseInt($(this).attr('id').replace('listview' , '')) + 1
$("#whatPageImOn").delay(800).text(what_page_amI_on)
})




$(".pg_internal").on("inview", function (event, visible) {
whatSection = $(this).attr("id").replace("#" , "");
whereimgoing = $(this).attr('id');
//$('#'+whereimgoing).not('.content_loaded').html(eval(whereimgoing.replace('#' , '')));
$('#'+whereimgoing).children('.svg').not('.completed').each(function() {
$(this).html('<object data=/images/promos/'+$(this).attr('data')+' height=100% type=image/svg+xml width=100%></object>');
$(this).addClass('completed');
})
$(this).addClass("content_loaded");

$('#'+whereimgoing).children('.gridproducts').not('.imloaded').each(function() {
$(this).attr("id" , "list"+mynum);
mynum++;
append_Products = "#"+$(this).attr("id");
contentloader(append_Products);
$(this).addClass("imloaded");
})

})

$(window).scroll(function (event) {
   var scroll = $(window).scrollTop();
 if(scroll > 170) {
     $(".topmenu").addClass("topmenu-scroll");
     $(".flyer_title").addClass("flyer_title-scroll");
     $(".scrollLink").removeClass("imclicked");
 } else {
     $(".topmenu").removeClass("topmenu-scroll");
     $(".flyer_title").removeClass("flyer_title-scroll");
 }
});




$("#down_arrow").on("touchstart click" , function() {
   $(".pages").animate({scrollTop: "+=600px"});
   $('.scrollLink').removeClass('imclicked');
})

$("#up_arrow").on("touchstart click" , function() {
   $(".pages").animate({scrollTop: "-=600px"});
   $('.scrollLink').removeClass('imclicked');
})

$('#back_to_top').on('touchstart click' , function() {
$(".pages").animate({scrollTop: "0px"} , 500);  
})


var el1 = document.getElementById('up_arrow')
var el2 = document.getElementById('down_arrow')



swipedetect(el1, function(swipedir){
if (swipedir =='left')
$('#menu_block41').animate({"right":"0"})
})

swipedetect(el1, function(swipedir){
if (swipedir =='right')
$('#menu_block41').animate({"right":"-40px"})
})
swipedetect(el2, function(swipedir){
if (swipedir =='left')
$('#menu_block41').animate({"right":"0"})
})

swipedetect(el2, function(swipedir){
if (swipedir =='right')
$('#menu_block41').animate({"right":"-40px"})
})

if (searchParams.has('page') === true) {
whereimgoing = '#listview'+$.urlParam('page')
$(".pages").scrollTo(whereimgoing);
} else {
window.history.pushState("object or string", "Weekly Circular", document.location + "?page=0");
}

setTimeout(show_arrow_now , 2500)

})(jQuery);});