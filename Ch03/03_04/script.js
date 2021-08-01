$(function() {
'use strict';




	var $checkboxes =
		$('.checkbox-group').find('input[type=checkbox]');   //query the checkbox group by class but then find the checkbox inputs under it!
			$checkboxes.prop('disabled', true)  //modify properties of the checkboxes to disable them

			$('#bike_check').click(function(){
				console.log('debug')
				var $toggle = $(this);
				console.log($toggle.prop('checked'))


				if($toggle.prop('checked') === true) {
					$checkboxes.prop('disabled', false);
				} else {
					$checkboxes.prop('disabled', true);
				}
	 		})


	$('#newsletterNo').click(function() {
console.log('you clicked no')
		$('#frmContact').attr('action', 'contact-submitted-nosub.htm');
	});

	$('#newsletterYes').click(function() {
		console.log('you clicked yes')
		$('#frmContact').attr('action', 'contact-submitted.htm')
	});

});
