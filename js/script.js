$(document).ready(function(){

	// alert

	$('.btn1').click(function(){
		alert("Well done! You just wrote your first jquery code.")
	});

	// hide
	$('#hide').click(function(){
		$('h2').hide(1000);
	});

	// show
	$('#show').click(function(){
		$('h2').show(1000);
	});

	// toggle
	$('#toggle').click(function(){
		$('h2').toggle(500);
	});

	// fade out
	$('#fadeOut').click(function(){
		$('h3').fadeOut('slow');
	});

	// fade out
	$('#fadeIn').click(function(){
		$('h3').fadeIn('slow');
	});

	// fade out
	$('#fadeToggle').click(function(){
		$('h3').fadeToggle('fast');
	});

	// slide toggle
	$('.panel').click(function(){
		$('.content').slideToggle();
	});


});