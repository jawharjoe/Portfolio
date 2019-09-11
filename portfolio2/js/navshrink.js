// Nabar styling upon scrolling

$ (window).scroll(function() {

	if($(document).scrollTop() > 200)
	{
		$('#pageHeader').addClass('shrink');
	}
	else
	{
		$('#pageHeader').removeClass('shrink');
	}
});
