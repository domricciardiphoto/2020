$('head').append('<meta http-equiv="cache-control" content="max-age=0"><meta http-equiv="cache-control" content="no-cache"><meta http-equiv="expires" content="-1"><meta http-equiv="expires" content="Tue, 01 Jan 1980 11:00:00 GMT"><meta http-equiv="pragma" content="no-cache">');

$.getScript( "https://apps.bazaarvoice.com/deployments/pcrichardson-stores/main_site/production/en_US/bv.js", function( data, textStatus, jqxhr ) {
    console.log( textStatus ); // Success
    console.log( jqxhr.status ); // 200
  });

    window.history.pushState("", store_number, "?store="+store_number);
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
    date0a.setDate(date0a.getDate()-1);

    var date1a = new Date();
    date1a.setDate(date1a.getDate()-2);

    var date2a = new Date();
    date2a.setDate(date2a.getDate()-3);

    var date3a = new Date();
    date3a.setDate(date3a.getDate()-4);

    var date4a = new Date();
    date4a.setDate(date4a.getDate()-5);

    var date5a = new Date();
    date5a.setDate(date5a.getDate()-6);

    var date6a = new Date();
    date6a.setDate(date6a.getDate()-7);

    var date0 = new Date();
    date0.setDate(date0.getDate());

     var date1 = new Date();
    date1.setDate(date1.getDate()+1);

     var date2 = new Date();
    date2.setDate(date2.getDate()+2);

     var date3 = new Date();
    date3.setDate(date3.getDate()+3);

     var date4 = new Date();
    date4.setDate(date4.getDate()+4);

     var date5 = new Date();
    date5.setDate(date5.getDate()+5);

     var date6 = new Date();
    date6.setDate(date6.getDate()+6);

     var date7 = new Date();
    date7.setDate(date7.getDate()+7);


 monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.",
  "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
];

  

    sixdaysbk_n =    (monthNames[date6a.getMonth()])+' '+ date6a.getDate();
    fivedaysbk_n =   (monthNames[date5a.getMonth()])+' '+ date5a.getDate();
    fourdaysbk_n =   (monthNames[date4a.getMonth()])+' '+ date4a.getDate();
    threedaysbk_n =  (monthNames[date3a.getMonth()])+' '+ date3a.getDate();
    twodaysbk_n =    (monthNames[date2a.getMonth()])+' '+ date2a.getDate();
    onedaybefore_n = (monthNames[date1a.getMonth()])+' '+ date1a.getDate();
    yesterday_n =    (monthNames[date0a.getMonth()])+' '+ date0a.getDate();

    today_n =        (monthNames[date0.getMonth()])+' '+ date0.getDate();

    tomorrow_n =     (monthNames[date1.getMonth()])+' '+ date1.getDate();
    third_n =        (monthNames[date2.getMonth()])+' '+ date2.getDate();
    fourth_n =       (monthNames[date3.getMonth()])+' '+ date3.getDate();
    fifth_n =        (monthNames[date4.getMonth()])+' '+ date4.getDate();
    sixth_n =        (monthNames[date5.getMonth()])+' '+ date5.getDate();
    seventh_n =      (monthNames[date6.getMonth()])+' '+ date6.getDate();
    eightth_n =      (monthNames[date7.getMonth()])+' '+ date7.getDate();


  store_list = '/images/promos/pcr_stores_20180507_153427.xml';
  this_is_the_day = 0;
  mysetstore = "'"+store_number+"'";
  openhrs = '';
  closehrs = '';
  store_im_click = '0';
  setStore = "'setStore'";
  formattedNumber = ("0" + store_number).slice(-2);


 $('#contentContainer').children('div.customer-service').children('div.page-block').removeClass('customer').append('<div class="wrapper-d store" itemscope itemtype="http://schema.org/LocalBusiness"><div class=content_100 id=location_store><div class="scroller"><div class="store_photo" itemprop="image" ></div><div class=store_map itemprop="hasMap"></div></div></div><div class=content_100><div class="store_info"><div class=store_name><h1 itemprop="name"></h1></div><div class=store_rating> <div data-bv-show="rating_summary" data-bv-productId="PCR0'+formattedNumber+'"></div></div><div class=store_address itemscope itemtype="http://schema.org/PostalAddress" itemprop="address" data-country="US"></div><div class=store_phone_number></div><div class=store_mystore></div></div><div class=store_hrs><div class=open_today_until></div></div></div><div class="store_titles"><h2 id="ATS">About</h2></div><hr><div id="store_description-parent" class=content_100><div itemprop="description" class=store_description></div></div><div class=store_titles id=total_events><h2 id=Upcoming_store></h2></div><hr id=store_events_hr><div class=content_100 id=store_events></div><div class=store_titles><h2>Store Features</h2></div><hr><div class=content_100 id=store_features></div><div class="content_100 store_reviews"id=reviews><div data-bv-show="reviews" data-bv-productId="PCR0'+formattedNumber+'"></div></div></div>');

  

