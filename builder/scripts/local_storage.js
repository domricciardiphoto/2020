function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}



if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
  }
  else {
    // Too bad, no localStorage for us
    alert('This application will not save your work if you use this perticular browser')
  }


$('.cleareverything_button').on('click' , function() {
    var r = confirm("Are You Sure?");
if (r == true) {
    $('#addmenucodeblocks').html('')
    $('.menupreview').html('')
    $('.pagepreview').html('')
    $('#pageslivecode').html('')
    $('#att1').html('0')
    $('#att2').html('0') 
    localStorage['islive'] = '0'; 
    localStorage.clear();
} else {
}
})

  /*-----------------------------------------------------------------------------------------------*/

$('#addmenucodeblocks').html(localStorage['structurecode'])
$('.menupreview').html(localStorage['menupreview'])



$('body').on('click' , function() {
 /*menucode*/    localStorage['structurecode'] = $('#addmenucodeblocks').html();  
 /*menuitems*/   localStorage['menupreview'] = $('.menupreview').html();  

})


$('.pagepreview').html(localStorage['pagepreview'])
$('.bodycode').html(localStorage['bodycode'])

$('#att1').html(localStorage['AmountofMenu'])
$('#att2').html(localStorage['Amoutofpages'])

$('.addmenucodeFinalizer').html(localStorage['finalcode_menu'])
$('.bodycontent').html(localStorage['finalcode_bodycontent'])
$('#whatPageAmIworkingOn').html(localStorage['pagecreationlist'])

function localStorfunc() {
   /*page preview */ localStorage['pagepreview'] = $('.pagepreview').html();  
   /*page preview */ localStorage['bodycode'] = $('.bodycode').html();  
                     localStorage['AmountofMenu'] = $('#att1').html(); 
                     localStorage['Amoutofpages'] = $('#att2').html(); 
                     localStorage['islive'] = '1'; 
                     localStorage['finalcode_menu'] = $('.addmenucodeFinalizer').html()
                     localStorage['finalcode_bodycontent'] = $('.bodycontent').html()
                     localStorage['pagecreationlist'] = $('#whatPageAmIworkingOn').html()

}

$(".pagepreview").sortable({
    cursorAt: { right: 15},
    containment: ".pagepreview"
  });

  $('.delete').on('click', function () {
    $(this).parent('div').remove()
    pagecodefunction()
    $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
    attribute()
  })


  $(".pageloaded").children('select').change(function () {
    $('#pageslivecode').empty();
    $('.pageloaded').each(function () {
      whatsthenumber = $(this).children('.codepagenum').text();
      whatsthename = $(this).children('select').val()
      finaloopcode = '<br>&lt;div id="section<span class="codepagenum2">' + whatsthenumber + '</span>" class="pg_internal" data="' + whatsthename + '"> &lt;/div&gt;'
      $('#pageslivecode').append(finaloopcode)
      
      $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
    })

  })


  if(localStorage['islive'] === '1') {
    $('#addStructurePages2').show();
    $('#addStructurePages2').on('click', function () {
      closeLoop2 = parseInt($('.pagepreview').children('.pageloaded:last-of-type').children('.codepagenum').text()) + 1
      pageloopcode = '<div class="pageloaded">Page = "A"&nbsp;&nbsp;Position = "section<span class="codepagenum">' + closeLoop2 + '</span>" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category=" <select name="pageamount" id="pageamount">' + catswithnames + '</select><span class="delete">delete</span><span class="edit">Edit</span></div>'
      finaloopcode = '<br>&lt;div id="section<span class="codepagenum2">' + closeLoop2 + '</span>" class="pg_internal" data="Appliances"> &lt;/div&gt;'
      $('#pageslivecode').append(finaloopcode)
      $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
      $('.pagepreview').append(pageloopcode)


      $('.delete').on('click', function () {
        $(this).parent('div').remove()
        pagecodefunction()
        $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
        attribute()
      })

      localStorfunc()
    })
  } else {
    $('#addStructurePages2').hide()
  }


 