$(document).ready(function(){
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
    $(".outline-3").each(function(){
	if($.inArray($(this).attr("id").substr(24), ["1", "2"]) != -1){
	    $(this).hide();
	}
    });
});
