$(function() {
    "use strict";

var $cart = $('#cart-water')
    $cart.find('.tt').hide()
    $cart.find('.item').on('mouseenter mouseleave', function(){
      $(this).find('.tt').fadeToggle(1000)
    });


    $('#filter-berry').click(function(e){


    e.preventDefault()

    $cart.find('.berry').slideToggle();  
    })
});
