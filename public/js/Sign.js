$ (function(){   
    $('#create_customer').hide();
    $('userbox1').hide(); 

    $('.btn.btn-outline').click(function(event) {
    	$('.btn.btn-outline').hide();
    	$('#create_customer').show();
    	$(this).css('transition','0.4s');
    });

    $('.action_bottom').click(function(event) {
    	$('.btn.btn-outline').show();
    	$('#create_customer').hide();
    	$(this).css('transition','0.4s');
    }); 
    $('.quenmk').click(function(event) {
    	$('.userbox').hide();
    	$('.userbox1').show();
    });
    
});