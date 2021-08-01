jQuery(function(){
'use strict';

  let $group = $("#group-friends");
  $group.append('<input type="text" name="friends[]" value="" placeholder="Your friends name">');

$group.find('input:last')
      .remove()

});
