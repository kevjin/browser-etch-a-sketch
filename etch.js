$(document).ready(function() {
	var gridnum = 900;
	var $gridbox = $("<div>",{class: "gbox"});
		while(gridnum>0) {
		$(".box").append($gridbox.clone());
		gridnum--;
	}

	$('.gbox').hover(function() {
		$(this).css("background-color","black");
	});
});