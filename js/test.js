$(document).ready(function(){
    $(".outline-3").each(function(){
	if($.inArray($(this).attr("id").substr(24), ["1", "2"]) != -1){
	    $(this).hide();
	}
    });
});
