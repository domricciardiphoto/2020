window.addEventListener('DOMContentLoaded', function() {(function($) {  
    var resize_promo = $(window).width();
    

    $('.category-container-d').on('click' , function() {
    
     if(resize_promo < 767) {
        $('.subcategory-container-d ul li').on('click' , function() {document.location = $(this).children('a').attr('href');})
        if($(this).children('.category-subcat-container').children('.subcategory-container-d').is(":visible") === true ) {
        $('.subcategory-container-d').hide()
        return false;
        }
        $('.subcategory-container-d').hide()
        $(this).children('.category-subcat-container').children('.subcategory-container-d').toggle();
        return false;
     } else {
        $('.subcategory-container-d ul li').on('click' , function() {return false;})
     }   
    
    })

    $(window).on('resize' , function() {
    resize_promo = $(window).width(); 
    if(resize_promo > 767) {
      $('.subcategory-container-d').show()
    }


    })
    
    })(jQuery);});