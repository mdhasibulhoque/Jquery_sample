$(document).ready(function(){

	//1ex alert();

	//2ex button msg

	$('#welcome').click(function(){
		alert("Welcome")
	})

	//3ex show/hide

	$('#hide').on('click', function(){
		$('#sh_h3').hide();
	})
	$('#show').on('click', function(){
		$('#sh_h3').show();
	})
	$('#togg').on('click', function(){
		$('#sh_h3').toggle('slow');
	})

	//4ex fade Show/Hide

	$('#fhide').on('click', function(){
		$('#fsh_h3').fadeOut();
	})
	$('#fshow').on('click', function(){
		$('#fsh_h3').fadeIn();
	})
	$('#ftogg').on('click', function(){
		$('#fsh_h3').fadeToggle('slow');
	})

	// ques/answ
	$('.ques').on('click', function(){
		$('.answ').slideToggle(1000);
	})

	// down

	$('.ques1').on('click', function(){
		$('.down').slideDown(1000);
	})

	// slideup

	$('.ques2').on('click', function(){
		$('.slideup').slideUp(1000);
	})

	// box1

	$('#b1').on('click', function(){
		$('.box1').fadeIn();
		$('.box2').fadeIn('slow');
		$('.box3').fadeIn(2000);
	})

	// box2

	$('#b2').on('click', function(){
		$('.box4').fadeOut(2000);
		$('.box5').fadeOut('slow');
		$('.box6').fadeOut();
	})

	// box3

	$('#b3').on('click', function(){
		$('.box7').fadeToggle(2000);
		$('.box8').fadeToggle('slow');
		$('.box9').fadeToggle();
	})

	// box3

	$('#b4').on('click', function(){
		$('.box10').fadeTo('slow', 0.7);
		$('.box11').fadeTo('slow', 0.5);
		$('.box12').fadeTo('slow', 0.3);
	})

	// slideUp

	$('.p').on('click',function(){
		$(this).slideUp();
	})


})