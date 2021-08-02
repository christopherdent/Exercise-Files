$(function() {
    "use strict";

    $('#cart-water')
    .find('a')
    .on('click', function(e){
    		e.preventDefault();

        var $link = $(this),
            $img = $link.find('img'),
            drink = $link.find('h3').text();

        var $ghost = $img.clone().appendTo($link).addClass('ghost')

        var imgCoords = $img.offset(),
          $target = $('#cart-target > p'),
          targetCoords = $target.offset()

        $ghost.animate({
          'left' : targetCoords.left - imgCoords.left,
          'top' : targetCoords.top - imgCoords.top,
          'opacity' : 0,
          'width' : '20px'

        }, 1500, 'easeInOutExpo', function() {
          $(this).fadeOut()
        })

$target.append(`<p>${drink} Added!</p>`)

 
///fade them out and make smaller as they go
///make them go BELOW the cart contents header

///after each item gets in cart, put message in saying that one was added to the cart.







    });
});
