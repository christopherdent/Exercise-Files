$(function() {
    'use strict';


    var $grid = $('#bab_grid'),  //prefix JQ varaibles with $
    $lists = $grid.find('li');  //grab all list items inside bab_grid

$lists.css('background', '#600')
  .animate({width : '-=100'}, 2000)
  .fadeOut()
  .fadeIn('slow')

});