$('.store_map').html(store_google_map);
$('.store_description').text(store_description);

$.ajax({
type:"GET",
url:store_list,
dataType:"xml",
success:xmlParser,
error: function() { 
    $.ajax({
        url:store_list,
        dataType:"xml",
        success:xmlParser
    });
}  
});


appliance_block0_link = '/category/Appliances-Housewares/_/N-f2t6zn';
tv_block0_link = '/category/TV-Video/Flat-Panel-TVs/_/N-1ellc99';
mattress_block0_link = '/category/Home-Furnishings/Mattresses-Foundations/_/N-nlpcap';
apple_block0_link = '/content/apple';
car_block0_link = '/category/Car-Audio-Video-GPS/_/N-4h6m9x';
designer_block0_link = '/category/LP/Designer-Appliances/_/N-15kfep1';
elec_block0_link = '/category/Home-Portable-Audio/_/N-82xgym';
home_audio_block0_link = '/category/Home-Portable-Audio/_/N-82xgym';
smart_home_block0_link = '/category/Smart-Home/_/N-8mj75p';
surface_block0_link = '/browse?Ntt=Microsoft+Surface';
yeti_block0_link = '/browse/YETI/_/N-1esresv';
furniture_block0_link = '/category/Home-Furnishings/_/N-10gwzg3';
key21 = $( "input[name='_dynSessConf']" ).val();


