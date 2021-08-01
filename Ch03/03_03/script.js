$(document).ready(function() {
'use strict';

	$('#frmContact').submit(function(evt){
		evt.preventDefault();
		alert('ach ya clicked the thing!');

		console.log("First Link", $('a:first').attr('href'))

		$('#backpack').prop({
			'checked' : false,
			'disabled' : true
		});

	});
});
