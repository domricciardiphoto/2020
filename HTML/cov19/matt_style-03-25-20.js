window.addEventListener('DOMContentLoaded', function () {



    //$.getScript("https://apps.bazaarvoice.com/deployments/pcrichardson-stores/main_site/production/en_US/bv.js", function (data, textStatus, jqxhr) {

    //});




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


    store_list = '/images/promos/PCR-Stores.xml';
    this_is_the_day = 0;
    mysetstore = "'" + store_number + "'";
    openhrs = '';
    closehrs = '';
    store_im_click = '0';
    setStore = "'setStore'";
    formattedNumber = ("0" + store_number).slice(-2);






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
        var grg_link = 'http://maps.google.com/?q=P.C.+Richard+and+Son+' + store_address + "+" + store_city +
            '+' + store_state + "+" + store_zip;


        mydate21 = new Date().getDay();
        myhour21 = new Date().getHours() * 100





        double00 = ':00-';
        double01 = ':00';
        meta_open_mon = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(7)')
            .children('open').text().slice(0, -2);
        meta_open_tues = $(xml).find('#' + store_number).children('next7Days').children('day:first-child')
            .children('open').text().slice(0, -2);
        meta_open_wed = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(2)')
            .children('open').text().slice(0, -2);
        meta_open_thurs = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(3)')
            .children('open').text().slice(0, -2);
        meta_open_fri = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(4)')
            .children('open').text().slice(0, -2);
        meta_open_sat = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(5)')
            .children('open').text().slice(0, -2);
        meta_open_sun = $(xml).find('#' + store_number).children('next7Days').children('day:nth-child(6)')
            .children('open').text().slice(0, -2);

        meta_close_mon = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:nth-child(7)').children('close').text().slice(0, -2)) - 12;
        meta_close_tues = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:first-child').children('close').text().slice(0, -2)) - 12;
        meta_close_wed = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:nth-child(2)').children('close').text().slice(0, -2)) - 12;
        meta_close_thurs = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:nth-child(3)').children('close').text().slice(0, -2)) - 12;
        meta_close_fri = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:nth-child(4)').children('close').text().slice(0, -2)) - 12;
        meta_close_sat = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:nth-child(5)').children('close').text().slice(0, -2)) - 12;
        meta_close_sun = parseInt($(xml).find('#' + store_number).children('next7Days').children(
            'day:nth-child(6)').children('close').text().slice(0, -2)) - 12;



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



        $('.store_hrs_list').append('<meta itemprop="openingHours" content="Mo ' + meta_open_mon + ':00-' + (
                meta_close_mon + 12) + ':00"/><meta itemprop="openingHours" content="Tu ' +
            meta_open_tues + ':00-' + (meta_close_tues + 12) +
            ':00"/><meta itemprop="openingHours" content="We ' + meta_open_wed + ':00-' + (meta_close_wed +
                12) + ':00"/><meta itemprop="openingHours" content="Th ' + meta_open_thurs + ':00-' + (
                meta_close_thurs + 12) + ':00"/><meta itemprop="openingHours" content="Fr ' +
            meta_open_fri + ':00-' + (meta_close_fri + 12) + ':00' +
            '"/><meta itemprop="openingHours" content="Sa ' + meta_open_sat + ':00-' + (meta_close_sat +
                12) + ':00' + '"/><meta itemprop="openingHours" content="Su ' + meta_open_sun + ':00-' + (
                meta_close_sun + 12) + ':00' + '"/>');

        if (meta_open_sun === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(8)').attr('content', 'Su Closed');
        }
        if (meta_open_sat === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(7)').attr('content', 'Sa Closed');
        }
        if (meta_open_fri === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(6)').attr('content', 'Fr Closed');
        }
        if (meta_open_thurs === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(5)').attr('content', 'Th Closed');
        }
        if (meta_open_wed === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(4)').attr('content', 'We Closed');
        }
        if (meta_open_tues === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(3)').attr('content', 'Tu Closed');
        }
        if (meta_open_mon === 'Closed') {
            $('.store_hrs_list').children('meta:nth-child(2)').attr('content', 'Mo Closed');
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
                        $('.mon').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>');
                    }



                    if (n231 === $('.tues').text()) {
                        $('.mon').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>');
                        $('.store_hrs_list').append('<div class="day_of_the_week">' + $('.mon').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.rev-m').remove();
                    }




                    if (n231 === $('.wed').text()) {
                        $('.mon').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>');
                        $('.store_hrs_list').append('<div class="day_of_the_week">' + $('.mon').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div class="day_of_the_week">' + $('.tues').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.rev-m').remove();
                    }


                    if (n231 === $('.thu').text()) {
                        $('.mon').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.mon').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.tues').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div class="day_of_the_week">' + $('.wed').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.rev-m').remove();
                    }

                    if (n231 === $('.fri').text()) {
                        $('.mon').append('<br>' + '<span  class="heresthedate">' + fourth_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + third_n + '</span>');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.mon').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.tues').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.wed').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div class="day_of_the_week">' + $('.thu').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.rev-m').remove();
                    }


                    if (n231 === $('.sat').text()) {
                        $('.mon').append('<br>' + '<span class="heresthedate">' + third_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.mon').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.tues').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.wed').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.thu').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div class="day_of_the_week">' + $('.fri').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.rev-m').remove();
                    }


                    if (n231 === $('.sun').text()) {
                        $('.mon').append('<br>' + '<span class="heresthedate">' + tomorrow_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.tues').append('<br>' + '<span class="heresthedate">' + third_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.wed').append('<br>' + '<span class="heresthedate">' + fourth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.thu').append('<br>' + '<span class="heresthedate">' + fifth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.fri').append('<br>' + '<span class="heresthedate">' + sixth_n + '</span>').parent(
                            'div').css('display', 'none').addClass('rev-m');
                        $('.sat').append('<br>' + '<span class="heresthedate">' + seventh_n + '</span>')
                            .parent('div').css('display', 'none').addClass('rev-m');
                        $('.sun').append('<br>' + '<span class="heresthedate">' + today_n + '</span>').parent(
                            'div').css('background-color', '#034694').css('color', '#fff');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.mon').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.tues').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.wed').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.thu').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.fri').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.store_hrs_list').append('<div  class="day_of_the_week">' + $('.sat').parent('div')
                            .html() + '</div>').parent('div').css('display', 'block');
                        $('.rev-m').remove();
                    }


            }

            this_is_the_day++;
        }

        $(xml).find('#' + store_number).each(function () {
            //$('.store_name').html('<h1 itemprop="name">'+store_name+'</h1>');
            //$('#ATS').text('About ' + store_name);
            //$('#AboutThisStore').text('About ' + store_name);
            // $('.store_address').html('<h2><span itemprop="streetAddress">' + store_address + '</span><br id="monly"> <span itemprop="addressLocality">' + store_city + '</span>, ' + '<span itemprop="addressRegion">' + store_state + '</span>' + ' ' + '<span itemprop="postalCode">' + store_zip + '</span></h2>');
            // $('.zip-dstore').attr('value', store_zip);
            // $('.store_phone').html('<a href="tel:' + store_phone_number + '">' + '<span itemprop="telephone" content="+1' + store_phone_number + '">' + store_phone_number + '</span></a>');
            $('.gm_link').attr('href', grg_link)


            $(xml).find('#' + store_number).children('next7Days').children('day').each(function () {
                openhrs_m = $(this).children('open').text().slice(0, -2) + ':00';
                closehrs_m = (parseInt($(this).children('close').text().slice(0, -2)) - 12) +
                    ':00';
                openhrs = $(this).children('open').text().slice(0, -2) + ' AM<br>-<br>';
                closehrs = parseInt($(this).children('close').text().slice(0, -2)) - 12 +
                    ' PM<br>';
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




                $('.store_hrs_list').append('<div class="day_of_the_week">' +
                    '<span class="boldname"></span>' + '<br><span class="imopen' +
                    this_is_the_day + '"></span><span class="ahr' + this_is_the_day +
                    '"></span></div>');
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



            finder3 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children(
                'day:nth-child(' + select_the_day1 + ')').children('close').text());
            finder3a = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children(
                'day:nth-child(' + select_the_day1 + ')').children('open').text());

            finder4 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children(
                'day:nth-child(' + select_the_day2 + ')').children('open').text());
            finder5 = parseInt($(xml).find('#' + $(this).attr('id')).children('next7Days').children(
                'day:nth-child(' + select_the_day3 + ')').children('open').text());
            deviation_closed = $(xml).find('#' + $(this).attr('id')).children('next7Days').children(
                'day:nth-child(' + select_the_day1 + ')').children('deviationReason').text();
            deviation_closeda = $(xml).find('#' + $(this).attr('id')).children('next7Days').children(
                'day:nth-child(' + select_the_day2 + ')').children('deviationReason').text();

            if (myhour21 < finder3) {
                $('.store_open_until').text('Open Today Until ' + parseInt(finder3 / 100 - 12) +
                ' PM');
            }

            if (myhour21 >= finder3) {
                $('.store_open_until').text('Closed Til Tomorrow at ' + finder4 / 100 + ' AM');
                if (deviation_closeda === 'Closed') {
                    $('.store_open_until').text('Closed Til ' + day_tomorow2 + ' at ' + finder5 / 100 +
                        ' AM');
                }
            }

            if (myhour21 < finder3a) {
                $('.store_open_until').text('Opens Today at ' + finder3a / 100 + ' AM');
            }

            if (deviation_closed === 'Closed') {
                $('.store_open_until').text('Closed Til ' + day_tomorow + ' at ' + parseInt(finder4) /
                    100 + ' AM');
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
    $('ul.breadcrumbs>li:nth-child(1)').after(
        '<li><a title="State" href="/storelocator/store-landing.jsp" class="ico">' + arraystores[4] +
        '</a></li><li><a title="Stores in Neighborhood" href="/storelocator/store-landing.jsp?location=' +
        arraystores[5].replace(' ', '_').replace('_County', '') + '" class="ico">' + arraystores[5] +
        '</a></li>');
    breadcrumb_last = $('ul.breadcrumbs>li:nth-child(4)').children('a').attr('href');
    $('ul.breadcrumbs>li:nth-child(4)').children('a').attr('href', breadcrumb_last).attr('title', $(
        '.store_name h1').text() + ' Store').text($('.store_name h1').text());
    $('ul.breadcrumbs>li:nth-child(1)').html(
        '<li><a title="Stores" href="/storelocator/store-landing.jsp" class="ico">Stores</a></li><li></li>'
        );

        var gps_height = $('.store_photo img').height()+'px'
        $('.store_gps iframe').css("max-height" , gps_height);

        $(window).on('resize', function(){
            var gps_height = $('.store_photo img').height()+'px'
            $('.store_gps iframe').css("max-height" , gps_height);
       });


})(jQuery);