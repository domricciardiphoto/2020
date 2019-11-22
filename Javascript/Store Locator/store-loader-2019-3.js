




$('head').append('<meta http-equiv="cache-control" content="max-age=0"><meta http-equiv="cache-control" content="no-cache"><meta http-equiv="expires" content="-1"><meta http-equiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT"><meta http-equiv="pragma" content="no-cache">');

$.getScript("https://apps.bazaarvoice.com/deployments/pcrichardson-stores/main_site/production/en_US/bv.js", function (data, textStatus, jqxhr) {

});


            

var d231 = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n231 = weekday[d231.getDay()];

var date0a = new Date();
date0a.setDate(date0a.getDate() - 1);

var date1a = new Date();
date1a.setDate(date1a.getDate() - 2);

var date2a = new Date();
date2a.setDate(date2a.getDate() - 3);

var date3a = new Date();
date3a.setDate(date3a.getDate() - 4);

var date4a = new Date();
date4a.setDate(date4a.getDate() - 5);

var date5a = new Date();
date5a.setDate(date5a.getDate() - 6);

var date6a = new Date();
date6a.setDate(date6a.getDate() - 7);

var date0 = new Date();
date0.setDate(date0.getDate());

var date1 = new Date();
date1.setDate(date1.getDate() + 1);

var date2 = new Date();
date2.setDate(date2.getDate() + 2);

var date3 = new Date();
date3.setDate(date3.getDate() + 3);

var date4 = new Date();
date4.setDate(date4.getDate() + 4);

var date5 = new Date();
date5.setDate(date5.getDate() + 5);

var date6 = new Date();
date6.setDate(date6.getDate() + 6);

var date7 = new Date();
date7.setDate(date7.getDate() + 7);


monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.",
    "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
];


today_n = (monthNames[date0.getMonth()]) + ' ' + date0.getDate();
tomorrow_n = (monthNames[date1.getMonth()]) + ' ' + date1.getDate();
third_n = (monthNames[date2.getMonth()]) + ' ' + date2.getDate();
fourth_n = (monthNames[date3.getMonth()]) + ' ' + date3.getDate();
fifth_n = (monthNames[date4.getMonth()]) + ' ' + date4.getDate();
sixth_n = (monthNames[date5.getMonth()]) + ' ' + date5.getDate();
seventh_n = (monthNames[date6.getMonth()]) + ' ' + date6.getDate();


//store_list = '/images/promos/pcr_stores_20180507_153427.xml';
store_list = '/images/promos/PCR-Stores.xml';
this_is_the_day = 0;
mysetstore = "'" + store_number + "'";
openhrs = '';
closehrs = '';
store_im_click = '0';
setStore = "'setStore'";
formattedNumber = ("0" + store_number).slice(-2);

$('#contentContainer').children('div.customer-service').children('div.page-block').removeClass('customer').append('<div class="wrapper-d store" itemscope itemtype="http://schema.org/LocalBusiness"><div class=content_100 id=location_store><div class="scroller"><img class="store_photo" itemprop="image photo"  src="#" /><div class=store_map itemprop=hasMap content="" ></div></div></div><div class=content_100><div class="store_info"><div class=store_name><h1 itemprop="name"></h1></div><div class=store_rating> <div data-bv-show="rating_summary" data-bv-productId="PCR0' + formattedNumber + '"></div></div><div class=store_address itemscope itemtype="http://schema.org/PostalAddress" itemprop="address" data-country="US"></div><div class=store_phone_number></div><div class=store_mystore></div><div class="store_directions">Directions</div></div><div class=store_hrs><div class=open_today_until></div></div></div><div class="store_titles"><h2 id="ATS">About</h2></div><hr><div id="store_description-parent" class=content_100><div itemprop="description" class=store_description></div></div><div class=store_titles><h2>Store Features</h2></div><hr><div class=content_100 id=store_features></div><div class="content_100 store_reviews"id=reviews><div data-bv-show="reviews" data-bv-productId="PCR0' + formattedNumber + '"></div></div></div>');

$('.store_map').html(store_google_map);
$('.store_description').html(store_description);

$.ajax({
    type: "GET",
    url: store_list,
    dataType: "xml",
    success: xmlParser,
    error: function () {
        $.ajax({
            url: store_list,
            dataType: "xml",
            success: xmlParser
        });
    }
});



key21 = $("input[name='_dynSessConf']").val();


