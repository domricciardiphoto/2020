
function pagecontentfunction_product(product_url_content) {
  $('.page_creator_block_code').append('&lt;div class="gridproducts" data="'+product_url_content+'"&gt;&lt;/div&gt;<br>')
}


function pagecontentfunction_image(product_url_content) {
  alert('sdf')
  $('.page_creator_block_code').append('&lt;div class="gridproducts" data="'+product_url_content+'"&gt;&lt;/div&gt;<br>')
}



  
function dynamicproductedit() {
  $('.productlist').on('click' , function(){alert('hi')})
}

  
  function addproductgridtosystem(stringProducts , amount) {


    productcode1 = '<div url="'+stringProducts+'" class="promo_box_100 productlist"><img style="width:100%;max-width:770px" src="./assets/core_images/assetimg1.jpg"></div>'


    productcode2 = ' <div url="'+stringProducts+'" class="promo_box_100 productlist"><img style="width:100%;max-width:770px" src="./assets/core_images/assetimg2.jpg"></div>'


    productcode3 = ' <div url="'+stringProducts+'" class="promo_box_100 productlist"><img style="width:100%;max-width:770px" src="./assets/core_images/assetimg3.jpg"></div>'

    
    productcode4 = ' <div url="'+stringProducts+'" class="promo_box_100 productlist"><img style="width:100%;max-width:770px" src="./assets/core_images/assetimg4.jpg"></div>'


   

    switch( amount ) {
      case 1:
        $('.page_creator_block').append(productcode1)
    
        break;
      case 2:
        $('.page_creator_block').append(productcode2)
        break;
      case 3:
        $('.page_creator_block').append(productcode3);
       
        break;
      case 4:
        $('.page_creator_block').append(productcode4);
        
        break;
      default:
        // code block
    }

    $(".page_creator_block").sortable({containment: ".page_creator_block"});
    $('.productlist').on('click' , function() {alert($(this).attr('url'));return false})
    $('#gridurl1').val(""),$('#gridurl2').val(""),$('#gridurl3').val(""),$('#gridurl4').val("")


  }
  
  
  function editpagecontent(whatiamInfo) {
    document.getElementById('whatPageAmIworkingOn').value=whatiamInfo.replace('section' , '');
    $('.previewcontent[data="content"]').click()
  }


  $('#whatPageAmIworkingOn_button').on('click' , function() {
   selectWorkingPage = $('#whatPageAmIworkingOn').val();
   $('.mypagebuilder_section').text(selectWorkingPage)
  })

