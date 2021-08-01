$(function(){
'use strict';

	var $form = $('#my-form')

	$form.find('.group:nth-child(1)').addClass('error')

	$form.find('.group:nth-child(2)').addClass('msg').append('<p>Good choice!</p>')

});

//     var $grid = $('#bab_grid'),  //prefix JQ varaibles with $
//     $lists = $grid.find('li');  //grab all list items inside bab_grid
//
// $lists.css('background', '#600')
//   .animate({width : '-=100'}, 2000)
//   .fadeOut()
//   .fadeIn('slow')