function xmlParser(xml) {
    var store_name = $(xml).find('#' + store_number).children('name').text();
    var store_phone_number = $(xml).find('#' + store_number).children('phone').text();
    var store_address = $(xml).find('#' + store_number).children('address1').text();
    var store_state = $(xml).find('#' + store_number).children('state').text();
    var store_city = $(xml).find('#' + store_number).children('city').text();
    var store_zip = $(xml).find('#' + store_number).children('zip').text();
    var grg_link = 'http://maps.google.com/?q=P.C.+Richard+and+Son+' + store_address + "+" + store_city + '+' + store_state + "+" + store_zip;
    $('.store_map').attr('content', grg_link);

    $('.store_mystore').html('<form id="store" action="/storelocator/store-landing.jsp?_DARGS=/storelocator/store-detail.jsp" method="post"><div style="display:none"><input name="_dyncharset" value="UTF-8" type="hidden"/> </div><div style="display:none"><input name="_dynSessConf" value="' + key21 + '" type="hidden"/> </div><div class="buttons"> <input id="setStore" style="display:none;" name="/atg/userprofiling/ProfileFormHandler.store" value="Set as My Store" class="pcr-btn blue simple" type="submit"/><input name="_D:/atg/userprofiling/ProfileFormHandler.store" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.storeSuccessURL" value="/index.jsp" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.storeSuccessURL" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.storeErrorURL" value="/storelocator/store-landing.jsp" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.storeErrorURL" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.myStore" value="' + store_number + '" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.myStore" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.findStoreZip" value="' + store_zip + '" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.findStoreZip" value=" " type="hidden"/><a class="pcr-btn simple gradient" href="#" title="Set as My Store" onkeypress="clickOnId(' + setStore + ');" onclick="clickOnId(' + setStore + ');"><span>Set as My Store</span></a> </div><div style="display:none"><input name="_DARGS" value="/storelocator/store-detail.jsp" type="hidden"/> </div></form>');


    mydate21 = new Date().getDay();
    myhour21 = new Date().getHours() * 100


    if (appliance_block0 === '1') {
        $('#store_features').append('<a class="noblue"  title="Shop All Appliances &amp; Housewares" href="' + appliance_block0_link + '"><div id="appliances" class="feature_box"><div  class="feature_image"><img  itemprop="image" style="width:100%" src="/images/promos/Appliances_Housewares-catagory-2018.jpg"/></div><div class="feature_description"><div   class="description_title"><h3>Appliances &amp; Housewares</h3></div><div  class="description_info">' + appliances_text + '</div></div><div class="cfmi">Shop All Appliances &amp; Housewares</div></div></a>');
    }


    if (tv_block0 === '1') {
        $('#store_features').append('<a class="noblue"  title="Shop All HDTVs"  href="' + tv_block0_link + '"><div id="HDTVs" class="feature_box"><div class="feature_image"><img style="width:100%"   itemprop="image" src="/images/promos/STORE-LOC2018-HDTVS.png"/></div><div class="feature_description"><div   class="description_title"><h3>HDTVs</h3></div><div  class="description_info">' + TV_text + '</div></div><div class="cfmi">Shop All HDTVs</div></div></a>');
    }

    if (mattress_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Mattresses"  href="' + mattress_block0_link + '"><div id="mattress" class="feature_box"><div class="feature_image"><img style="width:100%"   itemprop="image" src="/images/promos/Mattresses-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Mattress</h3></div><div    class="description_info">' + mattress_text + '</div></div><div class="cfmi">Shop All Mattresses</div></div></a>');
    }


    if (apple_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Apple"  href="' + apple_block0_link + '"><div id="apple" class="feature_box"><div  class="feature_image"><img  style="width:100%"  itemprop="image" src="/images/promos/Apple-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Apple</h3></div><div    class="description_info">' + apple_text + '</div></div><div class="cfmi">Shop All Apple</div></div></a>');
    }


    if (bedgear_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Bedgear"  href="' + bedgear_block0_link + '"><div id="BedGear" class="feature_box"><div class="feature_image"><img style="width:100%"   itemprop="image" src="/images/promos/PCR-SleepSystem-150x150.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Bedgear</h3></div><div class="description_info">' + bedgear_text + '</div></div><div class="cfmi">Shop All BEDGEAR</div></div></a>');
    }

  
    if (car_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Car Audio"  href="' + car_block0_link + '"><div id="car_audio" class="feature_box"><div class="feature_image"><img  style="width:100%"  itemprop="image" src="/images/promos/Car_Audio-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Car Audio Sales &amp; Installation</h3></div><div   class="description_info">' + car_audio_text + '</div></div><div class="cfmi">Shop All Car Audio</div></div></a>');
    }


    if (designer_block0 === '1') {
        $('#store_features').append('<a class="noblue"  title="Shop All Designer Appliances"  href="' + designer_block0_link + '"><div id="Designer" class="feature_box"><div  class="feature_image"><img style="width:100%"  itemprop="image" src="/images/promos/Designer_Appliances-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Designer Appliance Center</h3></div><div   class="description_info">' + Designer_text + '</div></div><div class="cfmi">Shop All Designer Appliances</div></div></a>');
    }


    if (elec_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Electronics"  href="' + elec_block0_link + '"><div id="electronics" class="feature_box"><div class="feature_image"><img  style="width:100%" itemprop="image" src="/images/promos/STORE-LOC2018-HDTVS.png"/></div><div class="feature_description"><div  class="description_title"><h3>Electronics</h3></div><div   class="description_info">' + electronics_text + '</div></div><div class="cfmi">Shop All Electronics</div></div></a>');
    }

    if (furniture_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Recliners &amp; Furniture"  href="' + furniture_block0_link + '"><div id="furniture" class="feature_box"><div class="feature_image"><img style="width:100%" itemprop="image" src="/images/promos/Recliners_Furniture-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Recliners &amp; Furniture</h3></div><div   class="description_info">' + Furniture_text + '</div></div><div class="cfmi">Shop All Recliners &amp; Furniture</div></div></a>');
    }


    if (home_audio_block0 === '1') {
        $('#store_features').append('<a class="noblue"  title="Shop All Home Audio"  href="' + home_audio_block0_link + '"><div id="Home_Audio" style="margin-top:0px" class="feature_box"><div  class="feature_image"><img style="width:100%" itemprop="image" src="/images/promos/Home_audio-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Home Audio</h3></div><div  class="description_info">' + Home_Audio_text + '</div></div><div class="cfmi">Shop All Home Audio</div></div></a>');
    }


    if (patio_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Patio Furniture"  href="' + patio_block0_link + '"><div id="yeti" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/PCR-patiofurniture-150x150.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Patio Furniture</h3></div><div   class="description_info">' + patio_text + '</div></div><div class="cfmi">Shop All Patio Furniture</div></div></a>');
    }


    if (smart_home_block0 === '1') {
        $('#store_features').append('<a class="noblue"  title="Shop All Smart Home"  href="' + smart_home_block0_link + '"><div id="Smart_Home" style="margin-top:0px" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/Smart_home-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Smart Home</h3></div><div  class="description_info">' + Smart_Home_text + '</div></div><div class="cfmi">Shop All Smart Home</div></div></a>');
    }


    if (surface_block0 === '1') {
        $('#store_features').append('<a class="noblue"  title="Shop All Microsoft Surface"  href="' + surface_block0_link + '"><div id="surface" style="margin-top:0px" class="feature_box"><div class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/Surface-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3>Surface</h3></div><div  class="description_info">' + surface_text + '</div></div><div class="cfmi">Shop All Microsoft Surface</div></div></a>');
    }



    if (Traeger_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Traeger Grills"  href="' + Traeger_block0_link + '"><div id="Traeger" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/girll-traeger-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Traeger Grills</h3></div><div   class="description_info">' + Traeger_text + '</div></div><div class="cfmi">Shop All Traeger Grills</div></div></a>');
    }


    //categorie in every store
    $('#store_features').append('<a class="noblue" title="Shop All Weber Grills"  href="' + weber_block0_link + '"><div id="Weber Grills" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/grill-weber-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Weber Grills</h3></div><div class="description_info">' + weber_text + '</div></div><div class="cfmi">Shop All Weber Grills</div></div></a>');
    //end


    if (Soda_stream0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All SodaStream"  href="' + Soda_stream_link + '"><div id="Sodastream" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/sodastream-products-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>SodaStream</h3></div><div   class="description_info">' + Soda_stream_text + '</div></div><div class="cfmi">Shop All SodaStream</div></div></a>');
    }

    if (Viper_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Viper Car Alarms &amp; Remote Starts"  href="' + Viper_block0_link + '"><div id="Viper" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/viper-products-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Viper Car Alarms &amp; Remote Starts</h3></div><div   class="description_info">' + Viper_text + '</div></div><div class="cfmi">Shop All Viper Car Alarms &amp; Remote Starts</div></div></a>');
    }


    if (yeti_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop All Yeti"  href="' + yeti_block0_link + '"><div id="yeti" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/Yeti-catagory-2018.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Yeti</h3></div><div   class="description_info">' + Yeti_text + '</div></div><div class="cfmi">Shop All Yeti</div></div></a>');
    }


    if (Clearance_center_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Shop  Our Clearance Center"  href="' + Clearance_center_link + '"><div id="Clearance_Center" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/clearance_center-catagory-2019.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Clearance Center</h3></div><div   class="description_info">' + Clearance_center_text + '</div></div><div class="cfmi">Learn More</div></div></a>');
    }

    if (Same_Day_Delivery_block0 === '1') {
        $('#store_features').append('<a class="noblue" title="Same Day Delivery"  href="' + Same_Day_Delivery_link + '"><div id="Same_Day_Delivery" class="feature_box"><div  class="feature_image"><img itemprop="image" style="width:100%" src="/images/promos/delivery-truck-150x150-d.jpg"/></div><div class="feature_description"><div  class="description_title"><h3><h3>Same Day Delivery</h3></div><div   class="description_info">' + Same_Day_Delivery_text + '</div></div><div class="cfmi">Learn More</div></div></a>');
    }



    $('.noblue').hover(function () {
        $(this).children('div').children('.feature_description').children('.description_title').css('color', 'rgb(3, 70, 148)');
    }, function () {
        $(this).children('div').children('.feature_description').children('.description_title').css('color', '#333');
    });


    $('.pcr-btn.simple span').hover(function () {
        $(this).css('color', '#fff');
    }, function () {
        $(this).css('color', '#034694');
    });


    double00 = ':00-';
    double01 = ':00';
    meta_open_mon = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(7)').children('open').text().slice(0, -2);
    meta_open_tues = $(xml).find('#' + store_number).children('next7Days').children('day:first-child').children('open').text().slice(0, -2);
    meta_open_wed = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(2)').children('open').text().slice(0, -2);
    meta_open_thurs = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(3)').children('open').text().slice(0, -2);
    meta_open_fri = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(4)').children('open').text().slice(0, -2);
    meta_open_sat = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(5)').children('open').text().slice(0, -2);
    meta_open_sun = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(6)').children('open').text().slice(0, -2);

    meta_close_mon = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:nth-child(7)').children('close').text().slice(0, -2)) - 12;
    meta_close_tues = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:first-child').children('close').text().slice(0, -2)) - 12;
    meta_close_wed = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:nth-child(2)').children('close').text().slice(0, -2)) - 12;
    meta_close_thurs = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:nth-child(3)').children('close').text().slice(0, -2)) - 12;
    meta_close_fri = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:nth-child(4)').children('close').text().slice(0, -2)) - 12;
    meta_close_sat = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:nth-child(5)').children('close').text().slice(0, -2)) - 12;
    meta_close_sun = parseInt($(xml).find('#' + store_number).children('next7Days').children('day:nth-child(6)').children('close').text().slice(0, -2)) - 12;



    if (meta_open_sun === '00') {
        meta_open_sun = 'Closed';
        meta_close_sun = '';
        double00 = '';
        double01 = '';
    }

    if (meta_open_sat === '00') {
        meta_open_sat = 'Closed';
        meta_close_sat = '';
        double00 = '';
        double01 = '';
    }

    if (meta_open_fri === '00') {
        meta_open_fri = 'Closed';
        meta_close_fri = '';
        double00 = '';
        double01 = '';
    }

    if (meta_open_sun === '09') {
        meta_open_sun = '9';

    }



    $('.store_hrs').append('<meta itemprop="openingHours" content="Mo ' + meta_open_mon + ':00-' + (meta_close_mon + 12) + ':00"/><meta itemprop="openingHours" content="Tu ' + meta_open_tues + ':00-' + (meta_close_tues + 12) + ':00"/><meta itemprop="openingHours" content="We ' + meta_open_wed + ':00-' + (meta_close_wed + 12) + ':00"/><meta itemprop="openingHours" content="Th ' + meta_open_thurs + ':00-' + (meta_close_thurs + 12) + ':00"/><meta itemprop="openingHours" content="Fr ' + meta_open_fri + ':00-' + (meta_close_fri + 12) + ':00' + '"/><meta itemprop="openingHours" content="Sa ' + meta_open_sat + ':00-' + (meta_close_sat + 12) + ':00' + '"/><meta itemprop="openingHours" content="Su ' + meta_open_sun + ':00-' + (meta_close_sun + 12) + ':00' + '"/>');

    if (meta_open_sun === 'Closed') {
        $('.store_hrs').children('meta:nth-child(8)').attr('content', 'Su Closed');
    }
    if (meta_open_sat === 'Closed') {
        $('.store_hrs').children('meta:nth-child(7)').attr('content', 'Sa Closed');
    }
    if (meta_open_fri === 'Closed') {
        $('.store_hrs').children('meta:nth-child(6)').attr('content', 'Fr Closed');
    }
    if (meta_open_thurs === 'Closed') {
        $('.store_hrs').children('meta:nth-child(5)').attr('content', 'Th Closed');
    }
    if (meta_open_wed === 'Closed') {
        $('.store_hrs').children('meta:nth-child(4)').attr('content', 'We Closed');
    }
    if (meta_open_tues === 'Closed') {
        $('.store_hrs').children('meta:nth-child(3)').attr('content', 'Tu Closed');
    }
    if (meta_open_mon === 'Closed') {
        $('.store_hrs').children('meta:nth-child(2)').attr('content', 'Mo Closed');
    }


    function changedayfunc() {

        switch (this_is_the_day) {
            case 0:
                $('.boldname').not('.nods').text('Mon').addClass('nods').addClass('mon');
                if (meta_open_mon === '09') {
                    meta_open_mon = '9';
                }
                $('.imopen0').html(meta_open_mon + ' AM<br>-<br>');
                $('.ahr0').html(meta_close_mon + ' PM');
                break;
            case 1:
                $('.boldname').not('.nods').text('Tue').addClass('nods').addClass('tues');
                if (meta_open_tues === '09') {
                    meta_open_tues = '9';
                }
                $('.imopen1').html(meta_open_tues + ' AM<br>-<br>');
                $('.ahr1').html(meta_close_tues + ' PM');
                break;
            case 2:
                $('.boldname').not('.nods').text('Wed').addClass('nods').addClass('wed');
                if (meta_open_wed === '09') {
                    meta_open_wed = '9';
                }
                $('.imopen2').html(meta_open_wed + ' AM<br>-<br>');
                $('.ahr2').html(meta_close_wed + ' PM');
                break;
            case 3:
                $('.boldname').not('.nods').text('Thu').addClass('nods').addClass('thu');
                if (meta_open_thurs === '09') {
                    meta_open_thurs = '9';
                }
                $('.imopen3').html(meta_open_thurs + ' AM<br>-<br>');
                $('.ahr3').html(meta_close_thurs + ' PM');
                break;
            case 4:
                $('.boldname').not('.nods').text('Fri').addClass('nods').addClass('fri');
                if (meta_open_fri === '09') {
                    meta_open_fri = '9';
                }
                $('.imopen4').html(meta_open_fri + ' AM<br>-<br>');
                $('.ahr4').html(meta_close_fri + ' PM');
                break;
            case 5:
                $('.boldname').not('.nods').text('Sat').addClass('nods').addClass('sat');
                if (meta_open_sat === '09') {
                    meta_open_sat = '9';
                }
                $('.imopen5').html(meta_open_sat + ' AM<br>-<br>');
                $('.ahr5').html(meta_close_sat + ' PM');
                break;
            case 6:
                $('.boldname').not('.nods').text('Sun').addClass('nods').addClass('sun');
                $('.imopen6').html(meta_open_sun + ' AM<br>-<br>');
                $('.ahr6').html(meta_close_sun + ' PM');


                if (n231 === $('.mon').text()) {
                    $('.mon').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>');
                }



                if (n231 === $('.tues').text()) {
                    $('.mon').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>');
                    $('.store_hrs').append('<div class="store_hrs_block">' + $('.mon').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.rev-m').remove();
                }




                if (n231 === $('.wed').text()) {
                    $('.mon').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>');
                    $('.store_hrs').append('<div class="store_hrs_block">' + $('.mon').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div class="store_hrs_block">' + $('.tues').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.rev-m').remove();
                }


                if (n231 === $('.thu').text()) {
                    $('.mon').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.mon').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.tues').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div class="store_hrs_block">' + $('.wed').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.rev-m').remove();
                }

                if (n231 === $('.fri').text()) {
                    $('.mon').append('<br>' + '<span  class="heresthedate">' + fourth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.mon').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.tues').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.wed').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div class="store_hrs_block">' + $('.thu').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.rev-m').remove();
                }


                if (n231 === $('.sat').text()) {
                    $('.mon').append('<br>' + '<span class="heresthedate">' + third_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.mon').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.tues').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.wed').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.thu').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div class="store_hrs_block">' + $('.fri').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.rev-m').remove();
                }


                if (n231 === $('.sun').text()) {
                    $('.mon').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.tues').append('<br>' + '<span class="heresthedate">' + third_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.wed').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.thu').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.fri').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.sat').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>').parent('div').css('display', 'none').addClass('rev-m');
                    $('.sun').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent('div').css('background-color', '#034694').css('color', '#fff');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.mon').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.tues').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.wed').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.thu').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.fri').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.store_hrs').append('<div  class="store_hrs_block">' + $('.sat').parent('div').html() + '</div>').parent('div').css('display', 'block');
                    $('.rev-m').remove();
                }


        }

        this_is_the_day++;
    }

    $(xml).find('#' + store_number).each(function () {
        $('.store_name').children('h1').text(store_name);
        $('#ATS').text('About ' + store_name);
        $('#AboutThisStore').text('About ' + store_name);
        $('.store_address').html('<h2><span itemprop="streetAddress">' + store_address + '</span><br id="monly"> <span itemprop="addressLocality">' + store_city + '</span>, ' + '<span itemprop="addressRegion">' + store_state + '</span>' + ' ' + '<span itemprop="postalCode">' + store_zip + '</span></h2>');
        $('.zip-dstore').attr('value', store_zip);
        $('.store_phone_number').html('<a href="tel:' + store_phone_number + '">' + '<span itemprop="telephone" content="+1' + store_phone_number + '">' + store_phone_number + '</span></a>');
        $('.store_photo').attr('src', $(xml).find('#' + store_number).children('storeImageURL').text());
        $('.store_photo').attr('alt', $('.store_name').text() + ' P.C. Richard & Son Store - Appliances, Electronics & Mattresses - ' + ' ' + $('.store_name').text() + ' ' + store_state + ' ' + store_zip);
        $('.store_photo').attr('title', $('.store_name').text() + ' P.C. Richard & Son Store - Appliances, Electronics & Mattresses - ' + ' ' + $('.store_name').text() + ' ' + store_state + ' ' + store_zip);


        $(xml).find('#' + store_number).children('next7Days').children('day').each(function () {
            openhrs_m = $(this).children('open').text().slice(0, -2) + ':00';
            closehrs_m = (parseInt($(this).children('close').text().slice(0, -2)) - 12) + ':00';
            openhrs = $(this).children('open').text().slice(0, -2) + ' AM<br>-<br>';
            closehrs = parseInt($(this).children('close').text().slice(0, -2)) - 12 + ' PM<br>';
            deviation = $('#' + store_number).children('deviation').text();

            if (openhrs === '08 AM<br>-<br>') {
                openhrs = '8 AM<br>-<br>';
            }

            if (openhrs === '09 AM<br>-<br>') {
                openhrs = '9 AM<br>-<br>';
            }

            if (closehrs === '09 PM<br>') {
                closehrs = '9 PM<br>';
            }
            if (closehrs === '06 PM<br>') {
                closehrs = '6 PM<br>';
            }

            if (openhrs === 'NaN AM<br>-<br>') {
                openhrs = '';
            }
            if (closehrs === 'NaN PM<br>') {
                closehrs = '';
            }




            $('.store_hrs').append('<div class="store_hrs_block">' + '<span class="boldname"></span>' + '<br><span class="imopen' + this_is_the_day + '"></span><span class="ahr' + this_is_the_day + '"></span></div>');
            changedayfunc();

        });




        function extratime() {
            if ($('.imopen6').text() === 'Closed AM-') {
                $('.ahr6').empty();
                $('.imopen6').html('<br><strong>Closed</strong><br><br>');
            }

            if ($('.imopen5').text() === 'Closed AM-') {
                $('.ahr5').empty();
                $('.imopen5').html('<br><strong>Closed</strong><br><br>');
            }
            if ($('.imopen4').text() === 'Closed AM-') {
                $('.ahr4').empty();
                $('.imopen4').html('<br><strong>Closed</strong><br><br>');
            }
            if ($('.imopen3').text() === 'Closed AM-') {
                $('.ahr3').empty();
                $('.imopen3').html('<br><strong>Closed</strong><br><br>');
            }
            if ($('.imopen2').text() === 'Closed AM-') {
                $('.ahr2').empty();
                $('.imopen2').html('<br><strong>Closed</strong><br><br>');
            }
            if ($('.imopen1').text() === 'Closed AM-') {
                $('.ahr1').empty();
                $('.imopen1').html('<br><strong>Closed</strong><br><br>');
            }
            if ($('.imopen0').text() === 'Closed AM-') {
                $('.ahr0').empty();
                $('.imopen0').html('<br><strong>Closed</strong><br><br>');
            }


            


        }

        switch (mydate21) {
            case 1:
                select_the_day1 = 7;
                select_the_day2 = 1;
                select_the_day3 = 2;
                break;

            case 2:
                select_the_day1 = 1;
                select_the_day2 = 2;
                select_the_day3 = 3;
                break;

            case 3:
                select_the_day1 = 2;
                select_the_day2 = 3;
                select_the_day3 = 4;
                break;

            case 4:
                select_the_day1 = 3;
                select_the_day2 = 4;
                select_the_day3 = 5;
                break;

            case 5:
                select_the_day1 = 4;
                select_the_day2 = 5;
                select_the_day3 = 6;
                break;

            case 6:
                select_the_day1 = 5;
                select_the_day2 = 6;
                select_the_day3 = 7;
                break;

            case 0:
                select_the_day1 = 6;
                select_the_day2 = 7;
                select_the_day3 = 1;

        }



        switch (new Date().getDay()) {
            case 0:
                day_tomorow = "Mon";
                day_tomorow2 = "Tues";
                break;
            case 1:
                day_tomorow = "Tues";
                day_tomorow2 = "Wed";
                break;
            case 2:
                day_tomorow = "Wed";
                day_tomorow2 = "Thurs";
                break;
            case 3:
                day_tomorow = "Thurs";
                day_tomorow2 = "Fri";
                break;
            case 4:
                day_tomorow = "Fri";
                day_tomorow2 = "Sat";
                break;
            case 5:
                day_tomorow = "Sat";
                day_tomorow2 = "Sun";
                break;
            case 6:
                day_tomorow = "Sun";
                day_tomorow2 = "Mon";
                break;
        }



        /*-------------------------------------------------------------------------------------------------------*/



        finder3 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child(' + select_the_day1 + ')').children('close').text());
        finder3a = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child(' + select_the_day1 + ')').children('open').text());

        finder4 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child(' + select_the_day2 + ')').children('open').text());
        finder5 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child(' + select_the_day3 + ')').children('open').text());
        deviation_closed = $(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child(' + select_the_day1 + ')').children('deviationReason').text();
        deviation_closeda = $(xml).find('#' + $(this).attr('id')).children('next7Days').children('day:nth-child(' + select_the_day2 + ')').children('deviationReason').text();

        if (myhour21 < finder3) {
            $('.open_today_until').text('Open Today Until ' + parseInt(finder3 / 100 - 12) + ' PM');
        }

        if (myhour21 >= finder3) {
            $('.open_today_until').text('Closed Til Tomorrow at ' + finder4 / 100 + ' AM');
            if (deviation_closeda === 'Closed') {
                $('.open_today_until').text('Closed Til ' + day_tomorow2 + ' at ' + finder5 / 100 + ' AM');
            }
        }

        if (myhour21 < finder3a) {
            $('.open_today_until').text('Opens Today at ' + finder3a / 100 + ' AM');
        }

        if (deviation_closed === 'Closed') {
            $('.open_today_until').text('Closed Til ' + day_tomorow + ' at ' + parseInt(finder4) / 100 + ' AM');
            //  $('.imopen6').html('<br>Closed<br><br>');
            // $('.ahr6').text('');
        }

        if ($('.imopen0').text() === 'Closed AM-') {
            $('.imopen0').html('<br><strong>Closed</strong><br><br>');
            $('.ahr0').html('');
        }
        if ($('.imopen1').text() === 'Closed AM-') {
            $('.imopen1').html('<br><strong>Closed</strong><br><br>');
            $('.ahr1').html('');
        }
        if ($('.imopen2').text() === 'Closed AM-') {
            $('.imopen2').html('<br><strong>Closed</strong><br><br>');
            $('.ahr2').html('');
        }
        if ($('.imopen3').text() === 'Closed AM-') {
            $('.imopen3').html('<br><strong>Closed</strong><br><br>');
            $('.ahr3').html('');
        }
        if ($('.imopen4').text() === 'Closed AM-') {
            $('.imopen4').html('<br><strong>Closed</strong><br><br>');
            $('.ahr4').html('');
        }
        if ($('.imopen5').text() === 'Closed AM-') {
            $('.imopen5').html('<br><strong>Closed</strong><br><br>');
            $('.ahr5').html('');
        }
        if ($('.imopen6').text() === 'Closed AM-') {
            $('.imopen6').html('<br><strong>Closed</strong><br><br>');
            $('.ahr6').html('');
        }

        if ($('.imopen0').text() === '00 AM-') {
            $('.imopen0').html('<br><strong>Closed</strong><br><br>');
            $('.ahr0').html('');
        }
        if ($('.imopen1').text() === '00 AM-') {
            $('.imopen1').html('<br><strong>Closed</strong><br><br>');
            $('.ahr1').html('');
        }
           if ($('.imopen2').text() === '00 AM-') {
            $('.imopen2').html('<br><strong>Closed</strong><br><br>');
            $('.ahr2').html('');
        }

        if ($('.imopen3').text() === '00 AM-') {
            $('.imopen3').html('<br><strong>Closed</strong><br><br>');
            $('.ahr3').html('');
        }
        if ($('.imopen4').text() === '00 AM-') {
            $('.imopen4').html('<br><strong>Closed</strong><br><br>');
            $('.ahr4').html('');
        }
        if ($('.imopen5').text() === '00 AM-') {
            $('.imopen5').html('<br><strong>Closed</strong><br><br>');
            $('.ahr5').html('');
        }
        if ($('.imopen6').text() === '00 AM-') {
            $('.imopen6').html('<br><strong>Closed</strong><br><br>');
            $('.ahr6').html('');
        }



        if ($('.imopen0').text() === '07 AM-') {
         $('.imopen0').html('7 AM<br>-<br>');
        }
        if ($('.imopen1').text() === '07 AM-') {
         $('.imopen1').html('7 AM<br>-<br>');
        }
         if ($('.imopen2').text() === '07 AM-') {
         $('.imopen2').html('7 AM<br>-<br>');
        }
        if ($('.imopen3').text() === '07 AM-') {
          $('.imopen3').html('7 AM<br>-<br>');
        }
        if ($('.imopen4').text() === '07 AM-') {
          $('.imopen4').html('7 AM<br>-<br>');
        }
        if ($('.imopen5').text() === '07 AM-') {
         $('.imopen5').html('7 AM<br>-<br>');
        }
        if ($('.imopen6').text() === '07 AM-') {
         $('.imopen6').html('7 AM<br>-<br>');
           
        }


    });
}




var str = document.location.href.replace(/-/g, " ");
var arraystores = str.split('/');

$('ul.breadcrumbs>li:nth-child(1)').after('<li><a title="Stores" href="/storelocator/store-landing.jsp" class="ico">Stores</a></li><li><a title="State" href="/storelocator/store-landing.jsp" class="ico">' + arraystores[4] + '</a></li><li><a title="Stores in Neighborhood" href="/storelocator/store-landing.jsp?location=' + arraystores[5].replace(' ', '_') + '" class="ico">' + arraystores[5] + '</a></li>');
breadcrumb_last = $('ul.breadcrumbs>li:nth-child(5)').children('a').attr('href');
$('ul.breadcrumbs>li:nth-child(5)').children('a').attr('href', breadcrumb_last).attr('title', $('.store_name h1').text() + ' Store');

$('.store_directions').on('click', function () {
    "use strict";
    window.open('http://maps.google.com/?q=P.C.+Richard+and+Son+' + $('.store_address').text(), '_blank');
});

$("iframe").attr('title', 'Google Map');
$('.store_address').on('click', function () {
    "use strict";
    window.open('http://maps.google.com/?q=P.C.+Richard+and+Son+' + $('.store_address').text(), '_blank');
});