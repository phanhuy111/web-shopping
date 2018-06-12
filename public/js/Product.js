$(function(){
    // $('.chitiet').show();
    // $('.kichthuoc').hide();
    // $('.giaohang').hide();
    // $('.khuyenmai').hide();

    // $('.duoi5 nav ul li a ').click(function(event) {
 	//       var danhmuc1 = $(this).attr('data-className');
 	//       danhmuc1 = "." + danhmuc1;
    //        $('.duoi5 .khoi9').isotope({filter: danhmuc1 });
    //       return false;
    //     });


    //  $('.duoi5 nav ul li a').focus(function(){
    //     $(this).css('background-color','white');
    //     $(this).css('color','black');
    //     $(this).css('border-bottom','0');
    //     $(this).css('transition','0.4s');
    // });

    //   $(".duoi5 nav ul li a").blur(function(){
    //     $(this).css("background-color", "#d0d0d0");
    // });
    
    $(window).scroll(function() {
    	var vitri = $(window).scrollTop();
    	if(vitri > 900 && vitri < 1700){
    		$('.motkhoi').addClass('motkhoi1');
        }
        else {
            $('.motkhoi').removeClass('motkhoi1');
        }
    });   
});

