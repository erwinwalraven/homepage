$(document).ready(function () {
	$("#morenewsbutton").click(function(event) {
		$("#morenewsrow").hide();
		$("#hiddennews").removeClass('hidden');
	});

	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});

	var parts = [".&#119;&#097;&#108;&#114;&#097;&#118;&#101;&#110;", "e.m.p", 64, "lft.nl", "tude"];
	$("#emailfield").html(parts[1]+"<span id=\"texthidden\">345345345</span>"+parts[0]+"<span id=\"texthidden\">545786</span>"+String.fromCharCode(parts[2])+parts[4]+"<span id=\"texthidden\">243534534546</span>"+parts[3]);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({html: true})
})


