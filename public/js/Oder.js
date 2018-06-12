$ (function(){   
    $('.cosonhanhang').hide();
    
    $('.nut1').click(function(event) {
    	$('.diachinhanhang').show();
    	$('.cosonhanhang').hide();
        $(this).css('transition','0.4s');
    });
    
    $('.nut2').click(function(event) {
    	$('.diachinhanhang').hide();
    	$('.cosonhanhang').show();
        $(this).css('transition','0.4s');
    });
    
});