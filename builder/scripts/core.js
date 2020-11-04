   
   
    var app = new Vue({
      el: '#app',
      data: {
          help: 'Will Be filled in during Beta 1',
  
      }
      
      })



$(document).ready(function () {

  //On Page Load Functions
  $(".menupreview").sortable({
    cursorAt: { right: 15},
    containment: ".menupreview"
  });

  function addtoPageBuilderCode() {

  resetnumbers = 0
  getPageAmount = $('.pageloaded').length
  $('#whatPageAmIworkingOn').empty()
  while(resetnumbers < getPageAmount ) {
    $('#whatPageAmIworkingOn').append('<option value="'+resetnumbers+'">Page '+(resetnumbers+1)+'</option>')
    resetnumbers++

  }
  
  localStorfunc()
  }


  function addtoPageBuilderCode2() {
alert('hi')





  }



  for (var i = 0; i < max_pages; i++) {
    $('.pagenum').append($('<option value="' + i + '">Page ' + (i + 1) + '</option>'));
    $('#pageamountloop').append($('<option value="' + (i+1) + '">Page ' + (i+1) + '</option>'));
  }


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  $('#att0').text('DFSI-' + mm + '-' + dd + '-' + yyyy)

  $(".menupreview").on("sortstop", function (event, ui) {
    menucodefunction()
  });
  $(".pagepreview").on("sortstop", function (event, ui) {
    pagecodefunction()
  });




  
  $('#core_name').text(core_name)
  $('#core_version').text(core_version)
  $('#core_author').text(core_author)


  //---------------------------------------------------------------------------------------------------------------------------------------------------------------

  function attribute() {

    $('.fl_attributes').children('span').text('');
    $('#att1').text($('.menuitem').length)
    $('#att0').text('DFSI-' + mm + '-' + dd + '-' + yyyy)
    $('#att2').text($('.pageloaded').length)
    addtoPageBuilderCode()
    localStorfunc()
  }


  function menucodefunction() {
    $('#addmenucodeblocks').empty()
    $('.menuitem').each(function () {
      code_pagenumber = $(this).children('.pagenumbox').children('.whatsthenum').children('input').val();
      code_name = $(this).children('.submenu_title').children('.whatsthename').children('input').val();
      code_img = $(this).children('img').attr('src');
      $('#addmenucodeblocks').append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="submenu-d" title="' + code_name + '" img="' + code_img + '" page="' + parseInt(code_pagenumber - 1) + '"&gt;&lt;/div&gt; <br>');
      $('.addmenucodeFinalizer').text($('.copycode .snippet').text())
      $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())

    })
  }



  function pagecodefunction() {
    $('#pageslivecode').empty()
 
    pageReNumber = 0
    $('.pageloaded').each(function () {
      finalcode_pagenumber = $(this).children('.codepagenum').text()
      finalcode_name = $(this).children('#pageamount').val();
      $('#pageslivecode').append('<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="section' + pageReNumber + '" class="pg_internal" data="' + finalcode_name + '"&gt;&lt;/div&gt;')
      pageReNumber++
      $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
      localStorfunc()
      
    })

    reorderpagenum = 0;
    $('.codepagenum').each(function () {
      $(this).text(reorderpagenum)
      reorderpagenum++
    })

    
    
  }



  function deletepagecontent() {

    $(this).parent('.pagepreview').remove()


  }



  $('.menu1 .addcatt button').on('click', function () {
    categoryname = $(this).parent('div').children('select.mycatname').val();
    pagenumber = $(this).parent('div').children('select[name ="pagenum"]').val();
    menuimg = $(this).parent('div').children('select.mycatname').find(':selected').attr('data')

    $('.menupreview').append('<div class="menuitem"><div class="pagenumbox">Page <span class="whatsthenum"><input style="width:20px;border: none;" value="' + (parseInt(pagenumber) + 1) + '"></input></span></div><div class="closenumbox">X</div><img src="https://www.pcrichard.com' + menuimg + '"><div class="submenu_title"><span class="whatsthename"><input style="width:80px;text-align: center;border: none;" value="' + categoryname + '"></input></span></div></div>')
    menucodefunction()

    $('.closenumbox').on('click', function () {
      $(this).parent('div').remove(),
        menucodefunction()
      attribute()

    });


    $('.whatsthenum input').on('click', function () {
      $('#resubmit').fadeIn()
      
    })

    $('.whatsthename input').on('click', function () {
      $('#resubmit').fadeIn()
    })

    $('#resubmit').on('click', function () {
      $(this).text('Processing Your Changes......'),

     $('.whatsthenum input').each(function() {
       newvalue = $(this).val();
       $(this).attr('value' , newvalue )
       localStorage['menupreview'] = $('.menupreview').html();  
     })
      
        menucodefunction()
      $(this).delay(1000).fadeOut(600, function () {

        $(this).text('Complete Menu Changes')
      });

      return false
    })



    $('.whatsthenum').children('input').keypress(function (event) {
      menucodefunction()
      
    });



    attribute()
  })



  $('.previewcontent').on('click', function () {
    whatbuildertoshow = $(this).attr('data')
    switch (whatbuildertoshow) {
      case 'menu':
        $('.menupreview').fadeIn(600),
        $('.totalpreview').show(),
        $('.menu1').show(),
        $('.menu2').hide(),
        $('.menu3').show(),
        $('.menu2a').hide(),
        $('.menupreview').show(),
        $('.pagepreview').show(),
        $('.label[data="Menu"]').show(),
        $('.label[data="Pages"]').show(),
        $('.bodycode').show(),
        $('.copycode').show(),
        $('.page_creator').hide(),
        $('.pageinfo_controller').hide(),
        $('.page_creator_block_code').hide(),
        $('.downloader').show(),
        $('.previewcontent').css('background-color', '#fff').css('color', '#333');
        $(this).css('background-color', 'chocolate').css('color', '#fff');

        break;
      case 'content':
        $('.menu00').hide(),
        $('.menu3').hide(),
        $('.menu1').hide(),
        $('.menu2').show(),
        $('.menu2a').show(),
        $('.menupreview').hide(),
        $('.pagepreview').hide(),
        $('.label[data="Menu"]').hide(),
        $('.label[data="Pages"]').hide(),
        $('.bodycode').hide(),
        $('.copycode').hide(),
        $('.totalpreview').hide(),
        $('.page_creator').show(),
        $('.page_creator_block_code').show();
        $('.downloader').hide(),
        $('.previewcontent').css('background-color', '#fff').css('color', '#333'),
        $(this).css('background-color', 'chocolate').css('color', '#fff');
        break;
      case 'structure':
        $('.menupreview').hide()
        $('.menu1').hide()
        $('.menu2').hide()
        $('.menu3').hide()
        $('.label[data="Menu"]').hide(),
        $('.label[data="Pages"]').hide(),
        $('.totalpreview').hide(),
        $('.page_creator').hide(),
        $('.previewcontent').css('background-color', '#fff').css('color', '#333');
        $(this).css('background-color', 'chocolate').css('color', '#fff');
        break;
      case '3':
        $('.control_section').show()
        $('.help').hide()
        break;
      case '4':
        $('.control_section').hide()
        $('.help').show()
        break;

      default:
        null
    }


  });


  $('.sectionhide').on('click', function () {

    if ($(this).attr('dis') === '0') {
      $(this).text('+'),
        $(this).attr('dis', '1'),
        $(this).parent('div').children('.section_options').toggle("blind", 500)
    } else {
      $(this).text('-')
      $(this).attr('dis', '0'),
        $(this).parent('div').children('.section_options').toggle("blind", 500)
    }

  })

  $('#workbench').on('click', function () {
    $(document).scrollTop(0);
    $('#finalcode').toggle("slide")
  })
  $('#closeCodeFinalizer').on('click', function () {
    $('#finalcode').toggle("slide")
  });



  $('#addStructurePages').on('click', function () {
    localStorage['islive'] = '1'; 
    $('#whatPageAmIworkingOn_button').show()

    amountToloop = $('#pageamountloop').val();

    $('#addStructurePages2').fadeIn();

    if (closeLoop > 0) {


      var txt;
      if (confirm("Are You Sure? It`ll Reset All Pages")) {
        $('#pageslivecode').empty();
        $('.pagepreview').empty();
        closeLoop = 0;
        resetnumbers = 0
        do {
          pageloopcode = '<div class="pageloaded">Page = '+(closeLoop+1)+' &nbsp;&nbsp;&nbsp;&nbsp; Position = "section<span class="codepagenum">' + closeLoop + '</span>" &nbsp;&nbsp;&nbsp; Category=" <select name="pageamount" id="pageamount">' + catswithnames + '</select><span class="delete">delete</span><span class="edit">Edit</span></div></div>'


          finaloopcode = '<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="section<span class="codepagenum">' + closeLoop + '</span>" class="pg_internal" data="Appliances"> &lt;/div&gt;'
          $('#pageslivecode').append(finaloopcode)
        
          $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
          $('.pagepreview').append(pageloopcode)
          closeLoop++


          $(".pageloaded").children('select').change(function () {
            
            $('#pageslivecode').empty();
            $('.pageloaded').each(function () {
              whatsthenumber = $(this).children('.codepagenum').text();
              whatsthename = $(this).children('select').val()
              finaloopcode = '<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="section<span class="codepagenum2">' + whatsthenumber + '</span>" class="pg_internal" data="' + whatsthename + '"> &lt;/div&gt;'
              $('#pageslivecode').append(finaloopcode)
            
              $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
              

             
            })

          
          })

        


        }




        while (closeLoop < amountToloop);
        attribute()
        closeLoop++
        $('.edit').on('click', function () {
          whatiamInfo = 'section'+ $(this).parent('div').children('.codepagenum').text()
          editpagecontent(whatiamInfo)
        })

        $('.delete').on('click', function () {
          $(this).parent('div').remove()
          pagecodefunction()
          $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
          attribute()
        })

      
        return false;
      } else {
        alert('Whew! That was close!');
      }




    } else {
      $('.pagepreview').empty();
      $('#pageslivecode').empty();
      do {
        pageloopcode = '<div class="pageloaded">Page = '+(closeLoop+1)+'  &nbsp;&nbsp;&nbsp;&nbsp; Position = "section<span class="codepagenum">' + closeLoop + '</span>" &nbsp;&nbsp;&nbsp; Category=" <select name="pageamount" id="pageamount">' + catswithnames + '</select> <span class="delete">delete</span><span class="edit">Edit</span></div>'

        finaloopcode = '<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="section<span class="codepagenum2">' + closeLoop + '</span>" class="pg_internal" data="Appliances"> &lt;/div&gt;'
        $('#pageslivecode').append(finaloopcode)
        $('.page_creator_block_code').append('<div class="editmypage">'+finaloopcode+'</div>')
        //bug for another day alert('This is where we add the page code')
        $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
        $('.pagepreview').append(pageloopcode)
        closeLoop++
      }

      while (closeLoop < amountToloop);
      $('.edit').on('click', function () {
        whatiamInfo = $(this).parent('div').children('.codepagenum').text()
        editpagecontent(whatiamInfo)
      })
    }


    attribute()



    $('.delete').on('click', function () {
      $(this).parent('div').remove()
      pagecodefunction()
      $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
      attribute()
    })


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



      $(".pageloaded").children('select').change(function () {
      
        $('#pageslivecode').empty();

        $('.pageloaded').each(function () {
          whatsthenumber = $(this).children('.codepagenum').text();
          whatsthename = $(this).children('select').val()
          finaloopcode = '<br>&lt;div id="section<span class="codepagenum2">' + whatsthenumber + '</span>" class="pg_internal" data="' + whatsthename + '"> &lt;/div&gt;'
          $('#pageslivecode').append(finaloopcode)
          
          $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
          localStorfunc()

          
        })

        
      });

      attribute()
      
    });


    $(".pageloaded").children('select').change(function () {
    

      $('#pageslivecode').empty();

   
      $('.pageloaded').each(function () {
        whatsthenumber = $(this).children('.codepagenum').text();
        whatsthename = $(this).children('select').val()
      
        finaloopcode = '<br>&lt;div id="section<span class="codepagenum2">' + whatsthenumber + '</span>" class="pg_internal" data="' + whatsthename + '"> &lt;/div&gt;'
        $('#pageslivecode').append(finaloopcode)
        $('.bodycontent').empty().text($('.bodycode').children('.snippet').children('#pageslivecode').text())
        //------here is where the category change happens

        $(this).children('select').children('option').removeAttr("selected");
       // $(this).children('select').children('option:selected').attr("checked", "checked");
        localStorfunc()

      })
      localStorfunc()



    });



 
 
    $(".pagepreview").sortable({
      cursorAt: { right: 15},
      containment: ".pagepreview"
    });


    localStorfunc() 
    localStorage['pagecreationlist'] = $('#whatPageAmIworkingOn').html()
  }) 




  $('.downloader').on('click', function () {


    if ($(this).attr('data') === 'final_code_copy') {
      today = 'DFSI-' + mm + '-' + dd + '-' + yyyy;
    } else {
      today = 'MENU-' + mm + '-' + dd + '-' + yyyy;
    }




    var text = $('.' + $(this).attr('data')).html(),
      blob = new Blob([text], {
        type: 'text/plain'
      }),
      anchor = document.createElement('a');

    anchor.download = today + '.html'
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
  })



})


