$(document).ready(function() {
	var formheight = $("#form-wrapper").height();
	var formleftheight = $("#form-left-wrapper").height();
	var currentformpage = "cash";
	var creditbody = $("#credit-body");
	var promptbody = $("#prompt-body");
	var cashbody = $("#cash-body");
	var currentformpagediv;
	
	// Variable decleration to check whether information has been submitted on each page. //
	var cashstatus = false;
	var creditstatus = false;
	var promptstatus = false;

	function cashPageInit() {
		creditbody.hide();
		promptbody.hide();
		cashbody.fadeIn(700);
	}
	function creditPageInit() {
		promptbody.hide();
		cashbody.hide();
		creditbody.fadeIn(700);
	}
	function promptPageInit() {
		cashbody.hide();
		creditbody.hide();
		promptbody.fadeIn(700);
	}
	// Getting the prices and adding them together to get the total //
	var cartprice = $(".cart-price");
	var cartitemcount = cartprice.length - 1;
	var cartitempricelist = [];
	function getSum(total, num) {
		return total + num;
	}
	cartprice.each(function() {
		cartitempricelist.push($(this).html());
	});
	var converttofloat = cartitempricelist.join(" ").split(" ").map(Number);
	$(".cart-price-total").html(converttofloat.reduce(getSum));
	// Changing form screen when user clicks on the form tabs //
	$(".tab-menu-item").click(function() {
		$("#form-left-wrapper").css({ "min-height": "278px" });
		$(".tab-menu-item").removeClass("current");
		if ($(this).hasClass("current")) {
			return false;
		} else {
			$(this).toggleClass("current");
			var currenttab = $(this).html();
			if (currenttab == "Cash") {
				currentformpage = "cash";
				cashPageInit();
				currentformpagediv = "#" + currentformpage + "-body";
			} else if (currenttab == "Credit Card") {
				currentformpage = "credit";
				creditPageInit();
				currentformpagediv = "#" + currentformpage + "-body";
			} else if (currenttab == "Promptpay") {
				currentformpage = "prompt";
				promptPageInit();
				currentformpagediv = "#" + currentformpage + "-body";
			}
		}
	});
	function nextPageForm() {
		$(".tab-menu-item").removeClass("current");
		if (currentformpage == "cash") {
			$(".credit-tab").addClass("current");
			$("#cash-body").hide();
			$("#prompt-body").hide();
			$("#credit-body").fadeIn(700);
			currentformpage = "credit";
		} else if (currentformpage == "credit") {
			$(".prompt-tab").addClass("current");
			$("#cash-body").hide();
			$("#credit-body").hide();
			$("#prompt-body").fadeIn(700);
			currentformpage = "prompt";
		} else {
			$(".prompt-tab").addClass("current");
		}
	}

	function checkValidation(i) {
		nextPageForm();
	}

	$("#form-wrapper").submit(function(event) {
		event.preventDefault();
		checkValidation(currentformpage);
	});
});