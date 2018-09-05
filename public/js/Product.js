$(function(){
    
    $(window).scroll(function() {
    	var vitri = $(window).scrollTop();
    	if(vitri > 900 && vitri < 1700){
    		$('.motkhoi').addClass('motkhoi1');
        }
        else {
            $('.motkhoi').removeClass('motkhoi1');
        }
    }); 

    $(".xem1").click(function(){
        $(".parallax").css("margin-top", "85%");
    });
});