function xmlParser(xml) {
var store_name = $(xml).find('#'+store_number).children('name').text();
var store_phone_number = $(xml).find('#'+store_number).children('phone').text();

var store_address = $(xml).find('#'+store_number).children('address1').text();
var store_state = $(xml).find('#'+store_number).children('state').text();
var store_zip = $(xml).find('#'+store_number).children('zip').text();


$('.store_mystore').html('<form id="store" action="/storelocator/store-landing.jsp?_DARGS=/storelocator/store-detail.jsp" method="post"><div style="display:none"><input name="_dyncharset" value="UTF-8" type="hidden"/> </div><div style="display:none"><input name="_dynSessConf" value="'+key21+'" type="hidden"/> </div><div class="buttons"> <input id="setStore" style="display:none;" name="/atg/userprofiling/ProfileFormHandler.store" value="Set as My Store" class="pcr-btn blue simple" type="submit"/><input name="_D:/atg/userprofiling/ProfileFormHandler.store" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.storeSuccessURL" value="/index.jsp" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.storeSuccessURL" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.storeErrorURL" value="/storelocator/store-landing.jsp" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.storeErrorURL" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.myStore" value="'+store_number+'" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.myStore" value=" " type="hidden"/><input name="/atg/userprofiling/ProfileFormHandler.findStoreZip" value="'+store_zip+'" type="hidden"/><input name="_D:/atg/userprofiling/ProfileFormHandler.findStoreZip" value=" " type="hidden"/><a class="pcr-btn simple gradient" href="#" title="Set as My Store" onkeypress="clickOnId('+setStore+');" onclick="clickOnId('+setStore+');"><span>Set as My Store</span></a> </div><div style="display:none"><input name="_DARGS" value="/storelocator/store-detail.jsp" type="hidden"/> </div></form>');


        if (appliance_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Appliances &amp; Housewares" title="Shop All Appliances &amp; Housewares" href="'+appliance_block0_link+'"><div id="appliances" class="feature_box"><div id="icons2018-4"  class="feature_image"></div><div class="feature_description"><div class="description_title">Appliances &amp; Housewares</div><div class="description_info"><h3>' + appliances_text  +'</h3></div></div><div class="cfmi">Shop All Appliances &amp; Housewares</div></div></a>');
        }


        if (tv_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="HDTVs" title="Shop All HDTVs"  href="'+tv_block0_link+'"><div id="HDTVs" class="feature_box"><div  id="icons2018-7"  class="feature_image"></div><div class="feature_description"><div class="description_title">HDTVs</div><div class="description_info"><h3>' + TV_text +'</h3></div></div><div class="cfmi">Shop All HDTVs</div></div></a>');
        }    

        if (mattress_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Mattresses"  title="Shop All Mattresses"  href="'+mattress_block0_link+'"><div id="mattress" class="feature_box"><div id="icons2018-3"  class="feature_image"></div><div class="feature_description"><div class="description_title">Mattress</div><div class="description_info"><h3>' + mattress_text +'</h3></div></div><div class="cfmi">Shop All Mattresses</div></div></a>');
        }

        
        if (apple_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Apple" title="Shop All Apple"  href="'+apple_block0_link+'"><div id="apple" class="feature_box"><div id="icons2018-1" class="feature_image"></div><div class="feature_description"><div class="description_title">Apple</div><div class="description_info"><h3>' + apple_text+'</h3></div></div><div class="cfmi">Shop All Apple</div></div></a>');
        }

        if (car_block0  === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Car Audio" title="Shop All Car Audio"  href="'+car_block0_link+'"><div id="car_audio" class="feature_box"><div id="icons2018-2"  class="feature_image"></div><div class="feature_description"><div class="description_title">Car Audio Sales &amp; Installation</div><div class="description_info"><h3>' + car_audio_text +'</h3></div></div><div class="cfmi">Shop All Car Audio</div></div></a>');
        }

        
        if (designer_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Designer Appliances"  title="Shop All Designer Appliances"  href="'+designer_block0_link+'"><div id="Designer" class="feature_box"><div  id="icons2018-8"  class="feature_image"></div><div class="feature_description"><div class="description_title">Designer Appliance Center</div><div class="description_info"><h3>' + Designer_text +'</h3></div></div><div class="cfmi">Shop All Designer Appliances</div></div></a>');
        }

    
        if (elec_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Electronics" title="Shop All Electronics"  href="'+elec_block0_link+'"><div id="electronics" class="feature_box"><div id="icons2018-5"  class="feature_image"></div><div class="feature_description"><div class="description_title">Electronics</div><div class="description_info"><h3>'+electronics_text+'</h3></div></div><div class="cfmi">Shop All Electronics</div></div></a>');
        }

      if (furniture_block0=== '1') {
            $('#store_features').append('<a class="noblue" itemprop="Recliners &amp; Furniture" title="Shop All Recliners &amp; Furniture"  href="'+furniture_block0_link+'"><div id="furniture" class="feature_box"><div  id="icons2018-11"  class="feature_image"></div><div class="feature_description"><div class="description_title">Recliners &amp; Furniture</div><div class="description_info"><h3>' + Furniture_text +'</h3></div></div><div class="cfmi">Shop All Recliners &amp; Furniture</div></div></a>');
        }
           
      
        if (home_audio_block0 === '1') {
            $('#store_features').append('<a class="noblue"  itemprop="Home Audio"  title="Shop All Home Audio"  href="'+home_audio_block0_link+'"><div id="Home_Audio" style="margin-top:0px" class="feature_box"><div  id="icons2018-9"  class="feature_image"></div><div class="feature_description"><div class="description_title">Home Audio</div><div class="description_info"><h3>' + Home_Audio_text +'</h3></div></div><div class="cfmi">Shop All Home Audio</div></div></a>');
        }

        if (smart_home_block0=== '1') {
            $('#store_features').append('<a class="noblue"  itemprop="Smart Home" title="Shop All Smart Home"  href="'+smart_home_block0_link+'"><div id="Smart_Home" style="margin-top:0px" class="feature_box"><div  id="icons2018-10"  class="feature_image"></div><div class="feature_description"><div class="description_title">Smart Home</div><div class="description_info"><h3>' + Smart_Home_text +'</h3></div></div><div class="cfmi">Shop All Smart Home</div></div></a>');
        }
  

        if (surface_block0 === '1') {
            $('#store_features').append('<a class="noblue"  itemprop="Microsoft Surface" title="Shop All Microsoft Surface"  href="'+surface_block0_link+'"><div id="surface" style="margin-top:0px" class="feature_box"><div  id="icons2018-6"  class="feature_image"></div><div class="feature_description"><div class="description_title">Surface</div><div class="description_info"><h3>' + surface_text +'</h3></div></div><div class="cfmi">Shop All Microsoft Surface</div></div></a>');
        }


        if (yeti_block0 === '1') {
            $('#store_features').append('<a class="noblue" itemprop="Yeti" title="Shop All Yeti"  href="'+yeti_block0_link+'"><div id="yeti" class="feature_box"><div  id="icons2018-12"  class="feature_image"></div><div class="feature_description"><div class="description_title">Yeti</div><div class="description_info"><h3>' + Yeti_text+'</h3></div></div><div class="cfmi">Shop All Yeti</div></div></a>');
        }


$('.noblue').hover(function() {
$(this).children('div').children('.feature_description').children('.description_title').css('color' , 'rgb(3, 70, 148)');
}, function() {
$(this).children('div').children('.feature_description').children('.description_title').css('color' , '#333');
});




function changedayfunc() {

switch (this_is_the_day) {
    case 0:
        $('.boldname').not('.nods').text('Mon').addClass('nods').addClass('mon');
        break;
    case 1:
        $('.boldname').not('.nods').text('Tue').addClass('nods').addClass('tues');
        break;
    case 2:
        $('.boldname').not('.nods').text('Wed').addClass('nods').addClass('wed');
        break;
    case 3:
         $('.boldname').not('.nods').text('Thu').addClass('nods').addClass('thu');
        break;
    case 4:
          $('.boldname').not('.nods').text('Fri').addClass('nods').addClass('fri');
        break;
    case 5:
          $('.boldname').not('.nods').text('Sat').addClass('nods').addClass('sat');
        break;
    case 6:
         $('.boldname').not('.nods').text('Sun').addClass('nods').addClass('sun');
         


  if(n231 === $('.mon').text()) {
     $('.mon').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
     $('.tues').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>');
     $('.wed').append('<br>'+'<span class="heresthedate">'+third_n+'</span>');
     $('.thu').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>');
     $('.fri').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>');
     $('.sat').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>');
     $('.sun').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>');
}



  if(n231 === $('.tues').text()) {
    $('.mon').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.tues').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
    $('.wed').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>');
    $('.thu').append('<br>'+'<span class="heresthedate">'+third_n+'</span>');
    $('.fri').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>');
    $('.sat').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>');
    $('.sun').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.mon').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.rev-m').remove();
}




  if(n231 === $('.wed').text()) {
    $('.mon').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.tues').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.wed').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
    $('.thu').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>');
    $('.fri').append('<br>'+'<span class="heresthedate">'+third_n+'</span>');
    $('.sat').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>');
    $('.sun').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>');
    $('.store_hrs').append('<div itemprop="openingHours"  class="store_hrs_block">'+$('.mon').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours"  class="store_hrs_block">'+$('.tues').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.rev-m').remove();
}


  if(n231 === $('.thu').text()) {
    $('.mon').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.tues').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.wed').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.thu').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
    $('.fri').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>');
    $('.sat').append('<br>'+'<span class="heresthedate">'+third_n+'</span>');
    $('.sun').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.mon').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.tues').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.wed').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.rev-m').remove();
}

  if(n231 === $('.fri').text()) {
    $('.mon').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.tues').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.wed').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.thu').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.fri').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
    $('.sat').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>');
    $('.sun').append('<br>'+'<span class="heresthedate">'+third_n+'</span>');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.mon').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.tues').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.wed').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.thu').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.rev-m').remove();
}


  if(n231 === $('.sat').text()) {
    $('.mon').append('<br>'+'<span class="heresthedate">'+third_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.tues').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.wed').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.thu').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.fri').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.sat').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
    $('.sun').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.mon').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.tues').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.wed').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.thu').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.fri').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.rev-m').remove();
}


  if(n231 === $('.sun').text()) {
    $('.mon').append('<br>'+'<span class="heresthedate">'+tomorrow_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.tues').append('<br>'+'<span class="heresthedate">'+third_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.wed').append('<br>'+'<span class="heresthedate">'+fourth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.thu').append('<br>'+'<span class="heresthedate">'+fifth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.fri').append('<br>'+'<span class="heresthedate">'+sixth_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.sat').append('<br>'+'<span class="heresthedate">'+seventh_n+'</span>').parent('div').css('display' , 'none').addClass('rev-m');
    $('.sun').append('<br>'+'<span class="heresthedate">'+today_n+'</span>').parent('div').css('background-color' , '#034694').css('color' , '#fff');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.mon').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.tues').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.wed').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.thu').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.fri').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+$('.sat').parent('div').html()+'</div>').parent('div').css('display' , 'block');
    $('.rev-m').remove();
}


}

