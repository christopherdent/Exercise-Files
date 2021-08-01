 $(function() {
"use strict";
	// https://www.youtube.com/watch?v=Bn7vZJ0AIbE


let $flowers = $('#flower-items');
	$flowers
	    .find('a')
    	    .colorbox({

        'maxWidth' : '50%'
    	});


      $flowers
    	    .find('li:nth-child(2)')
        	    .colorbox({
                'href' : 'https://www.youtube.com/embed/s7L2PVdrb_8',
                'iframe' : true,
                'width' : 600,
                'height' : 600
          });

});
