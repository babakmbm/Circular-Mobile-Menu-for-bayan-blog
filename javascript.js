
$(document).ready(function() {
	var active1 = false;
	var active2 = false;
	var active3 = false;
	var active4 = false;
	var active5 = false;
	var active6 = false;
	var active7 = false;
	var active8 = false;
	var active9 = false;
	var active10 = false;
	
	$('.frameformenu').on('click', function() {
		
		if (!active1) $(this).find('.circlelink1').css({'opacity': '1','background-color': '#403A3A','transform': 'translate(0px,-125px)'});
		else $(this).find('.circlelink1').css({'opacity': '0', 'transform': 'none'}); 
		if (!active2) $(this).find('.circlelink2').css({'opacity': '1','background-color': '#403A3A', 'transform': 'translate(60px,-105px)'});
		else $(this).find('.circlelink2').css({'opacity': '0', 'transform': 'none'});
		if (!active3) $(this).find('.circlelink3').css({'opacity': '1','background-color': '#403A3A', 'transform': 'translate(105px,-60px)'});
		else $(this).find('.circlelink3').css({'opacity': '0', 'transform': 'none'});
		if (!active4) $(this).find('.circlelink4').css({'opacity': '1','background-color': '#403A3A', 'transform': 'translate(125px,0px)'});
		else $(this).find('.circlelink4').css({'opacity': '0', 'transform': 'none'});
		/*facebook*/
		if (!active5) $(this).find('.circlelink5').css({'opacity': '1','background-color': '#3b5998', 'transform': 'translate(225px,0px)'});
		else $(this).find('.circlelink5').css({'opacity': '0', 'transform': 'none'});
		/*twitter*/
		if (!active6) $(this).find('.circlelink6').css({'opacity': '1','background-color': '#00aced', 'transform': 'translate(210px, -65px)'});
		else $(this).find('.circlelink6').css({'opacity': '0', 'transform': 'none'});
		/*instagram*/
		if (!active7) $(this).find('.circlelink7').css({'opacity': '1','background-color': '#517fa4', 'transform': 'translate(175px, -125px)'});
		else $(this).find('.circlelink7').css({'opacity': '0', 'transform': 'none'});
		/*google-plus*/
		if (!active8) $(this).find('.circlelink8').css({'opacity': '1','background-color': '#dd4b39', 'transform': 'translate(125px, -170px)'});
		else $(this).find('.circlelink8').css({'opacity': '0', 'transform': 'none'});
		/*github*/
		if (!active9) $(this).find('.circlelink9').css({'opacity': '1','background-color': '#333', 'transform': 'translate(65px, -200px)'});
		else $(this).find('.circlelink9').css({'opacity': '0', 'transform': 'none'});
		/*linkedin*/
		if (!active10) $(this).find('.circlelink10').css({'opacity': '1','background-color': '#007bb6', 'transform': 'translate(0px,-215px)'});
		else $(this).find('.circlelink10').css({'opacity': '0', 'transform': 'none'});
		
		active1 = !active1;
		active2 = !active2;
		active3 = !active3;
		active4 = !active4;
		active5 = !active5;
		active6 = !active6;
		active7 = !active7;
		active8 = !active8;
		active9 = !active9;
		active10 = !active10;
		
	});
});