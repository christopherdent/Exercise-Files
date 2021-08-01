$(function() {
"use strict";

	var $flowers = $('#flower-items');

	$flowers
    	.find('a')
    	.colorbox({
				'rel' : 'gallery',
				'slideshow' : true,
				'width' : 600,
				'height' : 600,
				'slideshowSpeed' : 3000,
				'transition' : 'fade',
				'speed' : 1000,
				'opacity' : 0.25,
				'current' : "Arrangement {current} of {total}"








    	});
});