$('#adddynamicImgs').children('button').on('click' , function() {
whatsTheImgName = '/images/promos/'+$(this).parent('div').children('#imagename').val()
whatsTheImgSide = $(this).parent('div').children('#adpageiamges').val();
WhatsTheImgURL = $(this).parent('div').children('#imageurl').val();
core_image_code = '<a href="'+WhatsTheImgURL+'"><div class="promo_box_'+whatsTheImgSide+'"><img src="'+whatsTheImgName+'"/></div></a>'  


if(whatsTheImgName === '/images/promos/') {
alert('You Have to add a image filename')
return false;
}

if(WhatsTheImgURL === '') {
var noURL = prompt('No URL? Enter One Here if nessasary' , 'No-URL')
$('.page_creator_block').append('<div id="edit'+promoimage+'"  url="noURL" class="promo_box_'+noURL+'"><div class="theX">X</div><img src="https://www.pcrichard.com'+whatsTheImgName+'"/></div>')
} else {
  $('.page_creator_block').append('<div id="edit'+promoimage+'"  url="'+WhatsTheImgURL+'" class="promo_box_'+whatsTheImgSide+'"><div class="theX">X</div><img src="https://www.pcrichard.com'+whatsTheImgName+'"/></div>') 
}




$(".page_creator_block").sortable({
  containment: ".page_creator_block"
});
$( ".page_creator_block" ).disableSelection();

$('.theX').on('click' , function() {
$(this).parent('div').remove();
$('.pageinfo_controller').slideUp()
  return false
})

$('.promo_box_100 , .promo_box_50 , .promo_box_33 , .promo_box_25').on('click' , function() {
  $('.pageinfo_controller').slideDown()
  $('#imageurl_refresh').val($(this).children('img').attr('src').replace('https://www.pcrichard.com' , ''))
  $('#linkurl_refresh').val($(this).attr('url').replace('https://www.pcrichard.com' , ''))
  gettheID = $(this).attr('id');
  $('.pageinfo_controller').css('background-color' , 'steelblue');
  $('.promo_box_100 , .promo_box_50 , .promo_box_33 , .promo_box_25').css('border' , '#ccc 1px solid')
  $(this).css('border' , 'steelblue solid 1px')
  $('#newinfoforimage').on('click' , function() {
    newimageurl =  $('#imageurl_refresh').val()
    newpageurl =   $('#linkurl_refresh').val()
    newimagesize = $('#refresh_selected').val()
    $('#'+gettheID).children('img').attr('src' , 'https://www.pcrichard.com'+newimageurl)
    $('#'+gettheID).attr('url' , newpageurl)
    $('#'+gettheID).attr('class' , 'promo_box_'+newimagesize)
    $('.pageinfo_controller').css('background-color' , 'chocolate')
    $('.pageinfo_controller').slideUp()
    $('.promo_box_100 , .promo_box_50 , .promo_box_33 , .promo_box_25').css('border' , '#ccc 1px solid')
  })

$('#newinfoforimage_close').on('click' ,function() {
  $('.promo_box_100 , .promo_box_50 , .promo_box_33 , .promo_box_25').css('border' , '#ccc 1px solid')
  $('.pageinfo_controller').slideUp()
})

})

promoimage++

pagecontentfunction_image()

  })

  $( "#addproductsString" ).change(function() {


    switch( $(this).val() ) {
      case '1':
        $('#gridurl1').show()
        $('#gridurl2').hide()
        $('#gridurl3').hide()
        $('#gridurl4').hide()
        alert('Not Really Functional Yet')
        break;
      case '2':
        $('#gridurl1').show()
        $('#gridurl2').show()
        $('#gridurl3').hide()
        $('#gridurl4').hide()
        break;
      case '3':
        $('#gridurl1').show()
        $('#gridurl2').show()
        $('#gridurl3').show()
        $('#gridurl4').hide()
        break;
      case '4':
        $('#gridurl1').show()
        $('#gridurl2').show()
        $('#gridurl3').show()
        $('#gridurl4').show()
        break;
      default:
        // code block
    }


  });


  $('#addproductString').on('click' , function() {
   productStringName = $('#gridurl').val()
   productStringWidth = $('#addproductsString').val();
  

   switch( productStringWidth ) {
    case '1':
      amount = 1
      prod1 = $('#gridurl1').val()
      if(prod1 === '') {alert('You Didnt Enter in the Product.   Try Again');return false}
      if(prod1.includes('/') == true || prod1.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      stringProducts = prod1
      addproductgridtosystem(stringProducts , amount)
      break;
    case '2':
      amount = 2
      prod1 = $('#gridurl1').val()
      prod2 = $('#gridurl2').val()
      if(prod1 === '' || prod2 === '') {alert('You Didnt Enter in all the Products.   Try Again');return false}
      if(prod1.includes('/') == true || prod1.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      if(prod2.includes('/') == true || prod2.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      stringProducts = prod1+'+'+prod2
      addproductgridtosystem(stringProducts , amount)
      break;
    case '3':
    amount = 3
    prod1 = $('#gridurl1').val()
    prod2 = $('#gridurl2').val()
    prod3 = $('#gridurl3').val()

    if(prod1 === '' || prod2 === '' || prod3 === ''  ) {alert('You Didnt Enter in all the Products.   Try Again');return false}
    if(prod1.includes('/') == true || prod1.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
    if(prod2.includes('/') == true || prod2.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
    if(prod3.includes('/') == true || prod3.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
    stringProducts = prod1+'+'+prod2+'+'+prod3
    addproductgridtosystem(stringProducts , amount)
      break;
    case '4':
      amount = 4
      prod1 = $('#gridurl1').val()
      prod2 = $('#gridurl2').val()
      prod3 = $('#gridurl3').val()
      prod4 = $('#gridurl4').val()
      if(prod1 === '' || prod2 === '' || prod3 === ''|| prod4 === ''  ) {alert('You Didnt Enter in all the Products.   Try Again');return false}
      if(prod1.includes('/') == true || prod1.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      if(prod2.includes('/') == true || prod2.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      if(prod3.includes('/') == true || prod3.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      if(prod4.includes('/') == true || prod4.includes('.') == true) {alert('Cant Use slashes or periods try a Dash (Refer to Product URL)');return false}
      stringProducts = prod1+'+'+prod2+'+'+prod3+'+'+prod4
      addproductgridtosystem(stringProducts , amount)
      break;
    default:
      // code block
  }

 product_url_content = stringProducts
 pagecontentfunction_product(product_url_content)


  })