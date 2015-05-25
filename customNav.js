baseOptionsPressed = false;
extrasOptionsPressed = false;
leatherOptionsPressed = false;
engravingsOptionsPressed = false;

$(document).ready(function(){
	$("#baseOptions").click(function(){
		$(".specificOptionsCont").slideUp();
		if (!baseOptionsPressed) {
			$("#specificBaseOptions").slideDown();
			baseOptionsPressed = true;
		}
		else{
			baseOptionsPressed = false;
		}
		engravingsOptionsPressed = extrasOptionsPressed = leatherOptionsPressed = false;
	});
	$("#extrasOptions").click(function(){
		$(".specificOptionsCont").slideUp();
		if (!extrasOptionsPressed) {
			$("#specificExtrasOptions").slideDown();
			extrasOptionsPressed = true;
		}
		else{
			extrasOptionsPressed = false;
		}
		baseOptionsPressed = engravingsOptionsPressed = leatherOptionsPressed = false;
	});
	$("#leatherOptions").click(function(){
		$(".specificOptionsCont").slideUp();
		if (!leatherOptionsPressed) {
			$("#specificLeatherOptions").slideDown();
			leatherOptionsPressed = true;
		}
		else {
			leatherOptionsPressed = false;
		}
		baseOptionsPressed = extrasOptionsPressed = engravingsOptionsPressed = false;
	});
	$("#engravingsOptions").click(function(){
		$(".specificOptionsCont").slideUp();
		if (!engravingsOptionsPressed) {
			$("#specificEngravingsOptions").slideDown();
		}
		else{
			engravingsOptionsPressed = false;
		}
		baseOptionsPressed = extrasOptionsPressed = leatherOptionsPressed = false;
	});
});
