$(document).ready(function () {
	/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	/*Condoms info*/
	$('#condoms').click(function () {
		showInfo();
		$('#popIn').text('These bags are filled with male condoms, female condoms, educational booklets and PREP medication, which helps with the fight against HIV.').addClass('popIn-info');
	});


	/*waste info*/
	$('#waste').click(function () {
		showInfo();
		$('#popIn').text('These waste bins provide a safe place to dispose of used and dirty needles.').addClass('popIn-info');
	});

	/*wound info*/
	$('#wound').click(function () {
		showInfo();
		$('#popIn').text('Wound kits supplied with bandages and saline are included in this first aid kit that is passed out to clients.').addClass('popIn-info');
	});

	/*narcan info*/
	$('#narcan').click(function () {
		showInfo();
		$('#popIn').text('Narcan/naloxone kits are the best line of defense against the opioid epidemic.').addClass('popIn-info');
	});

	/*narcan info*/
	$('#literature').click(function () {
		showInfo();
		$('#popIn').text('various booklets and flyers are passed out to educate clients, from sexual education to warnings of fentanyl.').addClass('popIn-info');
	});


	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/

	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}

	/*inhaler info*/
	$('#inhaler').click(function () {
		showInfo2();
		$('#popIn2').text('This inhaler contains the narcan/naloxone antidote. By pulling the plunger and dispersing the chemical into the nostril of the overdosed person, the antidrug starts working within one minute.').addClass('popIn-info');
	});


	/*gloves info*/
	$('#gloves').click(function () {
		showInfo2();
		$('#popIn2').text('Gloves are used to keep the area sterile').addClass('popIn-info');
	});

	/*instructions info*/
	$('#instructions').click(function () {
		showInfo2();
		$('#popIn2').text('Instructions are included in each kit so the user knows exactly what to do when encountered with someone who is experiencing an overdose.').addClass('popIn-info');
	});

	/*alcohol info*/
	$('#alcohol').click(function () {
		showInfo2();
		$('#popIn2').text('Alcohol pads disinfect the area and keep things sterile.').addClass('popIn-info');
	});

	/*bag info*/
	$('#bag').click(function () {
		showInfo2();
		$('#popIn2').text('This bag holds everything included in a naloxone kit.').addClass('popIn-info');
	});

	/*shield info*/
	$('#shield').click(function () {
		showInfo2();
		$('#popIn2').text('The face shield is a one-way barrier that keeps the kit user and the overdosed person from sharing germs.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo2*/

});