this_is_the_day++;       
}

    $(xml).find('#'+store_number).each(function() {
        $('.store_name').children('h1').text(store_name);
         $('#ATS').text('About ' +store_name);
        $('#AboutThisStore').text('About ' + store_name);
        $('.store_address').html('<h2><span itemprop="streetAddress">'+store_address+'</span>,<br id="monly"> <span itemprop="addressLocality">'+store_name+'</span>, '+'<span itemprop="addressRegion">'+store_state+'</span>'+' '+'<span itemprop="postalCode">'+store_zip+'</span></h2>');
        $('.zip-dstore').attr('value' , store_zip);
        $('.store_phone_number').html('<a href="tel:'+store_phone_number+'">'+'<span itemprop="telephone">'+store_phone_number+'</span></a>');
      
      if(store_number === 3 || 4 || 7 || 8 || 14 || 16 || 27 || 28 || 32 || 37 || 41 || 42 || 43 || 44 || 47 || 48 || 50 || 52 || 56 || 60 || 62 || 65 || 75 || 80 || 81 || 90) {
        $('.store_photo').css('background-image', 'url(/images/promos/pcr-store-2018-'+store_number+'.jpg)');
      } else {
        $('.store_photo').css('background-image', 'url(https://www.pcrichard.com/images/promos/'+$(xml).find('#'+store_number).children('storeImageURL').text()+')');
      }
      
        $(xml).find('#'+store_number).children('next7Days').children('day').each(function() {
            openhrs = $(this).children('open').text().slice(0,-2)+' AM<br>-<br>';
            closehrs = $(this).children('close').text().slice(0,-2)+' PM<br>';


if(openhrs === '08 AM<br>-<br>') {
    openhrs = '8 AM<br>-<br>';
}
            
if(openhrs === '09 AM<br>-<br>') {
    openhrs = '9 AM<br>-<br>';
}

if(closehrs === '09 PM<br>') {
    closehrs = '9 PM<br>';
}
if(closehrs === '06 PM<br>') {
    closehrs = '6 PM<br>';
}

if(openhrs === 'NaN AM<br>-<br>') {
    openhrs = '';
}
if(closehrs === 'NaN PM<br>') {
    closehrs = '';
}

$('.store_hrs').append('<div itemprop="openingHours" class="store_hrs_block">'+'<span class="boldname"></span>'+'<br>'+openhrs+'<span class="ahr'+this_is_the_day+'">'+closehrs+'</span>'+$(this).children('deviationReason').text()+"</div>");
            changedayfunc();
        });



switch (new Date().getDay()) {
    case 0:
        $('.open_today_until').append('Open Today Until '+$('.ahr0').text());
        break;
    case 1:
        $('.open_today_until').append('Open Today Until '+$('.ahr1').text());
        break;
    case 2:
        $('.open_today_until').append('Open Today Until '+$('.ahr2').text());
        break;
    case 3:
        $('.open_today_until').append('Open Today Until '+$('.ahr3').text());
        break;
    case 4:
        $('.open_today_until').append('Open Today Until '+$('.ahr4').text());
        break;
    case 5:
        $('.open_today_until').append('Open Today Until '+$('.ahr5').text());
        break;
    case 6:
        $('.open_today_until').append('Open Today Until '+$('.ahr6').text());
}
     
    });
}


        var event1 = ' <div class="store_event" style="margin-right:0.5%"> <div class="store_event_photo"> <img src="/images/promos/' + event1_image + '" /></div> <div class="store_event_info"><div class="event_title">' + event1_title + '</div><div class="event_des">' + event1_description + '</div><div class="event_des">' + event1_time +'</div></div></div>';

        var event2 = ' <div class="store_event"  style="margin-left:0.5%"> <div class="store_event_photo"> <img src="/images/promos/' + event2_image + '" /></div> <div class="store_event_info"><div class="event_title">' + event2_title + '</div><div class="event_des">' + event2_description + '</div><div class="event_des">' + event2_time + '</div></div></div>';


        if (event_amount === 2) {
            $('#store_events').append(event1 + event2);
        }
        if (event_amount === 1) {
            $('#store_events').append(event1);
            $('.store_event').css('width', '100%').css('margin', '0%');
            $('.store_event_photo').css('margin-top', '0.5%').css('margin-left' , '-0.5%');

        }

        if (event_amount === 0) {
            $('#store_events').hide();
            $('#total_events').hide();
            $('#store_events_hr').hide();
        }


var str = document.location.href.replace(/-/g, " ");
var arraystores = str.split('/');

$('ul.breadcrumbs>li:nth-child(1)').after('<li><a title="Stores" href="/storelocator/store-landing.jsp" class="ico">Stores</a></li><li><a title="Store Locator" href="/storelocator/store-landing.jsp" class="ico">'+arraystores[4]+'</a></li><li><a title="Stores in Neighborhood" href="/Stores/'+arraystores[5]+'" class="ico">'+arraystores[5]+'</a></li>');


$("iframe").attr('title' , 'Google Map');
$('.store_address').on('click' , function() {
window.open('http://maps.google.com/?q='+$(this).text(),'_blank');





});