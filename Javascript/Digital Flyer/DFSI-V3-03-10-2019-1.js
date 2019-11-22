 $('.breadcrumbs').after('<div class="flyer_header"><h1>P.C. Richard &amp; Son :<span id="ae6">Weekly Circular</span></h1></div><div class="swipe_cats_info">Swipe Left On Categories For More!</div>');
    $('#submenu').after('<div id="menu_box_desktop_name"><h2><strong>Weekly Circular</strong></h2></div><div id="menu_box_desktop"><div class="page_num"><div id="ae1"><div id="ae2">PAGE&nbsp;</div><input id="pageof" aria-label="Type a page number to jump to and press Enter" alt="Type a page number to jump to and press Enter" role="textbox" maxlength="2">&nbsp;OF&nbsp;&nbsp;<span id="pages_total"></span></div></div><div class="menu_number_overflow"></div></div>');
    $('#fsi_wrapper').prepend('<div id="menu_box_mobile">Click Here for Menu | Swipe Left For Next Page</div><div class="mobilemenu_content"></div><div class="productdrilldown"></div>');
    $('.submenu_button').each(function() {$(this).append('<img src="'+$(this).attr('data_image')+'"><div class="undermenu">'+$(this).attr('data_name')+'</div>');});
    
    
    function newbreakcrumb() {
        $('ul.breadcrumbs>li:nth-child(2)').html('<a title="Weekly Circular" href="/content/weekly-ad" class="ico">Weekly Circular</a>').after('<li><a title="Page '+(parseInt(location.hash.replace('#' ,''))+1)+'" href="/content/weekly-ad'+location.hash+'" class="ico">Page '+(parseInt(location.hash.replace('#' ,''))+1)+'</a><li>');
    }
    
    function doOnOrientationChange() {
        switch (window.orientation) {
            case -90:
                $(".productdrilldown .promo_box_20").css("width", "20%");
                break;
            default:
                $(".productdrilldown .promo_box_20").css("width", "50%");
        }
    }
    
    function marketing() {
        var t = document.location.pathname,
            e = document.location.hash.replace("#", ""),
            a = $("ul.breadcrumbs.cf li a:eq(1)").text(),
            i = $("#menu_box_desktop_name").text().trim(),
            r = t + "/" + i + "/" + e;
        (function (t, e, a, i, r, p, c) {
            t.GoogleAnalyticsObject = r, t[r] = t[r] || function () {
                (t[r].q = t[r].q || []).push(arguments)
            }, t[r].l = 1 * new Date, p = e.createElement(a), c = e.getElementsByTagName(a)[0], p.async = 1, p.src = i, c.parentNode.insertBefore(p, c)
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-38154392-1", "auto"), ga("send", "pageview", r), ga("send", "event", a, i, r)
    }
    
    function catagoryclick() {
        $(".menu_item").hide(), ca1 = "#pg" + location.hash.replace("#", ""), ca2 = $(ca1).attr("data2"), $('.menu_item[data2="' + ca2 + '"]').show()
    }
    
    function runajaxcontent() {
        if (urlname = "#pg" + location.hash.replace("#", ""), $(".submenu_button").css("color", "#333"), $(".undermenu:contains('" + $(urlname).attr("data2") + "')").parent("div").css("color", "#cf171f"), $(urlname + " .promo_box").length > 0) switch (location.hash) {
            case "#0":
                myjax5 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), myjax6 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete0();
                break;
            case "#1":
                pg1first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg1last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete1();
                break;
            case "#2":
                pg2first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg2last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete2();
                break;
            case "#3":
                pg3first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg3last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete3();
                break;
            case "#4":
                pg4first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg4last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete4();
                break;
            case "#5":
                pg5first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg5last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete5();
                break;
            case "#6":
                pg6first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg6last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete6();
                break;
            case "#7":
                pg7first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg7last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete7();
                break;
            case "#8":
                pg8first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg8last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete8();
                break;
            case "#9":
                pg9first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg9last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete9();
                break;
            case "#10":
                pg10first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg10last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete10();
                break;
            case "#11":
                pg11first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg11last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete11();
                break;
            case "#12":
                pg12first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg12last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete12();
                break;
            case "#13":
                pg13first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg13last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete13();
                break;
            case "#14":
                pg14first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg14last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete14();
                break;
            case "#15":
                pg15first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg15last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete15();
                break;
            case "#16":
                pg16first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg16last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete16();
                break;
            case "#17":
                pg17first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg17last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete17();
                break;
            case "#18":
                pg18first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg18last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete18();
                break;
            case "#19":
                pg19first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg19last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete19();
                break;
            case "#20":
                pg20first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg20last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete20();
                break;
            case "#21":
                pg21first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg21last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete21();
                break;
            case "#22":
                pg22first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg22last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete22();
                break;
            case "#23":
                pg23first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg23last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete23();
                break;
            case "#24":
                pg24first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg24last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete24();
                break;
            case "#25":
                pg25first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg25last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete25();
                break;
            case "#26":
                pg26first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg26last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete26();
                break;
            case "#27":
                pg27first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg27last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete27();
                break;
            case "#28":
                pg28first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg28last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete28();
                break;
            case "#29":
                pg29first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg29last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete29();
                break;
            case "#30":
                pg30first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg30last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete30();
                break;
            case "#31":
                pg31first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg31last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete31();
                break;
            case "#32":
                pg32first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg32last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete32();
                break;
            case "#33":
                pg33first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg33last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete33();
                break;
            case "#34":
                pg34first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg34last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete34();
                break;
            case "#35":
                pg35first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg35last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete35();
                break;
            case "#36":
                pg36first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg36last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete36();
                break;
            case "#37":
                pg37first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg37last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete37();
                break;
            case "#38":
                pg38first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg38last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete38();
                break;
            case "#39":
                pg39first = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), pg39last = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), ajaxcomplete39();
        }
    
    
    }
    
    function ajaxcomplete0() {
        myjax5 <= myjax6 && (myjax7 = "#p" + myjax5.toString(), tableurl = $(myjax7).attr("data"), tableurl.indexOf("/") > -1 ? page0() : page0a())
    }
    
    function ajaxcomplete1() {
        pg1first <= pg1last && (page1id = "#p" + pg1first.toString(), ajaxtype1 = $(page1id).attr("data"), ajaxtype1.indexOf("/") > -1 ? page1() : page1a())
    }
    
    function ajaxcomplete2() {
        pg2first <= pg2last && (page2id = "#p" + pg2first.toString(), ajaxtype2 = $(page2id).attr("data"), ajaxtype2.indexOf("/") > -1 ? page2() : page2a())
    }
    
    function ajaxcomplete3() {
        pg3first <= pg3last && (page3id = "#p" + pg3first.toString(), ajaxtype3 = $(page3id).attr("data"), ajaxtype3.indexOf("/") > -1 ? page3() : page3a())
    }
    
    function ajaxcomplete4() {
        pg4first <= pg4last && (page4id = "#p" + pg4first.toString(), ajaxtype4 = $(page4id).attr("data"), ajaxtype4.indexOf("/") > -1 ? page4() : page4a())
    }
    
    function ajaxcomplete5() {
        pg5first <= pg5last && (page5id = "#p" + pg5first.toString(), ajaxtype5 = $(page5id).attr("data"), ajaxtype5.indexOf("/") > -1 ? page5() : page5a())
    }
    
    function ajaxcomplete6() {
        pg6first <= pg6last && (page6id = "#p" + pg6first.toString(), ajaxtype6 = $(page6id).attr("data"), ajaxtype6.indexOf("/") > -1 ? page6() : page6a())
    }
    
    function ajaxcomplete7() {
        pg7first <= pg7last && (page7id = "#p" + pg7first.toString(), ajaxtype7 = $(page7id).attr("data"), ajaxtype7.indexOf("/") > -1 ? page7() : page7a())
    }
    
    function ajaxcomplete8() {
        pg8first <= pg8last && (page8id = "#p" + pg8first.toString(), ajaxtype8 = $(page8id).attr("data"), ajaxtype8.indexOf("/") > -1 ? page8() : page8a())
    }
    
    function ajaxcomplete9() {
        pg9first <= pg9last && (page9id = "#p" + pg9first.toString(), ajaxtype9 = $(page9id).attr("data"), ajaxtype9.indexOf("/") > -1 ? page9() : page9a())
    }
    
    function ajaxcomplete10() {
        pg10first <= pg10last && (page10id = "#p" + pg10first.toString(), ajaxtype10 = $(page10id).attr("data"), ajaxtype10.indexOf("/") > -1 ? page10() : page10a())
    }
    
    function ajaxcomplete11() {
        pg11first <= pg11last && (page11id = "#p" + pg11first.toString(), ajaxtype11 = $(page11id).attr("data"), ajaxtype11.indexOf("/") > -1 ? page11() : page11a())
    }
    
    function ajaxcomplete12() {
        pg12first <= pg12last && (page12id = "#p" + pg12first.toString(), ajaxtype12 = $(page12id).attr("data"), ajaxtype12.indexOf("/") > -1 ? page12() : page12a())
    }
    
    function ajaxcomplete13() {
        pg13first <= pg13last && (page13id = "#p" + pg13first.toString(), ajaxtype13 = $(page13id).attr("data"), ajaxtype13.indexOf("/") > -1 ? page13() : page13a())
    }
    
    function ajaxcomplete14() {
        pg14first <= pg14last && (page14id = "#p" + pg14first.toString(), ajaxtype14 = $(page14id).attr("data"), ajaxtype14.indexOf("/") > -1 ? page14() : page14a())
    }
    
    function ajaxcomplete15() {
        pg15first <= pg15last && (page15id = "#p" + pg15first.toString(), ajaxtype15 = $(page15id).attr("data"), ajaxtype15.indexOf("/") > -1 ? page15() : page15a())
    }
    
    function ajaxcomplete16() {
        pg16first <= pg16last && (page16id = "#p" + pg16first.toString(), ajaxtype16 = $(page16id).attr("data"), ajaxtype16.indexOf("/") > -1 ? page16() : page16a())
    }
    
    function ajaxcomplete17() {
        pg17first <= pg17last && (page17id = "#p" + pg17first.toString(), ajaxtype17 = $(page17id).attr("data"), ajaxtype17.indexOf("/") > -1 ? page17() : page17a())
    }
    
    function ajaxcomplete18() {
        pg18first <= pg18last && (page18id = "#p" + pg18first.toString(), ajaxtype18 = $(page18id).attr("data"), ajaxtype18.indexOf("/") > -1 ? page18() : page18a())
    }
    
    function ajaxcomplete19() {
        pg19first <= pg19last && (page19id = "#p" + pg19first.toString(), ajaxtype19 = $(page19id).attr("data"), ajaxtype19.indexOf("/") > -1 ? page19() : page19a())
    }
    
    function ajaxcomplete20() {
        pg20first <= pg20last && (page20id = "#p" + pg20first.toString(), ajaxtype20 = $(page20id).attr("data"), ajaxtype20.indexOf("/") > -1 ? page20() : page20a())
    }
    
    function ajaxcomplete21() {
        pg21first <= pg21last && (page21id = "#p" + pg21first.toString(), ajaxtype21 = $(page21id).attr("data"), ajaxtype21.indexOf("/") > -1 ? page21() : page21a())
    }
    
    function ajaxcomplete22() {
        pg22first <= pg22last && (page22id = "#p" + pg22first.toString(), ajaxtype22 = $(page22id).attr("data"), ajaxtype22.indexOf("/") > -1 ? page22() : page22a())
    }
    
    function ajaxcomplete23() {
        pg23first <= pg23last && (page23id = "#p" + pg23first.toString(), ajaxtype23 = $(page23id).attr("data"), ajaxtype23.indexOf("/") > -1 ? page23() : page23a())
    }
    
    function ajaxcomplete24() {
        pg24first <= pg24last && (page24id = "#p" + pg24first.toString(), ajaxtype24 = $(page24id).attr("data"), ajaxtype24.indexOf("/") > -1 ? page24() : page24a())
    }
    
    function ajaxcomplete25() {
        pg25first <= pg25last && (page25id = "#p" + pg25first.toString(), ajaxtype25 = $(page25id).attr("data"), ajaxtype25.indexOf("/") > -1 ? page25() : page25a())
    }
    
    function ajaxcomplete26() {
        pg26first <= pg26last && (page26id = "#p" + pg26first.toString(), ajaxtype26 = $(page26id).attr("data"), ajaxtype26.indexOf("/") > -1 ? page26() : page26a())
    }
    
    function ajaxcomplete27() {
        pg27first <= pg27last && (page27id = "#p" + pg27first.toString(), ajaxtype27 = $(page27id).attr("data"), ajaxtype27.indexOf("/") > -1 ? page27() : page27a())
    }
    
    function ajaxcomplete28() {
        pg28first <= pg28last && (page28id = "#p" + pg28first.toString(), ajaxtype28 = $(page28id).attr("data"), ajaxtype28.indexOf("/") > -1 ? page28() : page28a())
    }
    
    function ajaxcomplete29() {
        pg29first <= pg29last && (page29id = "#p" + pg29first.toString(), ajaxtype29 = $(page29id).attr("data"), ajaxtype29.indexOf("/") > -1 ? page29() : page29a())
    }
    
    function ajaxcomplete30() {
        pg30first <= pg30last && (page30id = "#p" + pg30first.toString(), ajaxtype30 = $(page30id).attr("data"), ajaxtype30.indexOf("/") > -1 ? page30() : page30a())
    }
    
    function ajaxcomplete31() {
        pg31first <= pg31last && (page31id = "#p" + pg31first.toString(), ajaxtype31 = $(page31id).attr("data"), ajaxtype31.indexOf("/") > -1 ? page31() : page31a())
    }
    
    function ajaxcomplete32() {
        pg32first <= pg32last && (page32id = "#p" + pg32first.toString(), ajaxtype32 = $(page32id).attr("data"), ajaxtype32.indexOf("/") > -1 ? page32() : page32a())
    }
    
    function ajaxcomplete33() {
        pg33first <= pg33last && (page33id = "#p" + pg33first.toString(), ajaxtype33 = $(page33id).attr("data"), ajaxtype33.indexOf("/") > -1 ? page33() : page33a())
    }
    
    function ajaxcomplete34() {
        pg34first <= pg34last && (page34id = "#p" + pg34first.toString(), ajaxtype34 = $(page34id).attr("data"), ajaxtype34.indexOf("/") > -1 ? page34() : page34a())
    }
    
    function ajaxcomplete35() {
        pg35first <= pg35last && (page35id = "#p" + pg35first.toString(), ajaxtype35 = $(page35id).attr("data"), ajaxtype35.indexOf("/") > -1 ? page35() : page35a())
    }
    
    function ajaxcomplete36() {
        pg36first <= pg36last && (page36id = "#p" + pg36first.toString(), ajaxtype36 = $(page36id).attr("data"), ajaxtype36.indexOf("/") > -1 ? page36() : page36a())
    }
    
    function ajaxcomplete37() {
        pg37first <= pg37last && (page37id = "#p" + pg37first.toString(), ajaxtype37 = $(page37id).attr("data"), ajaxtype37.indexOf("/") > -1 ? page37() : page37a())
    }
    
    function ajaxcomplete38() {
        pg38first <= pg38last && (page38id = "#p" + pg38first.toString(), ajaxtype38 = $(page38id).attr("data"), ajaxtype38.indexOf("/") > -1 ? page38() : page38a())
    }
    
    function ajaxcomplete39() {
        pg39first <= pg39last && (page39id = "#p" + pg39first.toString(), ajaxtype39 = $(page39id).attr("data"), ajaxtype39.indexOf("/") > -1 ? page39() : page39a())
    }
    
    function page0() {
        "use strict";
        myjax6 >= myjax5 ? $.ajax({
            url: $(myjax7).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(myjax7).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(myjax7).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product-tile").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), myjax5++, ajaxcomplete0()
            },
            error: function () {
                ajaxcomplete0(), myjax5++
            }
        }) : (resp = "", id = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page1() {
        "use strict";
        pg1last >= pg1first ? $.ajax({
            url: $(page1id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page1id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page1id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product-tile").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg1first++, ajaxcomplete1()
            },
            error: function () {
                ajaxcomplete1(), pg1first++
            }
        }) : (resp1 = "", id1 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page2() {
        "use strict";
        pg2last >= pg2first ? $.ajax({
            url: $(page2id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page2id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page2id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg2first++, ajaxcomplete2()
            },
            error: function () {
                ajaxcomplete2(), pg2first++
            }
        }) : (resp2 = "", id2 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page3() {
        "use strict";
        pg3last >= pg3first ? $.ajax({
            url: $(page3id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page3id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page3id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg3first++, ajaxcomplete3()
            },
            error: function () {
                ajaxcomplete3(), pg3first++
            }
        }) : (resp3 = "", id3 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page4() {
        "use strict";
        pg4last >= pg4first ? $.ajax({
            url: $(page4id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page4id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page4id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg4first++, ajaxcomplete4()
            },
            error: function () {
                ajaxcomplete4(), pg4first++
            }
        }) : (resp4 = "", id4 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page5() {
        "use strict";
        pg5last >= pg5first ? $.ajax({
            url: $(page5id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page5id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page5id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg5first++, ajaxcomplete5()
            },
            error: function () {
                ajaxcomplete5(), pg5first++
            }
        }) : (resp5 = "", id5 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page6() {
        "use strict";
        pg6last >= pg6first ? $.ajax({
            url: $(page6id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page6id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page6id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg6first++, ajaxcomplete6()
            },
            error: function () {
                ajaxcomplete6(), pg6first++
            }
        }) : (resp6 = "", id6 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page7() {
        "use strict";
        pg7last >= pg7first ? $.ajax({
            url: $(page7id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page7id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page7id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg7first++, ajaxcomplete7()
            },
            error: function () {
                ajaxcomplete7(), pg7first++
            }
        }) : (resp7 = "", id7 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page8() {
        "use strict";
        pg8last >= pg8first ? $.ajax({
            url: $(page8id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page8id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page8id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');

                   
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                  
                }), pg8first++, ajaxcomplete8()
            },
            error: function () {
                ajaxcomplete8(), pg8first++
            }
        }) : (resp8 = "", id8 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page9() {
        "use strict";
        pg9last >= pg9first ? $.ajax({
            url: $(page9id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page9id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page9id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg9first++, $("#pg9 .compcallout .product").each(function () {
                    $(this).append(tvcallout)
                }), ajaxcomplete9()
            },
            error: function () {
                ajaxcomplete9(), pg9first++
            }
        }) : (resp9 = "", id9 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page10() {
        "use strict";
        pg10last >= pg10first ? $.ajax({
            url: $(page10id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page10id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page10id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg10first++, $("#pg10 .compcallout .product").each(function () {
                    $(this).append(tvcallout)
                }), ajaxcomplete10()
            },
            error: function () {
                ajaxcomplete10(), pg10first++
            }
        }) : (resp10 = "", id10 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page11() {
        "use strict";
        pg11last >= pg11first ? $.ajax({
            url: $(page11id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page11id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page11id).addClass("finished"), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg11first++, $("#pg11 .compcallout .product").each(function () {
                    $(this).append(tvcallout)
                }), ajaxcomplete11()
            },
            error: function () {
                ajaxcomplete11(), pg11first++
            }
        }) : (resp11 = "", id11 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page12() {
        "use strict";
        pg12last >= pg12first ? $.ajax({
            url: $(page12id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page12id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page12id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg12first++, ajaxcomplete12()
            },
            error: function () {
                ajaxcomplete12(), pg12first++
            }
        }) : (resp12 = "", id12 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page13() {
        "use strict";
        pg13last >= pg13first ? $.ajax({
            url: $(page13id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page13id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page13id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg13first++, ajaxcomplete13()
            },
            error: function () {
                ajaxcomplete13(), pg13first++
            }
        }) : (resp13 = "", id13 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page14() {
        "use strict";
        pg14last >= pg14first ? $.ajax({
            url: $(page14id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page14id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page14id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg14first++, ajaxcomplete14()
            },
            error: function () {
                ajaxcomplete14(), pg14first++
            }
        }) : (resp14 = "", id14 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page15() {
        "use strict";
        pg15last >= pg15first ? $.ajax({
            url: $(page15id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page15id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page15id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg15first++, ajaxcomplete15()
            },
            error: function () {
                ajaxcomplete15(), pg15first++
            }
        }) : (resp15 = "", id15 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page16() {
        "use strict";
        pg16last >= pg16first ? $.ajax({
            url: $(page16id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page16id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page16id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg16first++, ajaxcomplete16()
            },
            error: function () {
                ajaxcomplete16(), pg16first++
            }
        }) : (resp16 = "", id16 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page17() {
        "use strict";
        pg17last >= pg17first ? $.ajax({
            url: $(page17id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page17id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page17id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg17first++, ajaxcomplete17()
            },
            error: function () {
                ajaxcomplete17(), pg17first++
            }
        }) : (resp17 = "", id17 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page18() {
        "use strict";
        pg18last >= pg18first ? $.ajax({
            url: $(page18id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page18id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page18id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg18first++, ajaxcomplete18()
            },
            error: function () {
                ajaxcomplete18(), pg18first++
            }
        }) : (resp18 = "", id18 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page19() {
        "use strict";
        pg19last >= pg19first ? $.ajax({
            url: $(page19id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page19id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page19id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg19first++, ajaxcomplete19()
            },
            error: function () {
                ajaxcomplete19(), pg19first++
            }
        }) : (resp19 = "", id19 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page20() {
        "use strict";
        pg20last >= pg20first ? $.ajax({
            url: $(page20id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page20id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page20id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg20first++, ajaxcomplete20()
            },
            error: function () {
                ajaxcomplete20(), pg20first++
            }
        }) : (resp20 = "", id20 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page21() {
        "use strict";
        pg21last >= pg21first ? $.ajax({
            url: $(page21id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page21id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page21id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg21first++, ajaxcomplete21()
            },
            error: function () {
                ajaxcomplete21(), pg21first++
            }
        }) : (resp21 = "", id21 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page22() {
        "use strict";
        pg22last >= pg22first ? $.ajax({
            url: $(page22id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page22id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page22id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg22first++, ajaxcomplete22()
            },
            error: function () {
                ajaxcomplete22(), pg22first++
            }
        }) : (resp22 = "", id22 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page23() {
        "use strict";
        pg23last >= pg23first ? $.ajax({
            url: $(page23id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page23id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page23id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg23first++, ajaxcomplete23()
            },
            error: function () {
                ajaxcomplete23(), pg23first++
            }
        }) : (resp23 = "", id23 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page24() {
        "use strict";
        pg24last >= pg24first ? $.ajax({
            url: $(page24id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page24id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page24id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg24first++, ajaxcomplete24()
            },
            error: function () {
                ajaxcomplete24(), pg24first++
            }
        }) : (resp24 = "", id24 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page25() {
        "use strict";
        pg25last >= pg25first ? $.ajax({
            url: $(page25id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page25id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page25id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg25first++, ajaxcomplete25()
            },
            error: function () {
                ajaxcomplete25(), pg25first++
            }
        }) : (resp25 = "", id25 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page26() {
        "use strict";
        pg26last >= pg26first ? $.ajax({
            url: $(page26id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page26id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page26id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg26first++, ajaxcomplete26()
            },
            error: function () {
                ajaxcomplete26(), pg26first++
            }
        }) : (resp26 = "", id26 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page27() {
        "use strict";
        pg27last >= pg27first ? $.ajax({
            url: $(page27id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page27id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page27id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg27first++, ajaxcomplete27()
            },
            error: function () {
                ajaxcomplete27(), pg27first++
            }
        }) : (resp27 = "", id27 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page28() {
        "use strict";
        pg28last >= pg28first ? $.ajax({
            url: $(page28id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page28id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page28id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg28first++, ajaxcomplete28()
            },
            error: function () {
                ajaxcomplete28(), pg28first++
            }
        }) : (resp28 = "", id28 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page29() {
        "use strict";
        pg29last >= pg29first ? $.ajax({
            url: $(page29id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page29id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page29id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg29first++, ajaxcomplete29()
            },
            error: function () {
                ajaxcomplete29(), pg29first++
            }
        }) : (resp29 = "", id29 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page30() {
        "use strict";
        pg30last >= pg30first ? $.ajax({
            url: $(page30id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page30id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page30id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg30first++, ajaxcomplete30()
            },
            error: function () {
                ajaxcomplete30(), pg30first++
            }
        }) : (resp30 = "", id30 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page31() {
        "use strict";
        pg31last >= pg31first ? $.ajax({
            url: $(page31id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page31id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page31id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg31first++, ajaxcomplete31()
            },
            error: function () {
                ajaxcomplete31(), pg31first++
            }
        }) : (resp31 = "", id31 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page32() {
        "use strict";
        pg32last >= pg32first ? $.ajax({
            url: $(page32id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page32id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page32id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg32first++, ajaxcomplete32()
            },
            error: function () {
                ajaxcomplete32(), pg32first++
            }
        }) : (resp32 = "", id32 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page33() {
        "use strict";
        pg33last >= pg33first ? $.ajax({
            url: $(page33id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page33id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page33id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg33first++, ajaxcomplete33()
            },
            error: function () {
                ajaxcomplete33(), pg33first++
            }
        }) : (resp33 = "", id33 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page34() {
        "use strict";
        pg34last >= pg34first ? $.ajax({
            url: $(page34id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page34id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page34id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg34first++, ajaxcomplete34()
            },
            error: function () {
                ajaxcomplete34(), pg34first++
            }
        }) : (resp34 = "", id34 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page35() {
        "use strict";
        pg35last >= pg35first ? $.ajax({
            url: $(page35id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page35id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page35id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg35first++, ajaxcomplete35()
            },
            error: function () {
                ajaxcomplete35(), pg35first++
            }
        }) : (resp35 = "", id35 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page36() {
        "use strict";
        pg36last >= pg36first ? $.ajax({
            url: $(page36id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page36id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page36id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg36first++, ajaxcomplete36()
            },
            error: function () {
                ajaxcomplete36(), pg36first++
            }
        }) : (resp36 = "", id36 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page37() {
        "use strict";
        pg37last >= pg37first ? $.ajax({
            url: $(page37id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page37id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page37id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg37first++, ajaxcomplete37()
            },
            error: function () {
                ajaxcomplete37(), pg37first++
            }
        }) : (resp37 = "", id37 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page38() {
        "use strict";
        pg38last >= pg38first ? $.ajax({
            url: $(page38id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page38id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page38id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg38first++, ajaxcomplete38()
            },
            error: function () {
                ajaxcomplete38(), pg38first++
            }
        }) : (resp38 = "", id38 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page39() {
        "use strict";
        pg39last >= pg39first ? $.ajax({
            url: $(page39id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page39id).not(".finished").children(".dynamic").html($("#productsList", t).html()), $(".qv").remove(), $(page39id).addClass("finished"), $(".tvcallout").children(".dynamic").children(".product").each(function () {
                    $(this).append(tvcallout)
                }), $(".promo_motion_data").delay(2e3).show(), $(".product-tile").not(".wrapped").each(function () {
                    $(this).not('.package .product-tile').not('.wrapped').addClass('wrapped').wrap("<a title='Click for " + $(this).children(".product-details-container").children(".model").text() + "' href='" + $(this).children(".product-details-container").children("a").attr('href') + "'></a>").addClass('wrapped');
                    $('.package .product-tile').click(function() {document.location = $(this).parent('li').parent('ul').parent('div').parent().attr('data');return false;});
                    $('.product-image').each(function() {$(this).children('a').children('img').attr('src' , $(this).children('a').children('img').attr('data-src') )})
                }), pg39first++, ajaxcomplete39()
            },
            error: function () {
                ajaxcomplete39(), pg39first++
            }
        }) : (resp39 = "", id39 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page0a() {
        "use strict";
        myjax6 >= myjax5 ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(myjax7).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(myjax7).children(".dynamic").html($(".sidebar-price-list", t).html()), $(myjax7).children(".promo_des_price").html($("h1", t).html()), $(myjax7).not(".singlepromo-multi").wrap("<a title='Click for " + $(myjax7).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(myjax7).attr("data") + "'></a>"), $(myjax7 + ".singlepromo-multi").wrap("<a title='Click for " + $(myjax7).attr("data2") + "' href='" + $(myjax7).attr("data2") + "'></a>"), myjax5++, ajaxcomplete0()
            },
            error: function () {
                ajaxcomplete0(), myjax5++
            }
        }) : (resp = "", id = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page1a() {
        "use strict";
        pg1last >= pg1first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page1id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page1id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page1id).children(".promo_des_price").html($("h1", t).html()), $(page1id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page1id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page1id).attr("data") + "'></a>"), $(page1id + ".singlepromo-multi").wrap("<a title='Click for " + $(page1id).attr("data2") + "' href='" + $(page1id).attr("data2") + "'></a>"), pg1first++, ajaxcomplete1()
            },
            error: function () {
                ajaxcomplete1(), pg1first++
            }
        }) : (resp1 = "", id1 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page2a() {
        "use strict";
        pg2last >= pg2first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page2id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page2id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page2id).children(".promo_des_price").html($("h1", t).html()), $(page2id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page2id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page2id).attr("data") + "'></a>"), $(page2id + ".singlepromo-multi").wrap("<a title='Click for " + $(page2id).attr("data2") + "' href='" + $(page2id).attr("data2") + "'></a>"), pg2first++, ajaxcomplete2()
            },
            error: function () {
                ajaxcomplete2(), pg2first++
            }
        }) : (resp2 = "", id2 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page3a() {
        "use strict";
        pg3last >= pg3first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page3id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page3id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page3id).children(".promo_des_price").html($("h1", t).html()), $(page3id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page3id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page3id).attr("data") + "'></a>"), $(page3id + ".singlepromo-multi").wrap("<a title='Click for " + $(page3id).attr("data2") + "' href='" + $(page3id).attr("data2") + "'></a>"), pg3first++, ajaxcomplete3()
            },
            error: function () {
                ajaxcomplete3(), pg3first++
            }
        }) : (resp3 = "", id3 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }));
    }
    
    function page4a() {
        "use strict";
        pg4last >= pg4first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page4id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page4id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page4id).children(".promo_des_price").html($("h1", t).html()), $(page4id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page4id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page4id).attr("data") + "'></a>"), $(page4id + ".singlepromo-multi").wrap("<a title='Click for " + $(page4id).attr("data2") + "' href='" + $(page4id).attr("data2") + "'></a>"), pg4first++, ajaxcomplete4()
            },
            error: function () {
                ajaxcomplete4(), pg4first++
            }
        }) : (resp4 = "", id4 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page5a() {
        "use strict";
        pg5last >= pg5first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page5id).attr("data"),
            timeout: 3e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page5id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page5id).children(".promo_des_price").html($("h1", t).html()), $(page5id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page5id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page5id).attr("data") + "'></a>"), $(page5id + ".singlepromo-multi").wrap("<a title='Click for " + $(page5id).attr("data2") + "' href='" + $(page5id).attr("data2") + "'></a>"), pg5first++, ajaxcomplete5()
            },
            error: function () {
                ajaxcomplete5(), pg5first++
            }
        }) : (resp5 = "", id5 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page6a() {
        "use strict";
        pg6last >= pg6first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page6id).attr("data"),
            timeout: 3e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page6id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page6id).children(".promo_des_price").html($("h1", t).html()), $(page6id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page6id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page6id).attr("data") + "'></a>"), $(page6id + ".singlepromo-multi").wrap("<a title='Click for " + $(page6id).attr("data2") + "' href='" + $(page6id).attr("data2") + "'></a>"), pg6first++, ajaxcomplete6()
            },
            error: function () {
                ajaxcomplete6(), pg6first++
            }
        }) : (resp6 = "", id6 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page7a() {
        "use strict";
        pg7last >= pg7first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page7id).attr("data"),
            timeout: 3e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page7id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page7id).children(".promo_des_price").html($("h1", t).html()), $(page7id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page7id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page7id).attr("data") + "'></a>"), $(page7id + ".singlepromo-multi").wrap("<a title='Click for " + $(page7id).attr("data2") + "' href='" + $(page7id).attr("data2") + "'></a>"), pg7first++, ajaxcomplete7()
            },
            error: function () {
                ajaxcomplete7(), pg7first++
            }
        }) : (resp7 = "", id7 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page8a() {
        "use strict";
        pg8last >= pg8first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page8id).attr("data"),
            timeout: 3e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page8id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page8id).children(".promo_des_price").html($("h1", t).html()), $(page8id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page8id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page8id).attr("data") + "'></a>"), $(page8id + ".singlepromo-multi").wrap("<a title='Click for " + $(page8id).attr("data2") + "' href='" + $(page8id).attr("data2") + "'></a>"), pg8first++, ajaxcomplete8()
            },
            error: function () {
                ajaxcomplete8(), pg8first++
            }
        }) : (resp8 = "", id8 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page9a() {
        "use strict";
        pg9last >= pg9first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page9id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page9id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page9id).children(".promo_des_price").html($("h1", t).html()), $(page9id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page9id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page9id).attr("data") + "'></a>"), $(page9id + ".singlepromo-multi").wrap("<a title='Click for " + $(page9id).attr("data2") + "' href='" + $(page9id).attr("data2") + "'></a>"), pg9first++, ajaxcomplete9()
            },
            error: function () {
                ajaxcomplete9(), pg9first++
            }
        }) : (resp9 = "", id9 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page10a() {
        "use strict";
        pg10last >= pg10first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page10id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page10id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page10id).children(".promo_des_price").html($("h1", t).html()), $(page10id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page10id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page10id).attr("data") + "'></a>"), $(page10id + ".singlepromo-multi").wrap("<a title='Click for " + $(page10id).attr("data2") + "' href='" + $(page10id).attr("data2") + "'></a>"), pg10first++, ajaxcomplete10()
            },
            error: function () {
                ajaxcomplete10(), pg10first++
            }
        }) : (resp10 = "", id10 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page11a() {
        "use strict";
        pg11last >= pg11first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page11id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page11id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page11id).children(".promo_des_price").html($("h1", t).html()), $(page11id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page11id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page11id).attr("data") + "'></a>"), $(page11id + ".singlepromo-multi").wrap("<a title='Click for " + $(page11id).attr("data2") + "' href='" + $(page11id).attr("data2") + "'></a>"), pg11first++, ajaxcomplete11()
            },
            error: function () {
                ajaxcomplete11(), pg11first++
            }
        }) : (resp11 = "", id11 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page12a() {
        "use strict";
        pg12last >= pg12first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page12id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page12id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page12id).children(".promo_des_price").html($("h1", t).html()), $(page12id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page12id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page12id).attr("data") + "'></a>"), $(page12id + ".singlepromo-multi").wrap("<a title='Click for " + $(page12id).attr("data2") + "' href='" + $(page12id).attr("data2") + "'></a>"), pg12first++, ajaxcomplete12()
            },
            error: function () {
                ajaxcomplete12(), pg12first++
            }
        }) : (resp12 = "", id12 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page13a() {
        "use strict";
        pg13last >= pg13first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page13id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page13id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page13id).children(".promo_des_price").html($("h1", t).html()), $(page13id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page13id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page13id).attr("data") + "'></a>"), $(page13id + ".singlepromo-multi").wrap("<a title='Click for " + $(page13id).attr("data2") + "' href='" + $(page13id).attr("data2") + "'></a>"), pg13first++, ajaxcomplete13()
            },
            error: function () {
                ajaxcomplete13(), pg13first++
            }
        }) : (resp13 = "", id13 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page14a() {
        "use strict";
        pg14last >= pg14first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page14id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page14id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page14id).children(".promo_des_price").html($("h1", t).html()), $(page14id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page14id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page14id).attr("data") + "'></a>"), $(page14id + ".singlepromo-multi").wrap("<a title='Click for " + $(page14id).attr("data2") + "' href='" + $(page14id).attr("data2") + "'></a>"), pg14first++, ajaxcomplete14()
            },
            error: function () {
                ajaxcomplete14(), pg14first++
            }
        }) : (resp14 = "", id14 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page15a() {
        "use strict";
        pg15last >= pg15first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page15id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page15id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page15id).children(".promo_des_price").html($("h1", t).html()), $(page15id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page15id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page15id).attr("data") + "'></a>"), $(page15id + ".singlepromo-multi").wrap("<a title='Click for " + $(page15id).attr("data2") + "' href='" + $(page15id).attr("data2") + "'></a>"), pg15first++, ajaxcomplete15()
            },
            error: function () {
                ajaxcomplete15(), pg15first++
            }
        }) : (resp15 = "", id15 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page16a() {
        "use strict";
        pg16last >= pg16first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page16id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page16id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page16id).children(".promo_des_price").html($("h1", t).html()), $(page16id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page16id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page16id).attr("data") + "'></a>"), $(page16id + ".singlepromo-multi").wrap("<a title='Click for " + $(page16id).attr("data2") + "' href='" + $(page16id).attr("data2") + "'></a>"), pg16first++, ajaxcomplete16()
            },
            error: function () {
                ajaxcomplete16(), pg16first++
            }
        }) : (resp16 = "", id16 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page17a() {
        "use strict";
        pg17last >= pg17first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page17id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page17id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page17id).children(".promo_des_price").html($("h1", t).html()), $(page17id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page17id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page17id).attr("data") + "'></a>"), $(page17id + ".singlepromo-multi").wrap("<a title='Click for " + $(page17id).attr("data2") + "' href='" + $(page17id).attr("data2") + "'></a>"), pg17first++, ajaxcomplete17()
            },
            error: function () {
                ajaxcomplete17(), pg17first++
            }
        }) : (resp17 = "", id17 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page18a() {
        "use strict";
        pg18last >= pg18first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page18id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page18id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page18id).children(".promo_des_price").html($("h1", t).html()), $(page18id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page18id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page18id).attr("data") + "'></a>"), $(page18id + ".singlepromo-multi").wrap("<a title='Click for " + $(page18id).attr("data2") + "' href='" + $(page18id).attr("data2") + "'></a>"), pg18first++, ajaxcomplete18()
            },
            error: function () {
                ajaxcomplete18(), pg18first++
            }
        }) : (resp18 = "", id18 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page19a() {
        "use strict";
        pg19last >= pg19first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page19id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page19id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page19id).children(".promo_des_price").html($("h1", t).html()), $(page19id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page19id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page19id).attr("data") + "'></a>"), $(page19id + ".singlepromo-multi").wrap("<a title='Click for " + $(page19id).attr("data2") + "' href='" + $(page19id).attr("data2") + "'></a>"), pg19first++, ajaxcomplete19()
            },
            error: function () {
                ajaxcomplete19(), pg19first++
            }
        }) : (resp19 = "", id19 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page20a() {
        "use strict";
        pg20last >= pg20first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page20id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page20id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page20id).children(".promo_des_price").html($("h1", t).html()), $(page20id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page20id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page20id).attr("data") + "'></a>"), $(page20id + ".singlepromo-multi").wrap("<a title='Click for " + $(page20id).attr("data2") + "' href='" + $(page20id).attr("data2") + "'></a>"), pg20first++, ajaxcomplete20()
            },
            error: function () {
                ajaxcomplete20(), pg20first++
            }
        }) : (resp20 = "", id20 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page21a() {
        "use strict";
        pg21last >= pg21first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page21id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page21id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page21id).children(".promo_des_price").html($("h1", t).html()), $(page21id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page21id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page21id).attr("data") + "'></a>"), $(page21id + ".singlepromo-multi").wrap("<a title='Click for " + $(page21id).attr("data2") + "' href='" + $(page21id).attr("data2") + "'></a>"), pg21first++, ajaxcomplete21()
            },
            error: function () {
                ajaxcomplete21(), pg21first++
            }
        }) : (resp21 = "", id21 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page22a() {
        "use strict";
        pg22last >= pg22first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page22id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page22id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page22id).children(".promo_des_price").html($("h1", t).html()), $(page22id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page22id).attr("data") + "'title='Click for " + $(page22id).attr("data") + "'></a>"), $(page22id + ".singlepromo-multi").wrap("<a href='" + $(page22id).attr("data2") + "'title='Click for " + $(page22id).attr("data2") + "'></a>"), pg22first++, ajaxcomplete22()
            },
            error: function () {
                ajaxcomplete22(), pg22first++
            }
        }) : (resp22 = "", id22 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page23a() {
        "use strict";
        pg23last >= pg23first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page23id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page23id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page23id).children(".promo_des_price").html($("h1", t).html()), $(page23id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page23id).attr("data") + "'title='Click for " + $(page23id).attr("data") + "'></a>"), $(page23id + ".singlepromo-multi").wrap("<a href='" + $(page23id).attr("data2") + "'title='Click for " + $(page23id).attr("data2") + "'></a>"), pg23first++, ajaxcomplete23()
            },
            error: function () {
                ajaxcomplete23(), pg23first++
            }
        }) : (resp23 = "", id23 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page24a() {
        "use strict";
        pg24last >= pg24first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page24id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page24id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page24id).children(".promo_des_price").html($("h1", t).html()), $(page24id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page24id).attr("data") + "'title='Click for " + $(page24id).attr("data") + "'></a>"), $(page24id + ".singlepromo-multi").wrap("<a href='" + $(page24id).attr("data2") + "'title='Click for " + $(page24id).attr("data2") + "'></a>"), pg24first++, ajaxcomplete24()
            },
            error: function () {
                ajaxcomplete24(), pg24first++
            }
        }) : (resp24 = "", id24 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page25a() {
        "use strict";
        pg25last >= pg25first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page25id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page25id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page25id).children(".promo_des_price").html($("h1", t).html()), $(page25id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page25id).attr("data") + "'title='Click for " + $(page25id).attr("data") + "'></a>"), $(page25id + ".singlepromo-multi").wrap("<a href='" + $(page25id).attr("data2") + "'title='Click for " + $(page25id).attr("data2") + "'></a>"), pg25first++, ajaxcomplete25()
            },
            error: function () {
                ajaxcomplete25(), pg25first++
            }
        }) : (resp25 = "", id25 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page26a() {
        "use strict";
        pg26last >= pg26first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page26id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page26id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page26id).children(".promo_des_price").html($("h1", t).html()), $(page26id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page26id).attr("data") + "'title='Click for " + $(page26id).attr("data") + "'></a>"), $(page26id + ".singlepromo-multi").wrap("<a href='" + $(page26id).attr("data2") + "'title='Click for " + $(page26id).attr("data2") + "'></a>"), pg26first++, ajaxcomplete26()
            },
            error: function () {
                ajaxcomplete26(), pg26first++
            }
        }) : (resp26 = "", id26 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page27a() {
        "use strict";
        pg27last >= pg27first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page27id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page27id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page27id).children(".promo_des_price").html($("h1", t).html()), $(page27id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page27id).attr("data") + "'title='Click for " + $(page27id).attr("data") + "'></a>"), $(page27id + ".singlepromo-multi").wrap("<a href='" + $(page27id).attr("data2") + "'title='Click for " + $(page27id).attr("data2") + "'></a>"), pg27first++, ajaxcomplete27()
            },
            error: function () {
                ajaxcomplete27(), pg27first++
            }
        }) : (resp27 = "", id27 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page28a() {
        "use strict";
        pg28last >= pg28first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page28id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page28id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page28id).children(".promo_des_price").html($("h1", t).html()), $(page28id).not(".singlepromo-multi").wrap("<a href='/catalog/catalog-product.jsp?prodId=" + $(page28id).attr("data") + "'title='Click for " + $(page28id).attr("data") + "'></a>"), $(page28id + ".singlepromo-multi").wrap("<a href='" + $(page28id).attr("data2") + "'title='Click for " + $(page28id).attr("data2") + "'></a>"), pg28first++, ajaxcomplete28()
            },
            error: function () {
                ajaxcomplete28(), pg28first++
            }
        }) : (resp28 = "", id28 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page29a() {
        "use strict";
        pg29last >= pg29first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page29id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page29id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page29id).children(".promo_des_price").html($("h1", t).html()), $(page29id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page29id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page29id).attr("data") + "'></a>"), $(page29id + ".singlepromo-multi").wrap("<a title='Click for " + $(page29id).attr("data2") + "' href='" + $(page29id).attr("data2") + "'></a>"), pg29first++, ajaxcomplete29()
            },
            error: function () {
                ajaxcomplete29(), pg29first++
            }
        }) : (resp29 = "", id29 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page30a() {
        "use strict";
        pg30last >= pg30first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page30id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page30id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page30id).children(".promo_des_price").html($("h1", t).html()), $(page30id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page30id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page30id).attr("data") + "'></a>"), $(page30id + ".singlepromo-multi").wrap("<a title='Click for " + $(page30id).attr("data2") + "' href='" + $(page30id).attr("data2") + "'></a>"), pg30first++, ajaxcomplete30()
            },
            error: function () {
                ajaxcomplete30(), pg30first++
            }
        }) : (resp30 = "", id30 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page31a() {
        "use strict";
        pg31last >= pg31first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page31id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page31id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page31id).children(".promo_des_price").html($("h1", t).html()), $(page31id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page31id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page31id).attr("data") + "'></a>"), $(page31id + ".singlepromo-multi").wrap("<a title='Click for " + $(page31id).attr("data2") + "' href='" + $(page31id).attr("data2") + "'></a>"), pg31first++, ajaxcomplete31()
            },
            error: function () {
                ajaxcomplete31(), pg31first++
            }
        }) : (resp31 = "", id31 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page32a() {
        "use strict";
        pg32last >= pg32first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page32id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page32id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page32id).children(".promo_des_price").html($("h1", t).html()), $(page32id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page32id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page32id).attr("data") + "'></a>"), $(page32id + ".singlepromo-multi").wrap("<a title='Click for " + $(page32id).attr("data2") + "' href='" + $(page32id).attr("data2") + "'></a>"), pg32first++, ajaxcomplete32()
            },
            error: function () {
                ajaxcomplete32(), pg32first++
            }
        }) : (resp32 = "", id32 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page33a() {
        "use strict";
        pg33last >= pg33first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page33id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page33id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page33id).children(".promo_des_price").html($("h1", t).html()), $(page33id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page33id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page33id).attr("data") + "'></a>"), $(page33id + ".singlepromo-multi").wrap("<a title='Click for " + $(page33id).attr("data2") + "' href='" + $(page33id).attr("data2") + "'></a>"), pg33first++, ajaxcomplete33()
            },
            error: function () {
                ajaxcomplete33(), pg33first++
            }
        }) : (resp33 = "", id33 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page34a() {
        "use strict";
        pg34last >= pg34first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page34id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page34id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page34id).children(".promo_des_price").html($("h1", t).html()), $(page34id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page34id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page34id).attr("data") + "'></a>"), $(page34id + ".singlepromo-multi").wrap("<a title='Click for " + $(page34id).attr("data2") + "' href='" + $(page34id).attr("data2") + "'></a>"), pg34first++, ajaxcomplete34()
            },
            error: function () {
                ajaxcomplete34(), pg34first++
            }
        }) : (resp34 = "", id34 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page35a() {
        "use strict";
        pg35last >= pg35first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page35id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page35id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page35id).children(".promo_des_price").html($("h1", t).html()), $(page35id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page35id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page35id).attr("data") + "'></a>"), $(page35id + ".singlepromo-multi").wrap("<a title='Click for " + $(page35id).attr("data2") + "' href='" + $(page35id).attr("data2") + "'></a>"), pg35first++, ajaxcomplete35()
            },
            error: function () {
                ajaxcomplete35(), pg35first++
            }
        }) : (resp35 = "", id35 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page36a() {
        "use strict";
        pg36last >= pg36first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page36id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page36id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page36id).children(".promo_des_price").html($("h1", t).html()), $(page36id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page36id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page36id).attr("data") + "'></a>"), $(page36id + ".singlepromo-multi").wrap("<a title='Click for " + $(page36id).attr("data2") + "' href='" + $(page36id).attr("data2") + "'></a>"), pg36first++, ajaxcomplete36()
            },
            error: function () {
                ajaxcomplete36(), pg36first++
            }
        }) : (resp36 = "", id36 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page37a() {
        "use strict";
        pg37last >= pg37first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page37id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page37id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page37id).children(".promo_des_price").html($("h1", t).html()), $(page37id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page37id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page37id).attr("data") + "'></a>"), $(page37id + ".singlepromo-multi").wrap("<a title='Click for " + $(page37id).attr("data2") + "' href='" + $(page37id).attr("data2") + "'></a>"), pg37first++, ajaxcomplete37()
            },
            error: function () {
                ajaxcomplete37(), pg37first++
            }
        }) : (resp37 = "", id37 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page38a() {
        "use strict";
        pg38last >= pg38first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page38id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page38id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page38id).children(".promo_des_price").html($("h1", t).html()), $(page38id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page38id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page38id).attr("data") + "'></a>"), $(page38id + ".singlepromo-multi").wrap("<a title='Click for " + $(page38id).attr("data2") + "' href='" + $(page38id).attr("data2") + "'></a>"), pg38first++, ajaxcomplete38()
            },
            error: function () {
                ajaxcomplete38(), pg38first++
            }
        }) : (resp38 = "", id38 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function page39a() {
        "use strict";
        pg39last >= pg39first ? $.ajax({
            url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page39id).attr("data"),
            timeout: 4e3,
            type: "GET",
            cache: !1,
            success: function (t) {
                $(page39id).children(".dynamic").html($(".sidebar-price-list", t).html()), $(page39id).children(".promo_des_price").html($("h1", t).html()),
                    $(page39id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page39id).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(page39id).attr("data") + "'></a>"), $(page39id + ".singlepromo-multi").wrap("<a title='Click for " + $(page39id).attr("data2") + "' href='" + $(page39id).attr("data2") + "'></a>"), pg39first++, ajaxcomplete39()
            },
            error: function () {
                ajaxcomplete39(), pg39first++
            }
        }) : (resp39 = "", id39 = "", $(".product").each(function () {
            "" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
        }))
    }
    
    function wrapProgramFx(t) {
        $(t).not(".finished").each(function () {
            d_model_number = $(this).attr("data");
            if(d_model_number.indexOf('/') > -1) {
                $(this).wrap("<a title='Click for " + d_model_number + "' href='" + d_model_number + "'></a>").addClass("finished");
            } else {
                $(this).wrap("<a title='Click for " + d_model_number + "' href='/browse?Ntt=" + d_model_number + "'></a>").addClass("finished");
            }
        })
    }
    
    function wrapprogram() {
        wrapProgramFx(".promo_box_940"), wrapProgramFx(".promo_box_20"), wrapProgramFx(".promo_box_33"), wrapProgramFx(".promo_box_50"), wrapProgramFx(".promo_box_66"), wrapProgramFx(".promo_box_16"), wrapProgramFx(".shopallinternal"), $(".internalflyer table").each(function () {
            $(this).not(".finished").attr("width", "100%").removeAttr("height").removeAttr("id"), $(this).attr("role", "presentation")
        }), $(".fsi video").click(function () {
            $(this).css("max-height", "inherit"), $(this).prop("controls", !0), this.play()
        }), $(".shopallproduct").not(".postwrap").each(function () {
            $(this).wrap('<a href="' + $(this).attr("data") + '" alt="' + $(this).text() + '">')
        }), $(".tv_select").click(function () {
            return $(window).width() > 767 ? (document.location = $(this).att("data"), !1) : ($(window).scrollTop(0), $(".productdrilldown").html(tv_select), $(".productdrilldown").animate({
                left: "0"
            }), $(".close_popup").click(function () {
                $(".productdrilldown").css("left", "-102%")
            }), !1)
        }), $(".mattress_select").click(function () {
            return $(window).width() > 767 ? (document.location = $(this).att("data"), !1) : ($(window).scrollTop(0), $(".productdrilldown").html(mattress_select), $(".productdrilldown").animate({
                left: "0"
            }), $(".close_popup").click(function () {
                $(".productdrilldown").css("left", "-102%")
            }), !1)
        }), $(".fitness_select").click(function () {
            return $(window).width() > 767 ? (document.location = $(this).att("data"), !1) : ($(window).scrollTop(0), $(".productdrilldown").html(fitness_select), $(".productdrilldown").animate({
                left: "0"
            }), $(".close_popup").click(function () {
                $(".productdrilldown").css("left", "-102%")
            }), !1)
        }), $(".productdrilldown").swipe({
            swipeLeft: function () {
                return $(".productdrilldown").css("left", "-102%"), !1
            },
            swipeRight: function () {
                return $(".productdrilldown").css("left", "-102%"), !1
            },
            fingers: 1,
            threshold: 150,
            excludedElements: ".noSwipe"
        }), $("table img").each(function () {
            $(this).removeAttr("height"), $(this).attr("data") && ($(this).attr("data").indexOf("/") > -1 ? ($(this).not(".finished").wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>"), $(this).addClass("finished")) : ($(this).not(".finished").wrap("<a title='Click for " + $(this).attr("data") + "' href='/catalog/catalog-product.jsp?prodId=" + $(this).attr("data") + "'></a>"), $(this).addClass("finished")))
        })
    }
     $('<div id="arrows_containers" ><div class="left_arrow"></div><div class="right_arrow"></div></div>').insertAfter("#fsi_wrapper"), window.addEventListener("orientationchange", doOnOrientationChange), doOnOrientationChange();
        pages_amount = $(".fsi").length,
        pg1 = 0,
        menu_length = $(".submenu_button").length,
        swipeinfo = 0,
        tvcallout = '<img class="additionalcallout" alt="In-Store Only"  src="/images/promos/In-store-only-2018.png">',
        deviceheight = parseInt($(window).height()) - 240,
        id = "#pg0",
        id1 = "#pg0",
        id2 = "#pg0",
        id3 = "#pg0",
        id4 = "#pg0",
        id5 = "#pg0",
        id6 = "#pg0",
        id7 = "#pg0",
        id8 = "#pg0",
        id9 = "#pg0",
        id10 = "#pg0",
        id11 = "#pg0",
        id12 = "#pg0",
        id13 = "#pg0",
        id14 = "#pg0",
        id15 = "#pg0",
        id16 = "#pg0",
        id17 = "#pg0",
        id18 = "#pg0",
        id19 = "#pg0",
        id20 = "#pg0",
        id21 = "#pg0",
        id22 = "#pg0",
        id23 = "#pg0",
        id24 = "#pg0",
        id25 = "#pg0",
        id26 = "#pg0",
        id27 = "#pg0",
        id28 = "#pg0",
        id29 = "#pg0",
        id30 = "#pg0",
        id31 = "#pg0",
        id32 = "#pg0",
        id33 = "#pg0",
        id34 = "#pg0",
        id35 = "#pg0",
        id36 = "#pg0",
        id37 = "#pg0",
        id38 = "#pg0",
        id39 = "#pg0",
        resp = "#pg0",
        resp1 = "#pg0",
        resp2 = "#pg0",
        resp3 = "#pg0",
        resp4 = "#pg0",
        resp5 = "#pg0",
        resp6 = "#pg0",
        resp7 = "#pg0",
        resp8 = "#pg0",
        resp9 = "#pg0",
        resp10 = "#pg0",
        resp11 = "#pg0",
        resp12 = "#pg0",
        resp13 = "#pg0",
        resp14 = "#pg0",
        resp15 = "#pg0",
        resp16 = "#pg0",
        resp17 = "#pg0",
        resp18 = "#pg0",
        resp19 = "#pg0",
        resp20 = "#pg0",
        resp21 = "#pg0",
        resp22 = "#pg0",
        resp23 = "#pg0",
        resp24 = "#pg0",
        resp25 = "#pg0",
        resp26 = "#pg0",
        resp27 = "#pg0",
        resp28 = "#pg0",
        resp29 = "#pg0",
        resp30 = "#pg0",
        resp31 = "#pg0",
        resp32 = "#pg0",
        resp33 = "#pg0",
        resp34 = "#pg0",
        resp35 = "#pg0",
        resp36 = "#pg0",
        resp37 = "#pg0",
        resp38 = "#pg0",
        resp39 = "#pg0",
        myjax = 0,
        myjax2 = "",
        myjax3 = "#pg0",
        myjax5 = 0,
        myjax6 = 100,
        myjax7 = "#p0",
        tableurl = "",
        pg1first = 0,
        pg2first = 0,
        pg3first = 0,
        pg4first = 0,
        pg5first = 0,
        pg6first = 0,
        pg7first = 0,
        pg8first = 0,
        pg9first = 0,
        pg10first = 0,
        pg11first = 0,
        pg12first = 0,
        pg13first = 0,
        pg14first = 0,
        pg15first = 0,
        pg16first = 0,
        pg17first = 0,
        pg18first = 0,
        pg19first = 0,
        pg20first = 0,
        pg21first = 0,
        pg22first = 0,
        pg23first = 0,
        pg24first = 0,
        pg25first = 0,
        pg26first = 0,
        pg27first = 0,
        pg28first = 0,
        pg29first = 0,
        pg30first = 0,
        pg31first = 0,
        pg32first = 0,
        pg33first = 0,
        pg34first = 0,
        pg35first = 0,
        pg36first = 0,
        pg37first = 0,
        pg38first = 0,
        pg39first = 0,
        pg1last = 100,
        pg2last = 100,
        pg3last = 100,
        pg4last = 100,
        pg5last = 100,
        pg6last = 100,
        pg7last = 100,
        pg8last = 100,
        pg9last = 100,
        pg10last = 100,
        pg11last = 100,
        pg12last = 100,
        pg13last = 100,
        pg14last = 100,
        pg15last = 100,
        pg16last = 100,
        pg17last = 100,
        pg18last = 100,
        pg19last = 100,
        pg20last = 100,
        pg21last = 100,
        pg22last = 100,
        pg23last = 100,
        pg24last = 100,
        pg25last = 100,
        pg26last = 100,
        pg27last = 100,
        pg28last = 100,
        pg29last = 100,
        pg30last = 100,
        pg31last = 100,
        pg32last = 100,
        pg33last = 100,
        pg34last = 100,
        pg35last = 100,
        pg36last = 100,
        pg37last = 100,
        pg38last = 100,
        pg39last = 100,
        page1id = "#p0",
        page2id = "#p0",
        page3id = "#p0",
        page4id = "#p0",
        page5id = "#p0",
        page6id = "#p0",
        page7id = "#p0",
        page8id = "#p0",
        page9id = "#p0",
        page10id = "#p0",
        page11id = "#p0",
        page12id = "#p0",
        page13id = "#p0",
        page14id = "#p0",
        page15id = "#p0",
        page16id = "#p0",
        page17id = "#p0",
        page18id = "#p0",
        page19id = "#p0",
        page20id = "#p0",
        page21id = "#p0",
        page22id = "#p0",
        page23id = "#p0",
        page24id = "#p0",
        page25id = "#p0",
        page26id = "#p0",
        page27id = "#p0",
        page28id = "#p0",
        page29id = "#p0",
        page30id = "#p0",
        page31id = "#p0",
        page32id = "#p0",
        page33id = "#p0",
        page34id = "#p0",
        page35id = "#p0",
        page36id = "#p0",
        page37id = "#p0",
        page38id = "#p0",
        page39id = "#p0",
        ajaxtype1 = "",
        ajaxtype2 = "",
        ajaxtype3 = "",
        ajaxtype4 = "",
        ajaxtype5 = "",
        ajaxtype6 = "",
        ajaxtype7 = "",
        ajaxtype8 = "",
        ajaxtype9 = "",
        ajaxtype10 = "",
        ajaxtype11 = "",
        ajaxtype12 = "",
        ajaxtype13 = "",
        ajaxtype14 = "",
        ajaxtype15 = "",
        ajaxtype16 = "",
        ajaxtype17 = "",
        ajaxtype18 = "",
        ajaxtype19 = "",
        ajaxtype20 = "",
        ajaxtype21 = "",
        ajaxtype22 = "",
        ajaxtype23 = "",
        ajaxtype23 = "",
        ajaxtype24 = "",
        ajaxtype25 = "",
        ajaxtype26 = "",
        ajaxtype27 = "",
        ajaxtype28 = "",
        ajaxtype29 = "";
    ajaxtype30 = "", ajaxtype31 = "", ajaxtype32 = "", ajaxtype33 = "", ajaxtype34 = "", ajaxtype35 = "", ajaxtype36 = "", ajaxtype37 = "", ajaxtype38 = "", ajaxtype39 = "";
    var nu = 0,
        urlname = "",
        urlname2 = "",
        lastpage = $(".fsi").length - 1;
    $(document).ready(function () {
        for ("#" + lastpage === location.hash ? $(".right_arrow").hide() : $(".right_arrow").show(), $("#submenu").mouseover(function () {
                $(this).css("overflow-x", "auto").css("overflow-y", "hidden")
            }), $("#submenu").mouseout(function () {
                $(this).css("overflow-x", "hidden")
            }), $("#submenu").bind("touchstart", function () {
                $(this).css("overflow-x", "auto").css("overflow-y", "hidden")
            }).bind("touchend", function () {}), 751 === $("#fsi_wrapper").width() && $(".submenu_overflow").css("width", 110 * menu_length + "px"), 750 === $("#fsi_wrapper").width() && $(".submenu_overflow").css("width", 110 * menu_length + "px"), $("#fsi_wrapper").width() < 700 && $(".submenu_overflow").css("width", 95 * menu_length + "px"), $("#fsi_wrapper").width() > 751 && $(".submenu_overflow").css("width", 110 * menu_length + "px"), $(window).resize(function () {
                751 === $("#fsi_wrapper").width() && $(".submenu_overflow").css("width", 110 * menu_length + "px"), 750 === $("#fsi_wrapper").width() && $(".submenu_overflow").css("width", 110 * menu_length + "px"), $("#fsi_wrapper").width() < 700 && $(".submenu_overflow").css("width", 95 * menu_length + "px"), $("#fsi_wrapper").width() > 751 && $(".submenu_overflow").css("width", 110 * menu_length + "px")
            }), $("#pages_total").text(pages_amount), $("#pageof").val(parseInt(location.hash.replace("#", "")) + 1); pages_amount > pg1;) $(".menu_number_overflow").append('<div id="menuFSI' + pg1 + '" class="menu_item" data="' + pg1 + '" data2="' + $("#pg" + pg1).attr("data2") + '">' + parseInt(pg1 + 1) + "</div>"), $(".mobilemenu_content").append('<div id="menuFSI' + pg1 + '" class="menu_item_small" data="' + pg1 + '">' + parseInt(pg1 + 1) + "</div>"), pg1++;
        "" != window.location.hash ? ($("#pg" + location.hash.replace("#", "")).not("finished").html(eval("content_page" + location.hash.replace("#", ""))), $("#pg" + location.hash.replace("#", "")).addClass("finished"), $(".promo_box").each(function () {
            $(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++
        }), wrapprogram(), $("#pg" + location.hash.replace("#", "")).css("display", "block"), $("#menuFSI" + location.hash.replace("#", "")).addClass("menu_clicked_class"), $("#menu_box_desktop_name strong").text($("#pg" + location.hash.replace("#", "")).attr("data2")), "#0" === location.hash && $(".left_arrow").hide(), runajaxcontent(), marketing()) : (window.location.hash = "#0", $("#pageof").val(parseInt(location.hash.replace("#", "")) + 1), $("#pg0").html(content_page0), $("#pg0").addClass("finished"),
    
        
        
        $(".promo_box").each(function () {
            $(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++
        }), wrapprogram(), $("#pg0").css("display", "block"), $(".left_arrow").css("display", "none"), $("#menuFSI0").addClass("menu_clicked_class"), $("#menu_box_desktop_name strong").text($("#pg" + location.hash.replace("#", "")).attr("data2")), runajaxcontent(), marketing()),
        
          $(".menu_item").click(function () {
            location.hash = $(this).attr("data"),
           
            $('ul.breadcrumbs>li:nth-child(3)').html('<li><a title="Page '+(parseInt(location.hash.replace('#' ,''))+1)+'" href="/content/weekly-ad'+location.hash+'" class="ico">Page '+(parseInt(location.hash.replace('#' ,''))+1)+'</a><li>');
    
    
             $(".fsi").css("display", "none"),
              $(".productdrilldown").css("left", "-102%"),
               $("#pg" + location.hash.replace("#", "")).not(".finished").html(eval("content_page" + location.hash.replace("#", ""))), $("#pg" + location.hash.replace("#", "")).addClass("finished"), $(".promo_box").each(function () {
                $(this).attr("id", "p" + nu), $(this).not(".loaded").append('<div class="dynamic"></div>').addClass("loaded"), nu++
            }), wrapprogram(), $("#pg" + location.hash.replace("#", "")).show(), $("#pageof").val(parseInt(location.hash.replace("#", "")) + 1), $(".menu_item").removeClass("menu_clicked_class"), $("#menuFSI" + location.hash.replace("#", "")).addClass("menu_clicked_class"), $(window).scrollTop(0), "#0" === location.hash ? $(".left_arrow").css("display", "none") : $(".left_arrow").css("display", "block"), $("#menu_box_desktop_name strong").text($("#pg" + location.hash.replace("#", "")).attr("data2")), "#" + lastpage === location.hash ? $(".right_arrow").hide() : $(".right_arrow").show(), runajaxcontent(), marketing()
        }), $(".right_arrow").click(function () {
            $("#menuFSI" + eval(parseInt(location.hash.replace("#", "")) + 1)).click(), $(".left_arrow").fadeIn();
            $('ul.breadcrumbs>li:nth-child(3)').html('<li><a title="Page '+(parseInt(location.hash.replace('#' ,''))+1)+'" href="/content/weekly-ad'+location.hash+'" class="ico">Page '+(parseInt(location.hash.replace('#' ,''))+1)+'</a><li>');
        }), $(".left_arrow").click(function () {
            $("#menuFSI" + eval(parseInt(location.hash.replace("#", "")) - 1)).click();
            $('ul.breadcrumbs>li:nth-child(3)').html('<li><a title="Page '+(parseInt(location.hash.replace('#' ,''))+1)+'" href="/content/weekly-ad'+location.hash+'" class="ico">Page '+(parseInt(location.hash.replace('#' ,''))+1)+'</a><li>');
        }), $("#pageof").keypress(function (t) {
            if (13 == t.which) {
                var e = $(this).val() - 1;
                $("#menuFSI" + e.toString()).click()
            }
        }), $(".submenu_button").click(function () {
            $(".submenu_button").css("color", "#333"), $(this).css("color", "#cf171f"), $("#menuFSI" + $(this).attr("data")).click(), $(".mobilemenu_content").hide(),
            $('ul.breadcrumbs>li:nth-child(3)').html('<li><a title="Page '+(parseInt(location.hash.replace('#' ,''))+1)+'" href="/content/weekly-ad'+location.hash+'" class="ico">Page '+(parseInt(location.hash.replace('#' ,''))+1)+'</a><li>')
        }), $("#submenu").show(), $(".menu_item_small").click(function () {
            $(".mobilemenu_content").hide(), $("#menu_box_mobile").show(), $("#menuFSI" + $(this).attr("data")).click()
        }), $(window).scroll(function () {
            var t = $(window).scrollTop();
            t > 90 && ($("#submenu").addClass("fixed_menu"), $("#menu_box_desktop").addClass("fixed_menu2")), t < 160 && ($("#submenu").removeClass("fixed_menu"), $("#menu_box_desktop").removeClass("fixed_menu2"))
        }), $("#menu_box_mobile").click(function () {
            $(".productdrilldown").css("left", "-102%"), $(".fsi").hide(), $("html, body").animate({
                scrollTop: "0px"
            }), $(".mobilemenu_content").show(), $(this).hide()
        }), $(".productdrilldown").swipe({
            swipeLeft: function () {
                $(".productdrilldown").css("left", "-102%")
            },
            swipeRight: function () {},
            fingers: 1,
            threshold: 150,
            excludedElements: ".noSwipe"
        }), $(".mobilemenu_content").swipe({
            swipeLeft: function () {
                $(".mobilemenu_content").hide(), $("#pg" + eval(location.hash.replace("#", ""))).show()
            },
            swipeRight: function () {},
            fingers: 1,
            threshold: 150,
            excludedElements: ".noSwipe"
        }), $("#menu_box_mobile").swipe({
            swipeLeft: function () {
                swipeinfo = parseInt(location.hash.replace("#", "")) + 1, $("#menuFSI" + swipeinfo.toString()).click(), $("html, body").animate({
                    scrollTop: "0px"
                })
            },
            swipeRight: function () {
                $("html, body").animate({
                    scrollTop: "215px"
                }), $(".fsi").hide(), $(".mobilemenu_content").show(), $("#menu_box_mobile").hide()
            },
            fingers: 1,
            threshold: 150,
            excludedElements: ".noSwipe"
        }), $(".fsi").swipe({
            swipeLeft: function () {
                swipeinfo = parseInt(location.hash.replace("#", "")) + 1, $("#menuFSI" + swipeinfo.toString()).click()
            },
            swipeRight: function () {
                $(window).width() > 767 ? (swipeinfo = parseInt(location.hash.replace("#", "")) - 1, $("#menuFSI" + swipeinfo.toString()).click()) : ($("html, body").animate({
                    scrollTop: "215px"
                }), $(".fsi").hide(), $(".mobilemenu_content").show(), $("#menu_box_mobile").hide())
            },
            fingers: 1,
            threshold: 190,
            excludedElements: ".noSwipe"
        }), $("a.linkerwrap").swipe({
            swipeLeft: function () {
                swipeinfo = parseInt(location.hash.replace("#", "")) + 1, $("#menuFSI" + swipeinfo.toString()).click(), $("html, body").animate({
                    scrollTop: "0px"
                })
            },
            swipeRight: function () {
                $("html, body").animate({
                    scrollTop: "215px"
                }), $(".fsi").hide(), $(".mobilemenu_content").show(), $("#menu_box_mobile").hide()
            },
            fingers: 1,
            threshold: 150,
            excludedElements: ".noSwipe"
        }), $(document).on("scroll", function () {
            $("#menu_box_mobile").css("top", "0px").css("position", "fixed"), 0 === $(window).scrollTop() && $($("#menu_box_mobile").css("position", "relative"))
        })
    }), navigator.serviceWorker.controller ? console.log("[PWA Builder] active service worker found, no need to register") : navigator.serviceWorker.register("/images/promos/pwabuilder-sw2.js", {
        scope: "/"
    }).then(function (t) {
        console.log("Service worker has been registered for scope:" + t.scope)
    }), $(document).ready(function () {
        catagoryclick()
        newbreakcrumb()
    }), $(window).on("hashchange", function () {
        catagoryclick()
    });
    
    