;(function($, window, undefined) {

	$.preload = function() {
		var images = arguments.length > 1 ? arguments : arguments[0];

		// Use $.when to recursively preload multiple images
		if (arguments.length > 1) {
			return $.when.apply(window, $.map(images, function(image) { return $.preload(image); }) );
		}else{
			// Single image
			var def = $.Deferred();
			var img = new Image();

			img.onload = function() {
				def.resolve(img);
			};
			img.onerror = function() {
				def.reject(img);
			};

			img.src = images;
			return def.promise();
		}
	};

})(jQuery, window);

$(function(){

	var currentVideo = '';
	jwplayer.key = "amS3PbnniWTmea1rfXkUiUweZYSV5JjaQ3M9+A==";
	var canvas = document.getElementById("canvas");

	var getQueryVariable = function(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (decodeURIComponent(pair[0]) == variable) {
				return decodeURIComponent(pair[1]);
			}
		}
	};

	var canvasHandler = function(e){
		var x = e.x;
		var y = e.y - 50;
		
		// Check Quality
		ctx.beginPath();
		ctx.moveTo(245.7, 400.8);
		ctx.lineTo(54.0, 400.8);
		ctx.lineTo(54.0, 486.0);
		ctx.lineTo(245.7, 486.0);
		ctx.lineTo(245.7, 400.8);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('quality');
			return;
		}

		// Check Electrical
		ctx.beginPath();
		ctx.moveTo(629.1, 486.0);
		ctx.lineTo(437.4, 486.0);
		ctx.lineTo(437.4, 400.8);
		ctx.lineTo(629.1, 400.8);
		ctx.lineTo(629.1, 486.0);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('electrical');
			return;
		}

		// Check Welding
		ctx.beginPath();
		ctx.moveTo(437.4, 422.1);
		ctx.lineTo(245.7, 422.1);
		ctx.lineTo(245.7, 209.1);
		ctx.lineTo(437.4, 209.1);
		ctx.lineTo(437.4, 422.1);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('welding');
			return;
		}

		// Check Distribution
		ctx.beginPath();
		ctx.moveTo(906.0, 486.0);
		ctx.lineTo(671.7, 486.0);
		ctx.lineTo(671.7, 336.9);
		ctx.lineTo(906.0, 336.9);
		ctx.lineTo(906.0, 486.0);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('distribution');
			return;
		}

		// Check Finishing
		ctx.beginPath();
		ctx.moveTo(629.1, 400.8);
		ctx.lineTo(437.4, 400.8);
		ctx.lineTo(437.4, 209.1);
		ctx.lineTo(629.1, 209.1);
		ctx.lineTo(629.1, 400.8);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('finishing');
			return;
		}

		// Check Company
		ctx.beginPath();
		ctx.moveTo(437.4, 486.0);
		ctx.lineTo(245.7, 486.0);
		ctx.lineTo(245.7, 422.1);
		ctx.lineTo(437.4, 422.1);
		ctx.lineTo(437.4, 486.0);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('company');
			return;
		}

		// Check eCommerce
		ctx.beginPath();
		ctx.moveTo(906.0, 209.1);
		ctx.lineTo(671.7, 209.1);
		ctx.lineTo(671.7, 273.0);
		ctx.lineTo(906.0, 273.0);
		ctx.lineTo(906.0, 209.1);
		ctx.closePath();
		console.log(x);
		console.log(y);
		if(ctx.isPointInPath(x, y)){
			playVideo('ecomm');
			return;
		}

		// Check IT
		ctx.moveTo(906.0, 273.1);
		ctx.lineTo(671.7, 273.1);
		ctx.lineTo(671.7, 336.9);
		ctx.lineTo(906.0, 336.9);
		ctx.lineTo(906.0, 273.1);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('it');
			return;
		}

		// Check Market
		ctx.beginPath();
		ctx.moveTo(181.8, 400.8);
		ctx.lineTo(54.0, 400.8);
		ctx.lineTo(54.0, 358.3);
		ctx.lineTo(181.8, 358.3);
		ctx.lineTo(181.8, 400.8);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('market');
			return;
		}

		// Check Fabrication
		ctx.beginPath();
		ctx.moveTo(160.5, 166.5);
		ctx.lineTo(160.5, 273.1);
		ctx.lineTo(54.0, 273.1);
		ctx.lineTo(54.0, 358.3);
		ctx.lineTo(181.8, 358.3);
		ctx.lineTo(181.8, 400.8);
		ctx.lineTo(245.7, 400.8);
		ctx.lineTo(245.7, 166.5);
		ctx.lineTo(160.5, 166.5);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('fabrication');
			return;
		}

		// Check Engineering
		ctx.beginPath();
		ctx.moveTo(906.0, 102.6);
		ctx.lineTo(671.7, 102.6);
		ctx.lineTo(671.7, 166.5);
		ctx.lineTo(906.0, 166.5);
		ctx.lineTo(906.0, 102.6);
		ctx.closePath();
		if(ctx.isPointInPath(x, y)){
			playVideo('engineering');
			return;
		}
	};

	var testing = getQueryVariable("testing");
	if(Modernizr.canvas && testing === undefined){
		var ctx = canvas.getContext("2d");
		$('.ie8-menu').remove();
		$.preload('//curt-labs.github.io/inside_curt/img/icons/Market.png',
			'//curt-labs.github.io/inside_curt/img/icons/Fabrication.png',
			'//curt-labs.github.io/inside_curt/img/icons/Welding.png',
			'//curt-labs.github.io/inside_curt/img/icons/Finishing.png',
			'//curt-labs.github.io/inside_curt/img/icons/Electrical.png',
			'//curt-labs.github.io/inside_curt/img/icons/eCommerce.png',
			'//curt-labs.github.io/inside_curt/img/icons/Company.png',
			'//curt-labs.github.io/inside_curt/img/icons/Distribution.png',
			'//curt-labs.github.io/inside_curt/img/icons/Quality.png',
			'//curt-labs.github.io/inside_curt/img/icons/Engineering.png',
			'//curt-labs.github.io/inside_curt/img/icons/IT.png','//curt-labs.github.io/inside_curt/img/bug_scaled2_revised.png').done(function(){
				ctx.font = "16px ITCAvantGardeStd-Demi";
				draw(ctx);
			});

		canvas.addEventListener('click',canvasHandler);
		canvas.addEventListener('touchmove',canvasHandler);
	}else{
		$('.modern-display').remove();
	}

	var completeHandler = function(){
		$('.hidden-videos').fadeOut();
		$('.return-to-menu').hide();
	};
	var playVideo = function(name){
		currentVideo = name;
		$('.jwplayer').hide();
		$('#'+name).fadeIn();
		$('.hidden-videos').fadeIn();
		$('.return-to-menu').css('display','block');
		jwplayer(name).play();
	};

	// JW Handlers
	jwplayer("company").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/CompanyVision_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/Company_Vision_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/CompanyVision_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/CompanyVision_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/CompanyVision/CompanyVision_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("ecomm").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/eCom/eCom_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("fabrication").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Fabrication/Fabrication_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("quality").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Quality/Quality_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("electrical").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Electrical/Electrical_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("welding").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Welding/Welding_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("distribution").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Distribution/Distribution_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("it").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/IT/IT_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("market").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/First_to_Market/First_to_Market_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);
	jwplayer("engineering").setup({
		image: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_1080.jpg",
		sources:[{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_360.webm",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_360.ogv",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_360.mp4",
			label:"360"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_480.webm",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_480.ogv",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_480.mp4",
			label:"480 SD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_720.webm",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_720.ogv",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_720.mp4",
			label:"720"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_1080.webm",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_1080.ogv",
			label:"1080 HD"
		},{
			file: "http://curt-video.commondatastorage.googleapis.com/Inside_CURT_2013/Engineering/Engineering_1080.mp4",
			label:"1080 HD"
		}],
		primary:'webm',
		width:960,
		height:540
	}).onComplete(completeHandler);

	$(document).on('click','.map-item',function(e){
		if(e.preventDefault){
			e.preventDefault();
		}

		$('.ie8-menu .menu li').removeClass('active');
		$(this).parent().addClass('active');
		var name = $(this).data('name');
		$('.jwplayer').hide();
		$('#'+name).fadeIn();
		$('.hidden-videos').fadeIn();
		jwplayer(name).play();
	});
	$(document).on('click','.return-to-menu',function(e){
		if(e.preventDefault){
			e.preventDefault();
		}
		jwplayer(currentVideo).stop();
		completeHandler();
	})

});

function draw(ctx) {

	var alpha = ctx.globalAlpha;
	var gradient;

	// blackGradient/Path
	ctx.save();
	ctx.globalAlpha = alpha * 0.90;
	ctx.beginPath();
	ctx.moveTo(960.0, 540.0);
	ctx.lineTo(0.0, 540.0);
	ctx.lineTo(0.0, 0.0);
	ctx.lineTo(960.0, 0.0);
	ctx.lineTo(960.0, 540.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(447.8, 71.6, 537.1, 621.7);
	gradient.addColorStop(0.00, "rgb(9, 9, 9)");
	gradient.addColorStop(0.48, "rgba(9, 9, 9, 0.50)");
	gradient.addColorStop(1.00, "rgba(9, 9, 9, 0.00)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// blackGradient/Path
	ctx.globalAlpha = alpha * 1.00;
	ctx.beginPath();
	ctx.moveTo(960.0, 540.0);
	ctx.lineTo(0.0, 540.0);
	ctx.lineTo(0.0, 0.0);
	ctx.lineTo(960.0, 0.0);
	ctx.lineTo(960.0, 540.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(480.0, -103.5, 480.0, 375.6);
	gradient.addColorStop(0.00, "rgb(9, 9, 9)");
	gradient.addColorStop(0.47, "rgba(9, 9, 9, 0.50)");
	gradient.addColorStop(1.00, "rgba(9, 9, 9, 0.00)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// blackGradient/Path
	ctx.beginPath();
	ctx.moveTo(960.0, 540.0);
	ctx.lineTo(0.0, 540.0);
	ctx.lineTo(0.0, 0.0);
	ctx.lineTo(960.0, 0.0);
	ctx.lineTo(960.0, 540.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(480.0, 874.1, 480.0, 3.1);
	gradient.addColorStop(0.18, "rgb(9, 9, 9)");
	gradient.addColorStop(0.62, "rgba(9, 9, 9, 0.50)");
	gradient.addColorStop(0.90, "rgba(9, 9, 9, 0.00)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// blackGradient/Path
	ctx.globalAlpha = alpha * 0.90;
	ctx.beginPath();
	ctx.moveTo(960.0, 540.0);
	ctx.lineTo(0.0, 540.0);
	ctx.lineTo(0.0, 0.0);
	ctx.lineTo(960.0, 0.0);
	ctx.lineTo(960.0, 540.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(-83.5, 270.0, 321.1, 270.0);
	gradient.addColorStop(0.00, "rgb(9, 9, 9)");
	gradient.addColorStop(0.48, "rgba(9, 9, 9, 0.50)");
	gradient.addColorStop(1.00, "rgba(9, 9, 9, 0.00)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// blackGradient/Path
	ctx.globalAlpha = alpha * 1.00;
	ctx.beginPath();
	ctx.moveTo(960.0, 540.0);
	ctx.lineTo(0.0, 540.0);
	ctx.lineTo(0.0, 0.0);
	ctx.lineTo(960.0, 0.0);
	ctx.lineTo(960.0, 540.0);
	ctx.closePath();
	ctx.restore();

	ctx.drawImage(document.getElementById("image11"), 490, 110);

	// logo/Group
	ctx.save();

	// logo/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(507.5, 136.7);
	ctx.lineTo(34.1, 136.7);
	ctx.lineTo(34.1, 34.1);
	ctx.lineTo(507.5, 34.1);
	ctx.lineTo(507.5, 136.7);
	ctx.closePath();

	// logo/Group/Group

	// logo/Group/Group/Group
	ctx.save();

	// logo/Group/Group/Group/Compound Path
	ctx.save();
	ctx.beginPath();

	// logo/Group/Group/Group/Compound Path/Path
	ctx.moveTo(331.6, 63.8);
	ctx.lineTo(331.6, 64.2);
	ctx.lineTo(330.2, 64.2);
	ctx.lineTo(330.2, 67.7);
	ctx.lineTo(329.7, 67.7);
	ctx.lineTo(329.7, 64.2);
	ctx.lineTo(328.4, 64.2);
	ctx.lineTo(328.4, 63.8);
	ctx.lineTo(331.6, 63.8);
	ctx.closePath();
	ctx.fillStyle = "rgb(240, 90, 34)";
	ctx.fill();

	// logo/Group/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Group/Compound Path/Path
	ctx.moveTo(332.0, 63.8);
	ctx.lineTo(332.8, 63.8);
	ctx.lineTo(334.0, 67.1);
	ctx.lineTo(335.1, 63.8);
	ctx.lineTo(335.8, 63.8);
	ctx.lineTo(335.8, 67.7);
	ctx.lineTo(335.3, 67.7);
	ctx.lineTo(335.3, 65.4);
	ctx.bezierCurveTo(335.3, 65.3, 335.3, 65.2, 335.3, 65.0);
	ctx.bezierCurveTo(335.3, 64.8, 335.3, 64.6, 335.3, 64.4);
	ctx.lineTo(334.2, 67.7);
	ctx.lineTo(333.7, 67.7);
	ctx.lineTo(332.5, 64.4);
	ctx.lineTo(332.5, 64.5);
	ctx.bezierCurveTo(332.5, 64.6, 332.5, 64.7, 332.6, 64.9);
	ctx.bezierCurveTo(332.6, 65.1, 332.6, 65.3, 332.6, 65.4);
	ctx.lineTo(332.6, 67.7);
	ctx.lineTo(332.0, 67.7);
	ctx.lineTo(332.0, 63.8);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group
	ctx.restore();

	// logo/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(68.9, 67.9);
	ctx.bezierCurveTo(69.1, 67.9, 69.3, 67.9, 69.5, 67.9);
	ctx.bezierCurveTo(70.0, 61.4, 74.5, 55.9, 80.5, 54.0);
	ctx.lineTo(60.4, 54.0);
	ctx.bezierCurveTo(56.9, 54.0, 54.0, 56.9, 54.0, 60.4);
	ctx.lineTo(54.0, 76.1);
	ctx.bezierCurveTo(57.1, 71.2, 62.6, 67.9, 68.9, 67.9);
	ctx.closePath();
	ctx.fillStyle = "rgb(240, 90, 34)";
	ctx.fill();

	// logo/Group/Group/Group/Path
	ctx.beginPath();
	ctx.moveTo(101.6, 67.7);
	ctx.bezierCurveTo(108.1, 67.7, 113.7, 71.2, 116.8, 76.3);
	ctx.lineTo(116.8, 60.4);
	ctx.bezierCurveTo(116.8, 56.9, 113.9, 54.0, 110.4, 54.0);
	ctx.lineTo(90.3, 54.0);
	ctx.bezierCurveTo(96.2, 55.9, 100.7, 61.3, 101.3, 67.8);
	ctx.bezierCurveTo(101.4, 67.8, 101.5, 67.7, 101.6, 67.7);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Path
	ctx.beginPath();
	ctx.moveTo(101.6, 103.1);
	ctx.bezierCurveTo(101.5, 103.1, 101.4, 103.1, 101.3, 103.1);
	ctx.bezierCurveTo(100.7, 109.6, 96.3, 114.9, 90.3, 116.8);
	ctx.lineTo(110.4, 116.8);
	ctx.bezierCurveTo(113.9, 116.8, 116.8, 113.9, 116.8, 110.4);
	ctx.lineTo(116.8, 94.6);
	ctx.bezierCurveTo(113.7, 99.7, 108.1, 103.1, 101.6, 103.1);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Path
	ctx.beginPath();
	ctx.moveTo(69.6, 102.9);
	ctx.bezierCurveTo(69.3, 102.9, 69.1, 102.9, 68.9, 102.9);
	ctx.bezierCurveTo(62.6, 102.9, 57.1, 99.6, 54.0, 94.7);
	ctx.lineTo(54.0, 110.4);
	ctx.bezierCurveTo(54.0, 113.9, 56.9, 116.8, 60.4, 116.8);
	ctx.lineTo(80.6, 116.8);
	ctx.bezierCurveTo(74.6, 114.9, 70.1, 109.4, 69.6, 102.9);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Path
	ctx.beginPath();
	ctx.moveTo(91.5, 99.5);
	ctx.bezierCurveTo(91.6, 99.3, 91.9, 99.1, 91.9, 99.1);
	ctx.bezierCurveTo(92.4, 98.7, 92.9, 98.5, 93.5, 98.5);
	ctx.bezierCurveTo(94.0, 98.6, 94.6, 98.8, 95.0, 99.1);
	ctx.bezierCurveTo(95.3, 99.3, 95.7, 99.3, 95.9, 99.0);
	ctx.lineTo(96.7, 98.3);
	ctx.bezierCurveTo(97.4, 98.6, 98.2, 98.8, 99.0, 98.9);
	ctx.bezierCurveTo(99.8, 99.1, 100.7, 99.2, 101.6, 99.2);
	ctx.bezierCurveTo(109.2, 99.2, 115.4, 93.0, 115.4, 85.4);
	ctx.bezierCurveTo(115.4, 77.8, 109.2, 71.6, 101.6, 71.6);
	ctx.bezierCurveTo(100.7, 71.6, 99.8, 71.7, 98.9, 71.8);
	ctx.bezierCurveTo(98.8, 72.6, 98.5, 73.4, 98.3, 74.1);
	ctx.lineTo(99.0, 74.9);
	ctx.bezierCurveTo(99.3, 75.1, 99.3, 75.4, 99.1, 75.8);
	ctx.bezierCurveTo(98.8, 76.2, 98.6, 76.8, 98.5, 77.3);
	ctx.bezierCurveTo(98.5, 77.9, 98.7, 78.4, 99.0, 78.9);
	ctx.bezierCurveTo(99.1, 78.9, 99.3, 79.2, 99.5, 79.3);
	ctx.bezierCurveTo(101.8, 78.5, 104.4, 79.0, 106.2, 80.8);
	ctx.bezierCurveTo(108.7, 83.3, 108.7, 87.4, 106.2, 89.9);
	ctx.bezierCurveTo(103.7, 92.4, 99.6, 92.4, 97.1, 89.9);
	ctx.bezierCurveTo(95.3, 88.1, 94.8, 85.5, 95.6, 83.3);
	ctx.bezierCurveTo(95.5, 83.1, 95.2, 82.8, 95.1, 82.8);
	ctx.bezierCurveTo(94.7, 82.4, 94.2, 82.2, 93.6, 82.3);
	ctx.bezierCurveTo(93.0, 82.3, 92.5, 82.5, 92.0, 82.8);
	ctx.bezierCurveTo(91.7, 83.1, 91.4, 83.0, 91.1, 82.7);
	ctx.lineTo(90.4, 82.0);
	ctx.bezierCurveTo(89.7, 82.3, 88.9, 82.5, 88.1, 82.7);
	ctx.bezierCurveTo(87.9, 83.6, 87.8, 84.5, 87.8, 85.4);
	ctx.bezierCurveTo(87.8, 86.3, 87.9, 87.2, 88.1, 88.1);
	ctx.bezierCurveTo(88.2, 88.9, 88.5, 89.7, 88.8, 90.4);
	ctx.lineTo(88.1, 91.1);
	ctx.bezierCurveTo(87.8, 91.4, 87.7, 91.7, 87.9, 92.0);
	ctx.bezierCurveTo(88.3, 92.5, 88.4, 93.0, 88.5, 93.6);
	ctx.bezierCurveTo(88.6, 94.2, 88.4, 94.7, 88.0, 95.1);
	ctx.bezierCurveTo(88.0, 95.2, 87.7, 95.5, 87.5, 95.6);
	ctx.bezierCurveTo(85.3, 94.8, 82.7, 95.3, 80.9, 97.1);
	ctx.bezierCurveTo(78.4, 99.6, 78.4, 103.7, 80.9, 106.2);
	ctx.bezierCurveTo(83.4, 108.7, 87.5, 108.7, 90.0, 106.2);
	ctx.bezierCurveTo(91.8, 104.4, 92.3, 101.8, 91.5, 99.5);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Path
	ctx.beginPath();
	ctx.moveTo(79.3, 71.3);
	ctx.bezierCurveTo(79.2, 71.5, 78.9, 71.8, 78.9, 71.8);
	ctx.bezierCurveTo(78.4, 72.2, 77.9, 72.4, 77.3, 72.3);
	ctx.bezierCurveTo(76.8, 72.2, 76.2, 72.1, 75.8, 71.7);
	ctx.bezierCurveTo(75.4, 71.5, 75.1, 71.6, 74.9, 71.8);
	ctx.lineTo(74.1, 72.6);
	ctx.bezierCurveTo(73.4, 72.3, 72.6, 72.1, 71.9, 71.9);
	ctx.bezierCurveTo(71.0, 71.8, 70.1, 71.7, 69.2, 71.7);
	ctx.bezierCurveTo(61.6, 71.7, 55.4, 77.8, 55.4, 85.5);
	ctx.bezierCurveTo(55.4, 93.1, 61.6, 99.3, 69.2, 99.3);
	ctx.bezierCurveTo(70.1, 99.3, 71.0, 99.2, 71.9, 99.0);
	ctx.bezierCurveTo(72.1, 98.2, 72.3, 97.4, 72.6, 96.7);
	ctx.lineTo(71.8, 95.9);
	ctx.bezierCurveTo(71.6, 95.7, 71.5, 95.3, 71.7, 95.0);
	ctx.bezierCurveTo(72.1, 94.6, 72.2, 94.0, 72.3, 93.5);
	ctx.bezierCurveTo(72.4, 92.9, 72.2, 92.4, 71.8, 91.9);
	ctx.bezierCurveTo(71.8, 91.9, 71.5, 91.6, 71.3, 91.5);
	ctx.bezierCurveTo(69.1, 92.3, 66.5, 91.8, 64.7, 90.0);
	ctx.bezierCurveTo(62.2, 87.5, 62.2, 83.4, 64.7, 80.9);
	ctx.bezierCurveTo(67.2, 78.4, 71.2, 78.4, 73.7, 80.9);
	ctx.bezierCurveTo(75.5, 82.7, 76.0, 85.3, 75.3, 87.5);
	ctx.bezierCurveTo(75.4, 87.7, 75.7, 88.0, 75.7, 88.0);
	ctx.bezierCurveTo(76.2, 88.4, 76.7, 88.6, 77.3, 88.5);
	ctx.bezierCurveTo(77.8, 88.4, 78.4, 88.3, 78.8, 87.9);
	ctx.bezierCurveTo(79.1, 87.7, 79.4, 87.8, 79.7, 88.1);
	ctx.lineTo(80.4, 88.8);
	ctx.bezierCurveTo(81.2, 88.5, 81.9, 88.2, 82.7, 88.1);
	ctx.bezierCurveTo(82.9, 87.2, 83.0, 86.4, 83.0, 85.5);
	ctx.bezierCurveTo(83.0, 84.5, 82.9, 83.6, 82.7, 82.7);
	ctx.bezierCurveTo(82.5, 81.9, 82.3, 81.2, 82.0, 80.4);
	ctx.lineTo(82.7, 79.7);
	ctx.bezierCurveTo(83.0, 79.5, 83.1, 79.1, 82.8, 78.8);
	ctx.bezierCurveTo(82.5, 78.4, 82.3, 77.8, 82.3, 77.3);
	ctx.bezierCurveTo(82.2, 76.7, 82.4, 76.2, 82.8, 75.7);
	ctx.bezierCurveTo(82.8, 75.7, 83.1, 75.4, 83.3, 75.3);
	ctx.bezierCurveTo(85.5, 76.0, 88.1, 75.5, 89.9, 73.7);
	ctx.bezierCurveTo(92.4, 71.2, 92.4, 67.2, 89.9, 64.7);
	ctx.bezierCurveTo(87.4, 62.2, 83.3, 62.2, 80.8, 64.7);
	ctx.bezierCurveTo(79.0, 66.5, 78.5, 69.1, 79.3, 71.3);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Path
	ctx.beginPath();
	ctx.moveTo(242.0, 63.8);
	ctx.lineTo(218.7, 63.8);
	ctx.lineTo(218.7, 75.9);
	ctx.lineTo(223.1, 75.9);
	ctx.lineTo(223.1, 96.6);
	ctx.bezierCurveTo(223.1, 98.8, 223.0, 101.0, 221.8, 102.5);
	ctx.bezierCurveTo(220.4, 104.3, 218.6, 104.6, 217.3, 104.6);
	ctx.bezierCurveTo(215.2, 104.6, 213.4, 103.8, 212.4, 102.2);
	ctx.bezierCurveTo(211.4, 100.7, 211.3, 98.8, 211.3, 96.6);
	ctx.lineTo(211.3, 75.9);
	ctx.lineTo(215.8, 75.9);
	ctx.lineTo(215.8, 63.8);
	ctx.lineTo(193.1, 63.8);
	ctx.lineTo(193.1, 69.1);
	ctx.bezierCurveTo(193.1, 69.1, 193.1, 69.1, 193.1, 69.1);
	ctx.lineTo(193.1, 69.4);
	ctx.bezierCurveTo(190.5, 64.5, 186.0, 60.2, 181.5, 57.4);
	ctx.bezierCurveTo(176.6, 54.5, 171.0, 52.9, 164.9, 52.9);
	ctx.bezierCurveTo(147.2, 52.9, 132.8, 67.3, 132.8, 85.0);
	ctx.bezierCurveTo(132.8, 95.8, 138.1, 105.4, 146.3, 111.2);
	ctx.bezierCurveTo(151.9, 115.3, 158.8, 117.7, 165.5, 117.7);
	ctx.bezierCurveTo(178.9, 117.7, 191.6, 108.7, 195.6, 96.1);
	ctx.bezierCurveTo(195.6, 96.1, 195.9, 95.2, 196.0, 94.9);
	ctx.bezierCurveTo(196.0, 94.6, 196.2, 93.8, 196.2, 93.8);
	ctx.lineTo(180.9, 93.8);
	ctx.bezierCurveTo(180.9, 93.8, 180.7, 94.1, 180.7, 94.2);
	ctx.bezierCurveTo(180.6, 94.3, 180.4, 94.7, 180.4, 94.7);
	ctx.bezierCurveTo(177.2, 99.7, 171.6, 102.7, 165.5, 102.7);
	ctx.bezierCurveTo(156.0, 102.7, 148.2, 94.9, 148.2, 85.2);
	ctx.bezierCurveTo(148.2, 75.0, 155.5, 67.7, 165.6, 67.7);
	ctx.bezierCurveTo(171.5, 67.7, 177.4, 70.9, 180.2, 75.7);
	ctx.lineTo(180.6, 76.4);
	ctx.lineTo(197.7, 76.4);
	ctx.lineTo(197.7, 97.6);
	ctx.bezierCurveTo(197.7, 102.6, 198.4, 107.9, 203.2, 112.6);
	ctx.bezierCurveTo(206.7, 116.1, 211.3, 117.7, 217.3, 117.7);
	ctx.bezierCurveTo(223.3, 117.7, 228.2, 115.9, 231.7, 112.2);
	ctx.bezierCurveTo(236.1, 107.6, 236.8, 102.6, 236.8, 97.8);
	ctx.lineTo(236.8, 75.9);
	ctx.lineTo(242.0, 75.9);
	ctx.lineTo(242.0, 63.8);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Group/Compound Path/Path
	ctx.moveTo(325.8, 83.5);
	ctx.lineTo(325.8, 63.8);
	ctx.lineTo(283.1, 63.8);
	ctx.lineTo(283.1, 75.7);
	ctx.bezierCurveTo(282.0, 72.7, 280.2, 70.1, 277.8, 68.0);
	ctx.bezierCurveTo(273.2, 64.1, 268.1, 63.8, 263.6, 63.8);
	ctx.lineTo(244.9, 63.8);
	ctx.lineTo(244.9, 104.6);
	ctx.lineTo(239.7, 104.6);
	ctx.lineTo(239.7, 116.8);
	ctx.lineTo(258.6, 116.8);
	ctx.lineTo(258.6, 99.6);
	ctx.lineTo(271.1, 116.8);
	ctx.lineTo(285.4, 116.8);
	ctx.lineTo(285.4, 104.6);
	ctx.lineTo(278.7, 104.6);
	ctx.lineTo(273.9, 98.5);
	ctx.bezierCurveTo(280.2, 96.2, 284.0, 89.7, 284.3, 83.5);
	ctx.lineTo(294.9, 83.5);
	ctx.lineTo(294.9, 76.4);
	ctx.lineTo(297.6, 76.4);
	ctx.lineTo(297.6, 104.6);
	ctx.lineTo(292.3, 104.6);
	ctx.lineTo(292.3, 116.8);
	ctx.lineTo(316.6, 116.8);
	ctx.lineTo(316.6, 104.6);
	ctx.lineTo(311.3, 104.6);
	ctx.lineTo(311.3, 76.4);
	ctx.lineTo(314.1, 76.4);
	ctx.lineTo(314.1, 83.5);
	ctx.lineTo(325.8, 83.5);
	ctx.closePath();

	// logo/Group/Group/Group/Compound Path/Path
	ctx.moveTo(268.2, 88.1);
	ctx.bezierCurveTo(266.3, 89.5, 264.0, 89.6, 261.4, 89.6);
	ctx.lineTo(258.6, 89.6);
	ctx.lineTo(258.6, 76.4);
	ctx.lineTo(262.8, 76.4);
	ctx.bezierCurveTo(265.5, 76.4, 266.9, 76.5, 268.4, 77.7);
	ctx.bezierCurveTo(269.8, 78.8, 270.7, 80.8, 270.7, 82.8);
	ctx.bezierCurveTo(270.7, 85.0, 269.8, 86.9, 268.2, 88.1);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.restore();
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(351.9, 99.6);
	ctx.lineTo(353.2, 99.6);
	ctx.lineTo(353.2, 101.5);
	ctx.lineTo(348.5, 101.5);
	ctx.lineTo(348.5, 99.6);
	ctx.lineTo(349.7, 99.6);
	ctx.lineTo(349.7, 92.0);
	ctx.lineTo(348.0, 92.0);
	ctx.lineTo(348.0, 93.6);
	ctx.lineTo(346.3, 93.6);
	ctx.lineTo(346.3, 90.0);
	ctx.lineTo(355.3, 90.0);
	ctx.lineTo(355.3, 93.6);
	ctx.lineTo(353.6, 93.6);
	ctx.lineTo(353.6, 92.0);
	ctx.lineTo(351.9, 92.0);
	ctx.lineTo(351.9, 99.6);
	ctx.closePath();
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(358.7, 94.2);
	ctx.bezierCurveTo(359.3, 93.2, 360.2, 92.7, 361.3, 92.7);
	ctx.bezierCurveTo(362.3, 92.7, 363.1, 93.2, 363.7, 94.0);
	ctx.bezierCurveTo(364.3, 94.8, 364.4, 95.7, 364.4, 96.7);
	ctx.lineTo(364.4, 99.6);
	ctx.lineTo(365.5, 99.6);
	ctx.lineTo(365.5, 101.5);
	ctx.lineTo(361.3, 101.5);
	ctx.lineTo(361.3, 99.6);
	ctx.lineTo(362.4, 99.6);
	ctx.lineTo(362.4, 97.2);
	ctx.bezierCurveTo(362.4, 96.6, 362.5, 96.0, 362.2, 95.4);
	ctx.bezierCurveTo(361.8, 94.9, 361.2, 94.7, 360.6, 94.7);
	ctx.bezierCurveTo(360.0, 94.7, 359.5, 94.9, 359.1, 95.3);
	ctx.bezierCurveTo(358.7, 95.9, 358.7, 96.4, 358.7, 97.1);
	ctx.lineTo(358.7, 99.6);
	ctx.lineTo(359.8, 99.6);
	ctx.lineTo(359.8, 101.5);
	ctx.lineTo(355.7, 101.5);
	ctx.lineTo(355.7, 99.6);
	ctx.lineTo(356.8, 99.6);
	ctx.lineTo(356.8, 91.9);
	ctx.lineTo(355.7, 91.9);
	ctx.lineTo(355.7, 90.0);
	ctx.lineTo(358.7, 90.0);
	ctx.lineTo(358.7, 94.2);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(373.5, 99.0);
	ctx.bezierCurveTo(372.9, 100.6, 371.3, 101.7, 369.5, 101.7);
	ctx.bezierCurveTo(367.0, 101.7, 365.0, 99.7, 365.0, 97.2);
	ctx.bezierCurveTo(365.0, 94.7, 366.9, 92.7, 369.5, 92.7);
	ctx.bezierCurveTo(370.6, 92.7, 371.8, 93.2, 372.7, 94.0);
	ctx.bezierCurveTo(373.5, 94.9, 373.9, 96.0, 373.9, 97.2);
	ctx.lineTo(373.8, 97.9);
	ctx.lineTo(366.9, 97.9);
	ctx.bezierCurveTo(367.1, 99.1, 368.2, 100.0, 369.4, 100.0);
	ctx.bezierCurveTo(370.3, 100.0, 371.0, 99.7, 371.5, 99.0);
	ctx.lineTo(373.5, 99.0);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(372.1, 96.4);
	ctx.bezierCurveTo(371.7, 95.2, 370.6, 94.4, 369.4, 94.4);
	ctx.bezierCurveTo(368.2, 94.4, 367.1, 95.3, 366.9, 96.4);
	ctx.lineTo(372.1, 96.4);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(380.5, 91.9);
	ctx.lineTo(379.2, 91.9);
	ctx.lineTo(379.2, 90.0);
	ctx.lineTo(387.8, 90.0);
	ctx.lineTo(387.8, 93.5);
	ctx.lineTo(385.6, 93.5);
	ctx.lineTo(385.6, 92.0);
	ctx.lineTo(382.7, 92.0);
	ctx.lineTo(382.7, 94.9);
	ctx.lineTo(386.0, 94.9);
	ctx.lineTo(386.0, 96.6);
	ctx.lineTo(382.7, 96.6);
	ctx.lineTo(382.7, 99.6);
	ctx.lineTo(383.9, 99.6);
	ctx.lineTo(383.9, 101.5);
	ctx.lineTo(379.2, 101.5);
	ctx.lineTo(379.2, 99.6);
	ctx.lineTo(380.5, 99.6);
	ctx.lineTo(380.5, 91.9);
	ctx.closePath();
	ctx.fillStyle = "rgb(240, 90, 34)";
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(391.5, 99.6);
	ctx.lineTo(392.8, 99.6);
	ctx.lineTo(392.8, 101.5);
	ctx.lineTo(388.1, 101.5);
	ctx.lineTo(388.1, 99.6);
	ctx.lineTo(389.4, 99.6);
	ctx.lineTo(389.4, 91.9);
	ctx.lineTo(388.1, 91.9);
	ctx.lineTo(388.1, 90.0);
	ctx.lineTo(392.8, 90.0);
	ctx.lineTo(392.8, 91.9);
	ctx.lineTo(391.5, 91.9);
	ctx.lineTo(391.5, 99.6);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(394.6, 91.9);
	ctx.lineTo(393.3, 91.9);
	ctx.lineTo(393.3, 90.0);
	ctx.lineTo(398.4, 90.0);
	ctx.bezierCurveTo(399.6, 90.0, 400.5, 90.2, 401.4, 90.9);
	ctx.bezierCurveTo(402.3, 91.7, 402.8, 92.8, 402.8, 93.9);
	ctx.bezierCurveTo(402.8, 95.6, 401.7, 97.2, 400.0, 97.4);
	ctx.lineTo(401.7, 99.6);
	ctx.lineTo(403.0, 99.6);
	ctx.lineTo(403.0, 101.5);
	ctx.lineTo(400.4, 101.5);
	ctx.lineTo(396.7, 96.3);
	ctx.lineTo(396.7, 99.6);
	ctx.lineTo(397.7, 99.6);
	ctx.lineTo(397.7, 101.5);
	ctx.lineTo(393.3, 101.5);
	ctx.lineTo(393.3, 99.6);
	ctx.lineTo(394.6, 99.6);
	ctx.lineTo(394.6, 91.9);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(397.9, 96.1);
	ctx.bezierCurveTo(398.6, 96.1, 399.3, 96.1, 399.8, 95.7);
	ctx.bezierCurveTo(400.4, 95.3, 400.6, 94.7, 400.6, 94.0);
	ctx.bezierCurveTo(400.6, 93.4, 400.4, 92.8, 399.9, 92.4);
	ctx.bezierCurveTo(399.4, 92.0, 398.9, 92.0, 398.3, 92.0);
	ctx.lineTo(396.7, 92.0);
	ctx.lineTo(396.7, 96.1);
	ctx.lineTo(397.9, 96.1);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(405.4, 98.1);
	ctx.bezierCurveTo(405.4, 99.0, 406.0, 99.8, 407.1, 99.8);
	ctx.bezierCurveTo(408.0, 99.8, 408.8, 99.2, 408.8, 98.3);
	ctx.bezierCurveTo(408.8, 97.1, 407.7, 96.8, 406.8, 96.6);
	ctx.bezierCurveTo(406.0, 96.3, 405.3, 96.1, 404.6, 95.6);
	ctx.bezierCurveTo(403.8, 95.0, 403.3, 94.1, 403.3, 93.1);
	ctx.bezierCurveTo(403.3, 91.2, 405.0, 89.8, 406.8, 89.8);
	ctx.bezierCurveTo(407.6, 89.8, 408.3, 90.1, 408.8, 90.7);
	ctx.lineTo(408.8, 90.0);
	ctx.lineTo(410.5, 90.0);
	ctx.lineTo(410.5, 93.1);
	ctx.lineTo(408.5, 93.1);
	ctx.bezierCurveTo(408.5, 92.3, 407.9, 91.6, 407.0, 91.6);
	ctx.bezierCurveTo(406.2, 91.6, 405.5, 92.2, 405.5, 93.0);
	ctx.bezierCurveTo(405.5, 94.2, 406.5, 94.4, 407.4, 94.7);
	ctx.bezierCurveTo(408.2, 94.9, 409.1, 95.1, 409.8, 95.7);
	ctx.bezierCurveTo(410.6, 96.3, 411.0, 97.2, 411.0, 98.1);
	ctx.bezierCurveTo(411.0, 100.2, 409.4, 101.7, 407.3, 101.7);
	ctx.bezierCurveTo(406.5, 101.7, 405.7, 101.4, 405.1, 100.7);
	ctx.lineTo(405.1, 101.5);
	ctx.lineTo(403.4, 101.5);
	ctx.lineTo(403.4, 98.1);
	ctx.lineTo(405.4, 98.1);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(416.7, 99.6);
	ctx.lineTo(418.0, 99.6);
	ctx.lineTo(418.0, 101.5);
	ctx.lineTo(413.3, 101.5);
	ctx.lineTo(413.3, 99.6);
	ctx.lineTo(414.5, 99.6);
	ctx.lineTo(414.5, 92.0);
	ctx.lineTo(412.8, 92.0);
	ctx.lineTo(412.8, 93.6);
	ctx.lineTo(411.1, 93.6);
	ctx.lineTo(411.1, 90.0);
	ctx.lineTo(420.1, 90.0);
	ctx.lineTo(420.1, 93.6);
	ctx.lineTo(418.4, 93.6);
	ctx.lineTo(418.4, 92.0);
	ctx.lineTo(416.7, 92.0);
	ctx.lineTo(416.7, 99.6);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(436.0, 101.5);
	ctx.lineTo(433.9, 101.5);
	ctx.lineTo(428.6, 93.9);
	ctx.lineTo(428.6, 99.6);
	ctx.lineTo(429.8, 99.6);
	ctx.lineTo(429.8, 101.5);
	ctx.lineTo(425.1, 101.5);
	ctx.lineTo(425.1, 99.6);
	ctx.lineTo(426.4, 99.6);
	ctx.lineTo(426.4, 91.9);
	ctx.lineTo(425.1, 91.9);
	ctx.lineTo(425.1, 90.0);
	ctx.lineTo(428.3, 90.0);
	ctx.lineTo(433.8, 97.7);
	ctx.lineTo(433.8, 91.9);
	ctx.lineTo(432.5, 91.9);
	ctx.lineTo(432.5, 90.0);
	ctx.lineTo(437.2, 90.0);
	ctx.lineTo(437.2, 91.9);
	ctx.lineTo(436.0, 91.9);
	ctx.lineTo(436.0, 101.5);
	ctx.closePath();
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(443.5, 100.3);
	ctx.bezierCurveTo(442.8, 101.3, 441.8, 101.7, 440.7, 101.7);
	ctx.bezierCurveTo(438.3, 101.7, 436.3, 99.7, 436.3, 97.2);
	ctx.bezierCurveTo(436.3, 94.8, 438.3, 92.7, 440.8, 92.7);
	ctx.bezierCurveTo(441.9, 92.7, 442.9, 93.2, 443.5, 94.1);
	ctx.lineTo(443.5, 92.9);
	ctx.lineTo(446.5, 92.9);
	ctx.lineTo(446.5, 94.7);
	ctx.lineTo(445.5, 94.7);
	ctx.lineTo(445.5, 99.6);
	ctx.lineTo(446.5, 99.6);
	ctx.lineTo(446.5, 101.5);
	ctx.lineTo(443.5, 101.5);
	ctx.lineTo(443.5, 100.3);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(443.5, 97.2);
	ctx.bezierCurveTo(443.5, 95.7, 442.3, 94.6, 440.9, 94.6);
	ctx.bezierCurveTo(439.5, 94.6, 438.3, 95.8, 438.3, 97.2);
	ctx.bezierCurveTo(438.3, 98.6, 439.5, 99.8, 440.9, 99.8);
	ctx.bezierCurveTo(442.4, 99.8, 443.5, 98.6, 443.5, 97.2);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(448.3, 94.7);
	ctx.lineTo(447.2, 94.7);
	ctx.lineTo(447.2, 92.9);
	ctx.lineTo(450.1, 92.9);
	ctx.lineTo(450.1, 94.2);
	ctx.bezierCurveTo(450.6, 93.3, 451.5, 92.7, 452.6, 92.7);
	ctx.bezierCurveTo(453.8, 92.7, 454.7, 93.4, 455.2, 94.5);
	ctx.bezierCurveTo(455.7, 93.4, 456.8, 92.7, 458.0, 92.7);
	ctx.bezierCurveTo(459.0, 92.7, 459.9, 93.1, 460.5, 93.8);
	ctx.bezierCurveTo(461.2, 94.6, 461.2, 95.4, 461.2, 96.4);
	ctx.lineTo(461.2, 99.6);
	ctx.lineTo(462.3, 99.6);
	ctx.lineTo(462.3, 101.5);
	ctx.lineTo(458.1, 101.5);
	ctx.lineTo(458.1, 99.6);
	ctx.lineTo(459.2, 99.6);
	ctx.lineTo(459.2, 96.9);
	ctx.bezierCurveTo(459.2, 96.3, 459.2, 95.8, 459.0, 95.3);
	ctx.bezierCurveTo(458.6, 94.9, 458.1, 94.6, 457.6, 94.6);
	ctx.bezierCurveTo(457.0, 94.6, 456.5, 94.9, 456.1, 95.3);
	ctx.bezierCurveTo(455.7, 95.8, 455.7, 96.3, 455.7, 96.9);
	ctx.lineTo(455.7, 99.6);
	ctx.lineTo(456.8, 99.6);
	ctx.lineTo(456.8, 101.5);
	ctx.lineTo(452.7, 101.5);
	ctx.lineTo(452.7, 99.6);
	ctx.lineTo(453.8, 99.6);
	ctx.lineTo(453.8, 97.0);
	ctx.bezierCurveTo(453.8, 96.5, 453.8, 95.9, 453.5, 95.4);
	ctx.bezierCurveTo(453.2, 94.9, 452.7, 94.6, 452.1, 94.6);
	ctx.bezierCurveTo(451.6, 94.6, 451.1, 94.8, 450.7, 95.3);
	ctx.bezierCurveTo(450.3, 95.8, 450.3, 96.3, 450.3, 97.0);
	ctx.lineTo(450.3, 99.6);
	ctx.lineTo(451.4, 99.6);
	ctx.lineTo(451.4, 101.5);
	ctx.lineTo(447.2, 101.5);
	ctx.lineTo(447.2, 99.6);
	ctx.lineTo(448.3, 99.6);
	ctx.lineTo(448.3, 94.7);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(470.4, 99.0);
	ctx.bezierCurveTo(469.7, 100.6, 468.1, 101.7, 466.3, 101.7);
	ctx.bezierCurveTo(463.8, 101.7, 461.8, 99.7, 461.8, 97.2);
	ctx.bezierCurveTo(461.8, 94.7, 463.7, 92.7, 466.3, 92.7);
	ctx.bezierCurveTo(467.5, 92.7, 468.7, 93.2, 469.5, 94.0);
	ctx.bezierCurveTo(470.3, 94.9, 470.7, 96.0, 470.7, 97.2);
	ctx.lineTo(470.6, 97.9);
	ctx.lineTo(463.7, 97.9);
	ctx.bezierCurveTo(464.0, 99.1, 465.1, 100.0, 466.3, 100.0);
	ctx.bezierCurveTo(467.1, 100.0, 467.9, 99.7, 468.3, 99.0);
	ctx.lineTo(470.4, 99.0);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(468.9, 96.4);
	ctx.bezierCurveTo(468.5, 95.2, 467.5, 94.4, 466.2, 94.4);
	ctx.bezierCurveTo(465.0, 94.4, 463.9, 95.3, 463.7, 96.4);
	ctx.lineTo(468.9, 96.4);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(350.2, 114.9);
	ctx.lineTo(351.3, 114.9);
	ctx.lineTo(351.3, 116.8);
	ctx.lineTo(347.1, 116.8);
	ctx.lineTo(347.1, 114.9);
	ctx.lineTo(348.2, 114.9);
	ctx.lineTo(348.2, 110.0);
	ctx.lineTo(347.1, 110.0);
	ctx.lineTo(347.1, 108.2);
	ctx.lineTo(350.2, 108.2);
	ctx.lineTo(350.2, 114.9);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(350.2, 107.4);
	ctx.lineTo(348.2, 107.4);
	ctx.lineTo(348.2, 105.3);
	ctx.lineTo(350.2, 105.3);
	ctx.lineTo(350.2, 107.4);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(352.0, 110.0);
	ctx.lineTo(350.9, 110.0);
	ctx.lineTo(350.9, 108.2);
	ctx.lineTo(354.0, 108.2);
	ctx.lineTo(354.0, 109.4);
	ctx.bezierCurveTo(354.5, 108.5, 355.4, 108.0, 356.5, 108.0);
	ctx.bezierCurveTo(357.4, 108.0, 358.3, 108.4, 359.0, 109.1);
	ctx.bezierCurveTo(359.7, 109.9, 359.7, 110.6, 359.7, 111.6);
	ctx.lineTo(359.7, 114.9);
	ctx.lineTo(360.8, 114.9);
	ctx.lineTo(360.8, 116.8);
	ctx.lineTo(356.6, 116.8);
	ctx.lineTo(356.6, 114.9);
	ctx.lineTo(357.7, 114.9);
	ctx.lineTo(357.7, 112.2);
	ctx.bezierCurveTo(357.7, 111.6, 357.7, 111.1, 357.4, 110.6);
	ctx.bezierCurveTo(357.0, 110.2, 356.5, 110.0, 355.9, 110.0);
	ctx.bezierCurveTo(355.3, 110.0, 354.7, 110.2, 354.3, 110.7);
	ctx.bezierCurveTo(354.0, 111.2, 354.0, 111.9, 354.0, 112.5);
	ctx.lineTo(354.0, 114.9);
	ctx.lineTo(355.1, 114.9);
	ctx.lineTo(355.1, 116.8);
	ctx.lineTo(350.9, 116.8);
	ctx.lineTo(350.9, 114.9);
	ctx.lineTo(352.0, 114.9);
	ctx.lineTo(352.0, 110.0);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(370.8, 114.9);
	ctx.lineTo(372.0, 114.9);
	ctx.lineTo(372.0, 116.8);
	ctx.lineTo(367.3, 116.8);
	ctx.lineTo(367.3, 114.9);
	ctx.lineTo(368.6, 114.9);
	ctx.lineTo(368.6, 107.3);
	ctx.lineTo(366.9, 107.3);
	ctx.lineTo(366.9, 108.9);
	ctx.lineTo(365.2, 108.9);
	ctx.lineTo(365.2, 105.3);
	ctx.lineTo(374.2, 105.3);
	ctx.lineTo(374.2, 108.9);
	ctx.lineTo(372.4, 108.9);
	ctx.lineTo(372.4, 107.3);
	ctx.lineTo(370.8, 107.3);
	ctx.lineTo(370.8, 114.9);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(373.0, 112.5);
	ctx.bezierCurveTo(373.0, 110.0, 375.1, 108.0, 377.5, 108.0);
	ctx.bezierCurveTo(380.0, 108.0, 382.0, 110.0, 382.0, 112.5);
	ctx.bezierCurveTo(382.0, 114.9, 380.0, 117.0, 377.5, 117.0);
	ctx.bezierCurveTo(375.0, 117.0, 373.0, 114.9, 373.0, 112.5);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(380.1, 112.5);
	ctx.bezierCurveTo(380.1, 111.1, 379.0, 109.9, 377.5, 109.9);
	ctx.bezierCurveTo(376.1, 109.9, 374.9, 111.0, 374.9, 112.5);
	ctx.bezierCurveTo(374.9, 113.9, 376.0, 115.1, 377.5, 115.1);
	ctx.bezierCurveTo(378.9, 115.1, 380.1, 113.9, 380.1, 112.5);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(391.7, 116.8);
	ctx.lineTo(389.8, 116.8);
	ctx.lineTo(388.3, 111.7);
	ctx.lineTo(386.4, 116.8);
	ctx.lineTo(384.6, 116.8);
	ctx.lineTo(382.6, 110.0);
	ctx.lineTo(381.5, 110.0);
	ctx.lineTo(381.5, 108.2);
	ctx.lineTo(385.4, 108.2);
	ctx.lineTo(385.4, 110.0);
	ctx.lineTo(384.5, 110.0);
	ctx.lineTo(385.7, 114.1);
	ctx.lineTo(385.8, 114.1);
	ctx.lineTo(387.5, 108.5);
	ctx.lineTo(389.1, 108.5);
	ctx.lineTo(390.8, 114.1);
	ctx.lineTo(390.8, 114.1);
	ctx.lineTo(392.1, 110.0);
	ctx.lineTo(391.2, 110.0);
	ctx.lineTo(391.2, 108.2);
	ctx.lineTo(395.2, 108.2);
	ctx.lineTo(395.2, 110.0);
	ctx.lineTo(394.1, 110.0);
	ctx.lineTo(391.7, 116.8);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(398.6, 114.9);
	ctx.lineTo(399.7, 114.9);
	ctx.lineTo(399.7, 116.8);
	ctx.lineTo(395.6, 116.8);
	ctx.lineTo(395.6, 114.9);
	ctx.lineTo(396.7, 114.9);
	ctx.lineTo(396.7, 110.0);
	ctx.lineTo(395.6, 110.0);
	ctx.lineTo(395.6, 108.2);
	ctx.lineTo(398.6, 108.2);
	ctx.lineTo(398.6, 114.9);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(398.6, 107.4);
	ctx.lineTo(396.7, 107.4);
	ctx.lineTo(396.7, 105.3);
	ctx.lineTo(398.6, 105.3);
	ctx.lineTo(398.6, 107.4);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(401.2, 110.0);
	ctx.lineTo(400.1, 110.0);
	ctx.lineTo(400.1, 108.2);
	ctx.lineTo(403.2, 108.2);
	ctx.lineTo(403.2, 109.4);
	ctx.bezierCurveTo(403.7, 108.5, 404.6, 108.0, 405.7, 108.0);
	ctx.bezierCurveTo(406.6, 108.0, 407.5, 108.4, 408.2, 109.1);
	ctx.bezierCurveTo(408.9, 109.9, 408.9, 110.6, 408.9, 111.6);
	ctx.lineTo(408.9, 114.9);
	ctx.lineTo(410.0, 114.9);
	ctx.lineTo(410.0, 116.8);
	ctx.lineTo(405.8, 116.8);
	ctx.lineTo(405.8, 114.9);
	ctx.lineTo(406.9, 114.9);
	ctx.lineTo(406.9, 112.2);
	ctx.bezierCurveTo(406.9, 111.6, 406.9, 111.1, 406.6, 110.6);
	ctx.bezierCurveTo(406.2, 110.2, 405.7, 110.0, 405.1, 110.0);
	ctx.bezierCurveTo(404.5, 110.0, 403.9, 110.2, 403.5, 110.7);
	ctx.bezierCurveTo(403.2, 111.2, 403.2, 111.9, 403.2, 112.5);
	ctx.lineTo(403.2, 114.9);
	ctx.lineTo(404.3, 114.9);
	ctx.lineTo(404.3, 116.8);
	ctx.lineTo(400.1, 116.8);
	ctx.lineTo(400.1, 114.9);
	ctx.lineTo(401.2, 114.9);
	ctx.lineTo(401.2, 110.0);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(412.3, 117.5);
	ctx.bezierCurveTo(412.6, 118.2, 413.4, 118.6, 414.2, 118.6);
	ctx.bezierCurveTo(414.9, 118.6, 415.6, 118.3, 416.0, 117.8);
	ctx.bezierCurveTo(416.5, 117.1, 416.6, 116.6, 416.6, 115.8);
	ctx.lineTo(416.6, 115.5);
	ctx.bezierCurveTo(416.0, 116.5, 415.0, 116.9, 413.9, 116.9);
	ctx.bezierCurveTo(411.4, 116.9, 409.5, 114.9, 409.5, 112.5);
	ctx.bezierCurveTo(409.5, 110.1, 411.5, 108.1, 413.9, 108.1);
	ctx.bezierCurveTo(415.0, 108.1, 416.1, 108.5, 416.7, 109.5);
	ctx.lineTo(416.7, 108.2);
	ctx.lineTo(419.6, 108.2);
	ctx.lineTo(419.6, 110.0);
	ctx.lineTo(418.5, 110.0);
	ctx.lineTo(418.5, 115.6);
	ctx.bezierCurveTo(418.5, 117.0, 418.4, 118.0, 417.4, 119.0);
	ctx.bezierCurveTo(416.5, 119.9, 415.4, 120.3, 414.1, 120.3);
	ctx.bezierCurveTo(412.3, 120.3, 410.5, 119.4, 410.0, 117.5);
	ctx.lineTo(412.3, 117.5);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(414.1, 115.1);
	ctx.bezierCurveTo(415.6, 115.1, 416.7, 113.9, 416.7, 112.5);
	ctx.bezierCurveTo(416.7, 111.0, 415.6, 109.9, 414.1, 109.9);
	ctx.bezierCurveTo(412.7, 109.9, 411.5, 111.0, 411.5, 112.5);
	ctx.bezierCurveTo(411.5, 113.9, 412.7, 115.1, 414.1, 115.1);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(429.2, 105.3);
	ctx.bezierCurveTo(430.2, 105.3, 431.4, 105.5, 432.3, 106.1);
	ctx.bezierCurveTo(433.2, 106.8, 433.7, 107.9, 433.7, 109.1);
	ctx.bezierCurveTo(433.7, 110.1, 433.3, 111.1, 432.6, 111.8);
	ctx.bezierCurveTo(431.7, 112.6, 430.8, 112.8, 429.6, 112.8);
	ctx.lineTo(428.1, 112.8);
	ctx.lineTo(428.1, 114.9);
	ctx.lineTo(429.3, 114.9);
	ctx.lineTo(429.3, 116.8);
	ctx.lineTo(424.7, 116.8);
	ctx.lineTo(424.7, 114.9);
	ctx.lineTo(425.9, 114.9);
	ctx.lineTo(425.9, 107.2);
	ctx.lineTo(424.7, 107.2);
	ctx.lineTo(424.7, 105.3);
	ctx.lineTo(429.2, 105.3);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(429.4, 110.8);
	ctx.bezierCurveTo(429.9, 110.8, 430.4, 110.8, 430.8, 110.5);
	ctx.bezierCurveTo(431.3, 110.1, 431.5, 109.6, 431.5, 109.1);
	ctx.bezierCurveTo(431.5, 108.5, 431.2, 108.0, 430.8, 107.7);
	ctx.bezierCurveTo(430.3, 107.3, 429.8, 107.3, 429.3, 107.3);
	ctx.lineTo(428.1, 107.3);
	ctx.lineTo(428.1, 110.8);
	ctx.lineTo(429.4, 110.8);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(436.6, 109.7);
	ctx.bezierCurveTo(437.0, 108.7, 438.0, 108.2, 439.1, 108.1);
	ctx.lineTo(439.1, 110.1);
	ctx.bezierCurveTo(438.5, 110.2, 437.9, 110.3, 437.4, 110.8);
	ctx.bezierCurveTo(436.8, 111.3, 436.7, 112.0, 436.7, 112.8);
	ctx.lineTo(436.7, 114.9);
	ctx.lineTo(437.8, 114.9);
	ctx.lineTo(437.8, 116.8);
	ctx.lineTo(433.6, 116.8);
	ctx.lineTo(433.6, 114.9);
	ctx.lineTo(434.7, 114.9);
	ctx.lineTo(434.7, 110.0);
	ctx.lineTo(433.6, 110.0);
	ctx.lineTo(433.6, 108.2);
	ctx.lineTo(436.6, 108.2);
	ctx.lineTo(436.6, 109.7);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(439.0, 112.5);
	ctx.bezierCurveTo(439.0, 110.0, 441.0, 108.0, 443.5, 108.0);
	ctx.bezierCurveTo(446.0, 108.0, 448.0, 110.0, 448.0, 112.5);
	ctx.bezierCurveTo(448.0, 114.9, 446.0, 117.0, 443.5, 117.0);
	ctx.bezierCurveTo(441.0, 117.0, 439.0, 114.9, 439.0, 112.5);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(446.1, 112.5);
	ctx.bezierCurveTo(446.1, 111.1, 444.9, 109.9, 443.5, 109.9);
	ctx.bezierCurveTo(442.1, 109.9, 440.9, 111.0, 440.9, 112.5);
	ctx.bezierCurveTo(440.9, 113.9, 442.0, 115.1, 443.5, 115.1);
	ctx.bezierCurveTo(444.9, 115.1, 446.1, 113.9, 446.1, 112.5);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(455.5, 115.5);
	ctx.bezierCurveTo(454.8, 116.5, 453.8, 116.9, 452.6, 116.9);
	ctx.bezierCurveTo(450.3, 116.9, 448.3, 114.9, 448.3, 112.5);
	ctx.bezierCurveTo(448.3, 110.1, 450.2, 108.1, 452.6, 108.1);
	ctx.bezierCurveTo(453.7, 108.1, 454.8, 108.6, 455.5, 109.5);
	ctx.lineTo(455.5, 107.2);
	ctx.lineTo(454.3, 107.2);
	ctx.lineTo(454.3, 105.3);
	ctx.lineTo(457.4, 105.3);
	ctx.lineTo(457.4, 114.9);
	ctx.lineTo(458.5, 114.9);
	ctx.lineTo(458.5, 116.8);
	ctx.lineTo(455.5, 116.8);
	ctx.lineTo(455.5, 115.5);
	ctx.closePath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(455.5, 112.5);
	ctx.bezierCurveTo(455.5, 111.1, 454.3, 109.9, 452.9, 109.9);
	ctx.bezierCurveTo(451.5, 109.9, 450.3, 111.1, 450.3, 112.5);
	ctx.bezierCurveTo(450.3, 113.9, 451.5, 115.1, 452.9, 115.1);
	ctx.bezierCurveTo(454.4, 115.1, 455.5, 113.9, 455.5, 112.5);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(466.5, 114.9);
	ctx.lineTo(467.6, 114.9);
	ctx.lineTo(467.6, 116.8);
	ctx.lineTo(464.7, 116.8);
	ctx.lineTo(464.7, 115.7);
	ctx.bezierCurveTo(464.2, 116.6, 463.1, 117.0, 462.1, 117.0);
	ctx.bezierCurveTo(461.2, 117.0, 460.4, 116.6, 459.8, 115.9);
	ctx.bezierCurveTo(459.2, 115.2, 459.0, 114.4, 459.0, 113.4);
	ctx.lineTo(459.0, 110.0);
	ctx.lineTo(457.9, 110.0);
	ctx.lineTo(457.9, 108.2);
	ctx.lineTo(461.0, 108.2);
	ctx.lineTo(461.0, 112.9);
	ctx.bezierCurveTo(461.0, 113.4, 461.0, 114.0, 461.3, 114.5);
	ctx.bezierCurveTo(461.6, 114.9, 462.2, 115.2, 462.8, 115.2);
	ctx.bezierCurveTo(463.3, 115.2, 463.9, 114.9, 464.2, 114.5);
	ctx.bezierCurveTo(464.6, 114.0, 464.6, 113.4, 464.6, 112.8);
	ctx.lineTo(464.6, 110.0);
	ctx.lineTo(463.5, 110.0);
	ctx.lineTo(463.5, 108.2);
	ctx.lineTo(466.5, 108.2);
	ctx.lineTo(466.5, 114.9);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(476.0, 113.9);
	ctx.bezierCurveTo(475.4, 115.7, 473.6, 117.0, 471.7, 117.0);
	ctx.bezierCurveTo(469.2, 117.0, 467.2, 115.0, 467.2, 112.5);
	ctx.bezierCurveTo(467.2, 110.1, 469.1, 108.0, 471.5, 108.0);
	ctx.bezierCurveTo(472.5, 108.0, 473.3, 108.3, 473.9, 109.0);
	ctx.lineTo(473.9, 108.2);
	ctx.lineTo(475.6, 108.2);
	ctx.lineTo(475.6, 111.1);
	ctx.lineTo(473.8, 111.1);
	ctx.bezierCurveTo(473.3, 110.4, 472.5, 109.9, 471.7, 109.9);
	ctx.bezierCurveTo(470.2, 109.9, 469.1, 111.1, 469.1, 112.5);
	ctx.bezierCurveTo(469.1, 114.0, 470.3, 115.1, 471.7, 115.1);
	ctx.bezierCurveTo(472.6, 115.1, 473.4, 114.6, 473.8, 113.9);
	ctx.lineTo(476.0, 113.9);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(479.3, 114.9);
	ctx.lineTo(480.9, 114.9);
	ctx.lineTo(480.9, 116.8);
	ctx.lineTo(477.4, 116.8);
	ctx.lineTo(477.4, 110.0);
	ctx.lineTo(476.0, 110.0);
	ctx.lineTo(476.0, 108.2);
	ctx.lineTo(477.4, 108.2);
	ctx.lineTo(477.4, 105.3);
	ctx.lineTo(479.3, 105.3);
	ctx.lineTo(479.3, 108.2);
	ctx.lineTo(480.8, 108.2);
	ctx.lineTo(480.8, 110.0);
	ctx.lineTo(479.3, 110.0);
	ctx.lineTo(479.3, 114.9);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Compound Path/Path
	ctx.moveTo(483.4, 114.3);
	ctx.bezierCurveTo(483.4, 115.1, 483.9, 115.6, 484.7, 115.6);
	ctx.bezierCurveTo(485.3, 115.6, 485.9, 115.2, 485.9, 114.5);
	ctx.bezierCurveTo(485.9, 113.7, 485.1, 113.5, 484.5, 113.3);
	ctx.bezierCurveTo(483.0, 113.0, 481.3, 112.5, 481.3, 110.6);
	ctx.bezierCurveTo(481.3, 109.0, 482.7, 108.0, 484.2, 108.0);
	ctx.bezierCurveTo(485.0, 108.0, 485.7, 108.2, 486.2, 108.8);
	ctx.lineTo(486.2, 108.2);
	ctx.lineTo(487.6, 108.2);
	ctx.lineTo(487.6, 110.5);
	ctx.lineTo(485.7, 110.5);
	ctx.bezierCurveTo(485.7, 109.9, 485.2, 109.5, 484.6, 109.5);
	ctx.bezierCurveTo(484.1, 109.5, 483.5, 109.8, 483.5, 110.4);
	ctx.bezierCurveTo(483.5, 111.2, 484.3, 111.4, 484.9, 111.6);
	ctx.bezierCurveTo(486.5, 111.9, 488.1, 112.4, 488.1, 114.3);
	ctx.bezierCurveTo(488.1, 116.0, 486.7, 117.0, 485.1, 117.0);
	ctx.bezierCurveTo(484.2, 117.0, 483.4, 116.7, 482.9, 116.1);
	ctx.lineTo(482.9, 116.8);
	ctx.lineTo(481.4, 116.8);
	ctx.lineTo(481.4, 114.3);
	ctx.lineTo(483.4, 114.3);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group

	// logo/Group/Group/Group/Compound Path
	ctx.save();
	ctx.beginPath();

	// logo/Group/Group/Group/Compound Path/Path
	ctx.moveTo(493.2, 108.2);
	ctx.lineTo(493.2, 108.7);
	ctx.lineTo(491.8, 108.7);
	ctx.lineTo(491.8, 112.1);
	ctx.lineTo(491.3, 112.1);
	ctx.lineTo(491.3, 108.7);
	ctx.lineTo(490.0, 108.7);
	ctx.lineTo(490.0, 108.2);
	ctx.lineTo(493.2, 108.2);
	ctx.closePath();
	ctx.fill();

	// logo/Group/Group/Group/Compound Path
	ctx.beginPath();

	// logo/Group/Group/Group/Compound Path/Path
	ctx.moveTo(493.6, 108.2);
	ctx.lineTo(494.4, 108.2);
	ctx.lineTo(495.5, 111.5);
	ctx.lineTo(496.7, 108.2);
	ctx.lineTo(497.4, 108.2);
	ctx.lineTo(497.4, 112.1);
	ctx.lineTo(496.9, 112.1);
	ctx.lineTo(496.9, 109.8);
	ctx.bezierCurveTo(496.9, 109.7, 496.9, 109.6, 496.9, 109.4);
	ctx.bezierCurveTo(496.9, 109.2, 496.9, 109.0, 496.9, 108.8);
	ctx.lineTo(495.8, 112.1);
	ctx.lineTo(495.3, 112.1);
	ctx.lineTo(494.1, 108.8);
	ctx.lineTo(494.1, 108.9);
	ctx.bezierCurveTo(494.1, 109.0, 494.1, 109.2, 494.1, 109.4);
	ctx.bezierCurveTo(494.1, 109.6, 494.2, 109.7, 494.2, 109.8);
	ctx.lineTo(494.2, 112.1);
	ctx.lineTo(493.6, 112.1);
	ctx.lineTo(493.6, 108.2);
	ctx.closePath();
	ctx.fill();

	// logo/Guide
	ctx.restore();
	ctx.restore();
	ctx.restore();
	ctx.restore();

	// map/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(671.7, 166.5);
	ctx.lineTo(671.7, 123.9);
	ctx.lineWidth = 0.5;
	ctx.strokeStyle = "rgb(127, 128, 131)";
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 166.5);
	ctx.lineTo(693.0, 102.6);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 166.5);
	ctx.lineTo(714.3, 102.6);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 166.5);
	ctx.lineTo(735.6, 102.6);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 166.5);
	ctx.lineTo(820.8, 102.6);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 166.5);
	ctx.lineTo(842.1, 102.6);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 145.2);
	ctx.lineTo(671.7, 145.2);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(863.4, 166.5);
	ctx.lineTo(863.4, 102.6);
	ctx.stroke();

	// map/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 166.5);
	ctx.lineTo(884.7, 102.6);
	ctx.stroke();

	// map/Group

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(245.7, 400.8);
	ctx.lineTo(54.0, 400.8);
	ctx.lineTo(54.0, 486.0);
	ctx.lineTo(245.7, 486.0);
	ctx.lineTo(245.7, 400.8);
	ctx.closePath();
	gradient = ctx.createLinearGradient(52.3, 405.2, 247.4, 481.6);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(75.3, 486.0);
	ctx.lineTo(75.3, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(96.6, 486.0);
	ctx.lineTo(96.6, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(117.9, 486.0);
	ctx.lineTo(117.9, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(139.2, 486.0);
	ctx.lineTo(139.2, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(160.5, 486.0);
	ctx.lineTo(160.5, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(181.8, 486.0);
	ctx.lineTo(181.8, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(203.1, 486.0);
	ctx.lineTo(203.1, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(224.4, 486.0);
	ctx.lineTo(224.4, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 422.1);
	ctx.lineTo(54.0, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 443.4);
	ctx.lineTo(54.0, 443.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 464.7);
	ctx.lineTo(54.0, 464.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 400.8);
	ctx.lineTo(54.0, 400.8);
	ctx.lineTo(54.0, 486.0);
	ctx.lineTo(245.7, 486.0);
	ctx.lineTo(245.7, 400.8);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(629.1, 486.0);
	ctx.lineTo(437.4, 486.0);
	ctx.lineTo(437.4, 400.8);
	ctx.lineTo(629.1, 400.8);
	ctx.lineTo(629.1, 486.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(435.7, 405.2, 630.8, 481.6);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(458.7, 486.0);
	ctx.lineTo(458.7, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(480.0, 486.0);
	ctx.lineTo(480.0, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(501.3, 486.0);
	ctx.lineTo(501.3, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(522.6, 486.0);
	ctx.lineTo(522.6, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(543.9, 486.0);
	ctx.lineTo(543.9, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(565.2, 486.0);
	ctx.lineTo(565.2, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(586.5, 486.0);
	ctx.lineTo(586.5, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(607.8, 486.0);
	ctx.lineTo(607.8, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 422.1);
	ctx.lineTo(437.4, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 443.4);
	ctx.lineTo(437.4, 443.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 464.7);
	ctx.lineTo(437.4, 464.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 486.0);
	ctx.lineTo(437.4, 486.0);
	ctx.lineTo(437.4, 400.8);
	ctx.lineTo(629.1, 400.8);
	ctx.lineTo(629.1, 486.0);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Group
	ctx.save();

	// map/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(437.4, 422.1);
	ctx.lineTo(245.7, 422.1);
	ctx.lineTo(245.7, 209.1);
	ctx.lineTo(437.4, 209.1);
	ctx.lineTo(437.4, 422.1);
	ctx.closePath();
	gradient = ctx.createLinearGradient(222.3, 269.0, 460.8, 362.2);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(267.0, 422.1);
	ctx.lineTo(267.0, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(288.3, 422.1);
	ctx.lineTo(288.3, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(309.6, 422.1);
	ctx.lineTo(309.6, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(330.9, 422.1);
	ctx.lineTo(330.9, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(352.2, 422.1);
	ctx.lineTo(352.2, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(373.5, 422.1);
	ctx.lineTo(373.5, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(394.8, 422.1);
	ctx.lineTo(394.8, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(416.1, 422.1);
	ctx.lineTo(416.1, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 400.8);
	ctx.lineTo(245.7, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 230.4);
	ctx.lineTo(245.7, 230.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 251.7);
	ctx.lineTo(245.7, 251.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 273.0);
	ctx.lineTo(245.7, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 294.3);
	ctx.lineTo(245.7, 294.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 315.6);
	ctx.lineTo(245.7, 315.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 336.9);
	ctx.lineTo(245.7, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 358.2);
	ctx.lineTo(245.7, 358.2);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 379.5);
	ctx.lineTo(245.7, 379.5);
	ctx.stroke();

	// map/Group/Group

	// map/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(437.4, 422.1);
	ctx.lineTo(245.7, 422.1);
	ctx.lineTo(245.7, 209.1);
	ctx.lineTo(437.4, 209.1);
	ctx.lineTo(437.4, 422.1);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(906.0, 486.0);
	ctx.lineTo(671.7, 486.0);
	ctx.lineTo(671.7, 336.9);
	ctx.lineTo(906.0, 336.9);
	ctx.lineTo(906.0, 486.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(662.0, 361.8, 915.8, 461.1);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 486.0);
	ctx.lineTo(693.0, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 486.0);
	ctx.lineTo(714.3, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 486.0);
	ctx.lineTo(735.6, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(756.9, 486.0);
	ctx.lineTo(756.9, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(778.2, 486.0);
	ctx.lineTo(778.2, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(799.5, 486.0);
	ctx.lineTo(799.5, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 486.0);
	ctx.lineTo(820.8, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 486.0);
	ctx.lineTo(842.1, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(863.4, 486.0);
	ctx.lineTo(863.4, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 486.0);
	ctx.lineTo(884.7, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 358.2);
	ctx.lineTo(671.7, 358.2);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 379.5);
	ctx.lineTo(671.7, 379.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 400.8);
	ctx.lineTo(671.7, 400.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 422.1);
	ctx.lineTo(671.7, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 443.4);
	ctx.lineTo(671.7, 443.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 464.7);
	ctx.lineTo(671.7, 464.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 486.0);
	ctx.lineTo(671.7, 486.0);
	ctx.lineTo(671.7, 336.9);
	ctx.lineTo(906.0, 336.9);
	ctx.lineTo(906.0, 486.0);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(629.1, 400.8);
	ctx.lineTo(437.4, 400.8);
	ctx.lineTo(437.4, 209.1);
	ctx.lineTo(629.1, 209.1);
	ctx.lineTo(629.1, 400.8);
	ctx.closePath();
	gradient = ctx.createLinearGradient(417.6, 259.7, 648.9, 350.2);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(458.7, 400.8);
	ctx.lineTo(458.7, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(480.0, 400.8);
	ctx.lineTo(480.0, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(501.3, 400.8);
	ctx.lineTo(501.3, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(522.6, 400.8);
	ctx.lineTo(522.6, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(543.9, 400.8);
	ctx.lineTo(543.9, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(565.2, 400.8);
	ctx.lineTo(565.2, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(586.5, 400.8);
	ctx.lineTo(586.5, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(607.8, 400.8);
	ctx.lineTo(607.8, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 230.4);
	ctx.lineTo(437.4, 230.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 251.7);
	ctx.lineTo(437.4, 251.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 273.0);
	ctx.lineTo(437.4, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 294.3);
	ctx.lineTo(437.4, 294.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 315.6);
	ctx.lineTo(437.4, 315.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 336.9);
	ctx.lineTo(437.4, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 358.2);
	ctx.lineTo(437.4, 358.2);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 379.5);
	ctx.lineTo(437.4, 379.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 400.8);
	ctx.lineTo(437.4, 400.8);
	ctx.lineTo(437.4, 209.1);
	ctx.lineTo(629.1, 209.1);
	ctx.lineTo(629.1, 400.8);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(437.4, 486.0);
	ctx.lineTo(245.7, 486.0);
	ctx.lineTo(245.7, 422.1);
	ctx.lineTo(437.4, 422.1);
	ctx.lineTo(437.4, 486.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(247.6, 417.3, 435.5, 490.8);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(267.0, 486.0);
	ctx.lineTo(267.0, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(288.3, 486.0);
	ctx.lineTo(288.3, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(309.6, 486.0);
	ctx.lineTo(309.6, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(330.9, 486.0);
	ctx.lineTo(330.9, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(352.2, 486.0);
	ctx.lineTo(352.2, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(373.5, 486.0);
	ctx.lineTo(373.5, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(394.8, 486.0);
	ctx.lineTo(394.8, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(416.1, 486.0);
	ctx.lineTo(416.1, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 422.1);
	ctx.lineTo(245.7, 422.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 443.4);
	ctx.lineTo(245.7, 443.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 464.7);
	ctx.lineTo(245.7, 464.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(437.4, 486.0);
	ctx.lineTo(245.7, 486.0);
	ctx.lineTo(245.7, 422.1);
	ctx.lineTo(437.4, 422.1);
	ctx.lineTo(437.4, 486.0);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(906.0, 209.1);
	ctx.lineTo(671.7, 209.1);
	ctx.lineTo(671.7, 273.0);
	ctx.lineTo(906.0, 273.0);
	ctx.lineTo(906.0, 209.1);
	ctx.closePath();
	gradient = ctx.createLinearGradient(676.4, 197.1, 901.3, 285.0);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(671.7, 273.0);
	ctx.lineTo(671.7, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 273.0);
	ctx.lineTo(693.0, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 273.0);
	ctx.lineTo(714.3, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 273.0);
	ctx.lineTo(735.6, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(756.9, 273.0);
	ctx.lineTo(756.9, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(778.2, 273.0);
	ctx.lineTo(778.2, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(799.5, 273.0);
	ctx.lineTo(799.5, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 273.0);
	ctx.lineTo(820.8, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 273.0);
	ctx.lineTo(842.1, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(863.4, 273.0);
	ctx.lineTo(863.4, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 273.0);
	ctx.lineTo(884.7, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 273.0);
	ctx.lineTo(906.0, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 209.1);
	ctx.lineTo(671.7, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 230.4);
	ctx.lineTo(671.7, 230.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 251.7);
	ctx.lineTo(671.7, 251.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 273.0);
	ctx.lineTo(671.7, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 209.1);
	ctx.lineTo(671.7, 209.1);
	ctx.lineTo(671.7, 273.0);
	ctx.lineTo(906.0, 273.0);
	ctx.lineTo(906.0, 209.1);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(906.0, 102.6);
	ctx.lineTo(671.7, 102.6);
	ctx.lineTo(671.7, 166.5);
	ctx.lineTo(906.0, 166.5);
	ctx.lineTo(906.0, 102.6);
	ctx.closePath();
	gradient = ctx.createLinearGradient(676.4, 90.6, 901.3, 178.5);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(671.7, 166.5);
	ctx.lineTo(671.7, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 166.5);
	ctx.lineTo(693.0, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 166.5);
	ctx.lineTo(714.3, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 166.5);
	ctx.lineTo(735.6, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(756.9, 166.5);
	ctx.lineTo(756.9, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(778.2, 166.5);
	ctx.lineTo(778.2, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(799.5, 166.5);
	ctx.lineTo(799.5, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 166.5);
	ctx.lineTo(820.8, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 166.5);
	ctx.lineTo(842.1, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(863.4, 166.5);
	ctx.lineTo(863.4, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 166.5);
	ctx.lineTo(884.7, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 166.5);
	ctx.lineTo(906.0, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 102.6);
	ctx.lineTo(671.7, 102.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 123.9);
	ctx.lineTo(671.7, 123.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 145.2);
	ctx.lineTo(671.7, 145.2);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 166.5);
	ctx.lineTo(671.7, 166.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 102.6);
	ctx.lineTo(671.7, 102.6);
	ctx.lineTo(671.7, 166.5);
	ctx.lineTo(906.0, 166.5);
	ctx.lineTo(906.0, 102.6);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(181.8, 400.8);
	ctx.lineTo(54.0, 400.8);
	ctx.lineTo(54.0, 358.3);
	ctx.lineTo(181.8, 358.3);
	ctx.lineTo(181.8, 400.8);
	ctx.closePath();
	gradient = ctx.createLinearGradient(55.3, 355.0, 202.2, 412.5);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(75.3, 400.8);
	ctx.lineTo(75.3, 358.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(96.6, 400.8);
	ctx.lineTo(96.6, 358.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(117.9, 400.8);
	ctx.lineTo(117.9, 358.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(139.2, 400.8);
	ctx.lineTo(139.2, 358.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(160.5, 400.8);
	ctx.lineTo(160.5, 358.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(181.8, 379.5);
	ctx.lineTo(54.0, 379.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(181.8, 400.8);
	ctx.lineTo(54.0, 400.8);
	ctx.lineTo(54.0, 358.3);
	ctx.lineTo(181.8, 358.3);
	ctx.lineTo(181.8, 400.8);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(906.0, 294.3);
	ctx.lineTo(671.7, 294.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 315.6);
	ctx.lineTo(671.7, 315.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 336.9);
	ctx.lineTo(671.7, 336.9);
	ctx.stroke();

	// map/Group/Path
	// ctx.beginPath();
	// ctx.moveTo(906.0, 273.0);
	// ctx.lineTo(671.7, 273.0);
	// ctx.lineTo(671.7, 336.9);
	// ctx.lineTo(906.0, 336.9);
	// ctx.lineTo(906.0, 273.0);
	// ctx.closePath();
	// gradient = ctx.createLinearGradient(676.4, 261.0, 901.3, 348.9);
	// gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	// gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	// ctx.fillStyle = gradient;
	// ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 336.9);
	ctx.lineTo(693.0, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 336.9);
	ctx.lineTo(714.3, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 336.9);
	ctx.lineTo(735.6, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(756.9, 336.9);
	ctx.lineTo(756.9, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(778.2, 336.9);
	ctx.lineTo(778.2, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(799.5, 336.9);
	ctx.lineTo(799.5, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 336.9);
	ctx.lineTo(820.8, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 336.9);
	ctx.lineTo(842.1, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 315.6);
	ctx.lineTo(671.7, 315.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 294.3);
	ctx.lineTo(671.7, 294.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(863.4, 336.9);
	ctx.lineTo(863.4, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 336.9);
	ctx.lineTo(884.7, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 273.0);
	ctx.lineTo(671.7, 273.0);
	ctx.lineTo(671.7, 336.9);
	ctx.lineTo(906.0, 336.9);
	ctx.lineTo(906.0, 273.0);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// map/Group
	ctx.restore();

	// map/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(160.5, 166.5);
	ctx.lineTo(160.5, 273.1);
	ctx.lineTo(54.0, 273.1);
	ctx.lineTo(54.0, 358.3);
	ctx.lineTo(181.8, 358.3);
	ctx.lineTo(181.8, 400.8);
	ctx.lineTo(245.7, 400.8);
	ctx.lineTo(245.7, 166.5);
	ctx.lineTo(160.5, 166.5);
	ctx.closePath();
	gradient = ctx.createLinearGradient(70.3, 231.3, 279.9, 313.3);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(75.3, 358.3);
	ctx.lineTo(75.3, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(96.6, 358.3);
	ctx.lineTo(96.6, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(117.9, 358.3);
	ctx.lineTo(117.9, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(139.2, 358.3);
	ctx.lineTo(139.2, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(160.5, 358.3);
	ctx.lineTo(160.5, 166.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(181.8, 358.3);
	ctx.lineTo(181.8, 166.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(203.1, 400.8);
	ctx.lineTo(203.1, 166.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(224.4, 400.8);
	ctx.lineTo(224.4, 166.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 187.8);
	ctx.lineTo(160.5, 187.8);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 209.1);
	ctx.lineTo(160.5, 209.1);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 230.4);
	ctx.lineTo(160.5, 230.4);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 251.7);
	ctx.lineTo(160.5, 251.7);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 273.0);
	ctx.lineTo(160.5, 273.0);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 294.3);
	ctx.lineTo(54.0, 294.3);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 315.6);
	ctx.lineTo(54.0, 315.6);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 336.9);
	ctx.lineTo(54.0, 336.9);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 358.2);
	ctx.lineTo(181.8, 358.2);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(245.7, 379.5);
	ctx.lineTo(181.8, 379.5);
	ctx.stroke();

	// map/Group/Path
	ctx.beginPath();
	ctx.moveTo(160.5, 166.5);
	ctx.lineTo(160.5, 273.1);
	ctx.lineTo(54.0, 273.1);
	ctx.lineTo(54.0, 358.3);
	ctx.lineTo(181.8, 358.3);
	ctx.lineTo(181.8, 400.8);
	ctx.lineTo(245.7, 400.8);
	ctx.lineTo(245.7, 166.5);
	ctx.lineTo(160.5, 166.5);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();
	ctx.restore();
	ctx.restore();

	// weldingClick/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(437.4, 422.1);
	ctx.lineTo(245.7, 422.1);
	ctx.lineTo(245.7, 209.1);
	ctx.lineTo(437.4, 209.1);
	ctx.lineTo(437.4, 422.1);
	ctx.closePath();

	// weldingClick/Path
	ctx.beginPath();
	ctx.moveTo(629.1, 635.1);
	ctx.lineTo(437.4, 635.1);
	ctx.lineTo(437.4, 422.1);
	ctx.lineTo(629.1, 422.1);
	ctx.lineTo(629.1, 635.1);
	ctx.closePath();
	ctx.restore();

	// iconsAndText/Group
	ctx.save();

	// iconsAndText/Group/Group
	ctx.save();

	// iconsAndText/Group/Group/Clip Group
	ctx.save();

	// iconsAndText/Group/Group/Clip Group/Clipping Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(64.6, 365.7);
	ctx.lineTo(92.2, 365.7);
	ctx.lineTo(92.2, 393.3);
	ctx.lineTo(64.6, 393.3);
	ctx.lineTo(64.6, 365.7);
	ctx.closePath();
	ctx.clip();

	// iconsAndText/Group/Group/Clip Group/Clip Group

	// iconsAndText/Group/Group/Clip Group/Clip Group/Clipping Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(64.6, 365.7);
	ctx.lineTo(92.2, 365.7);
	ctx.lineTo(92.2, 393.3);
	ctx.lineTo(64.6, 393.3);
	ctx.lineTo(64.6, 365.7);
	ctx.closePath();
	ctx.clip();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Path
	ctx.beginPath();
	ctx.moveTo(64.6, 390.9);
	ctx.bezierCurveTo(64.6, 392.2, 65.7, 393.3, 67.0, 393.3);
	ctx.lineTo(89.8, 393.3);
	ctx.bezierCurveTo(91.1, 393.3, 92.2, 392.2, 92.2, 390.9);
	ctx.lineTo(92.2, 368.1);
	ctx.bezierCurveTo(92.2, 366.8, 91.1, 365.7, 89.8, 365.7);
	ctx.lineTo(67.0, 365.7);
	ctx.bezierCurveTo(65.7, 365.7, 64.6, 366.8, 64.6, 368.1);
	ctx.lineTo(64.6, 390.9);
	ctx.closePath();
	ctx.fillStyle = "rgb(239, 89, 33)";
	ctx.fill();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path
	ctx.beginPath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(78.4, 379.5);
	ctx.lineTo(83.9, 379.5);
	ctx.lineTo(83.9, 374.1);
	ctx.lineTo(78.4, 374.1);
	ctx.lineTo(78.4, 379.5);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(89.3, 379.5);
	ctx.lineTo(83.9, 379.5);
	ctx.lineTo(83.9, 384.9);
	ctx.lineTo(89.3, 384.9);
	ctx.lineTo(89.3, 379.5);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(67.5, 379.5);
	ctx.lineTo(73.0, 379.5);
	ctx.lineTo(73.0, 374.1);
	ctx.lineTo(67.5, 374.1);
	ctx.lineTo(67.5, 379.5);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(89.3, 368.6);
	ctx.lineTo(83.9, 368.6);
	ctx.lineTo(83.9, 374.1);
	ctx.lineTo(89.3, 374.1);
	ctx.lineTo(89.3, 368.6);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(78.4, 368.6);
	ctx.lineTo(73.0, 368.6);
	ctx.lineTo(73.0, 374.1);
	ctx.lineTo(78.4, 374.1);
	ctx.lineTo(78.4, 368.6);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(73.0, 384.9);
	ctx.lineTo(78.4, 384.9);
	ctx.lineTo(78.4, 379.5);
	ctx.lineTo(73.0, 379.5);
	ctx.lineTo(73.0, 384.9);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(78.4, 390.4);
	ctx.lineTo(83.9, 390.4);
	ctx.lineTo(83.9, 384.9);
	ctx.lineTo(78.4, 384.9);
	ctx.lineTo(78.4, 390.4);
	ctx.closePath();

	// iconsAndText/Group/Group/Clip Group/Clip Group/Compound Path/Path
	ctx.moveTo(67.5, 390.4);
	ctx.lineTo(73.0, 390.4);
	ctx.lineTo(73.0, 384.9);
	ctx.lineTo(67.5, 384.9);
	ctx.lineTo(67.5, 390.4);
	ctx.closePath();
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fill();

	ctx.restore();


	// iconsAndText/Group/1st toMarket
	ctx.restore();
	ctx.restore();
	ctx.restore();
	//ctx.font = 'normal 16px "ITCAvantGardeStd-Demi"';
	ctx.fillStyle = "rgb(34, 30, 31)";
	ctx.fillText("1ST TO", 97.7, 378.1);
	ctx.fillText("MARKET", 97.7, 393.3);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 78.4, 315.6);
	ctx.drawImage(document.getElementById("image1"), -17, -17, 35, 32);
	ctx.restore();

	ctx.font = "16px 'ITCAvantGardeStd-Demi'";
	ctx.fillText("FABRICATION ", 97.7, 314.2);
	ctx.fillText("DEPARTMENT", 97.7, 329.4);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 270.1, 315.6);
	ctx.drawImage(document.getElementById("image2"), -17, -17);
	ctx.restore();

	ctx.fillText("WELDING", 289.4, 314.2);
	ctx.fillText("DEPARTMENT", 289.4, 329.4);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 461.8, 315.6);
	ctx.drawImage(document.getElementById("image3"), -17, -17);
	ctx.restore();

	ctx.fillText("FINISHING", 481.1, 314.2);
	ctx.fillText("DEPARTMENT", 481.1, 329.4);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 461.8, 443.4);
	ctx.drawImage(document.getElementById("image4"), -17, -17);
	ctx.restore();

	ctx.fillText("ELECTRICAL", 481.1, 442.0);
	ctx.fillText("DEPARTMENT", 481.1, 457.2);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 696.1, 244.2);
	ctx.drawImage(document.getElementById("image5"), -17, -17);
	ctx.restore();

	ctx.fillText("eCOMMERCE", 715.4, 242.8);
	ctx.fillText("DEPARTMENT", 715.4, 258.0);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 270.1, 454.0);
	ctx.drawImage(document.getElementById("image6"), -17, -17);
	ctx.restore();

	ctx.fillText("COMPANY", 289.4, 452.6);
	ctx.fillText("VISION", 289.4, 467.9);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 696.1, 411.4);
	ctx.drawImage(document.getElementById("image7"), -17, -17);
	ctx.restore();

	ctx.fillText("DISTRIBUTION AND", 715.4, 410.0);
	ctx.fillText("CUSTOMER SERVICE", 715.4, 425.3);

	// iconsAndText/Group
	ctx.restore();

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 78.4, 443.4);
	ctx.drawImage(document.getElementById("image8"), -17, -17);
	ctx.restore();

	ctx.fillText("QUALITY AND", 97.7, 442.0);
	ctx.fillText("INSPECTION", 97.7, 457.2);

	// iconsAndText/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(906.0, 102.6);
	ctx.lineTo(671.7, 102.6);
	ctx.lineTo(671.7, 166.5);
	ctx.lineTo(906.0, 166.5);
	ctx.lineTo(906.0, 102.6);
	ctx.closePath();
	gradient = ctx.createLinearGradient(676.4, 90.6, 901.3, 178.5);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();
	ctx.lineWidth = 1.1;
	ctx.strokeStyle = "rgb(34, 30, 31)";
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(671.7, 166.5);
	ctx.lineTo(671.7, 123.9);
	ctx.lineWidth = 0.5;
	ctx.strokeStyle = "rgb(127, 128, 131)";
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 166.5);
	ctx.lineTo(693.0, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 166.5);
	ctx.lineTo(714.3, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 166.5);
	ctx.lineTo(735.6, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(756.9, 166.5);
	ctx.lineTo(756.9, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(778.2, 166.5);
	ctx.lineTo(778.2, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(799.5, 166.5);
	ctx.lineTo(799.5, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 166.5);
	ctx.lineTo(820.8, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 166.5);
	ctx.lineTo(842.1, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 145.2);
	ctx.lineTo(671.7, 145.2);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 123.9);
	ctx.lineTo(671.7, 123.9);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 102.6);
	ctx.lineTo(671.7, 102.6);
	ctx.lineTo(671.7, 166.5);
	ctx.lineTo(906.0, 166.5);
	ctx.lineTo(906.0, 102.6);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();

	// iconsAndText/Group

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 696.1, 134.5);
	ctx.drawImage(document.getElementById("image9"), -17, -17);
	ctx.restore();

	// iconsAndText/Group/Detroit Engineering
	ctx.fillStyle = "rgb(34, 30, 31)";
	ctx.fillText("DETROIT ", 715.4, 133.1);
	ctx.fillText("ENGINEERING", 715.4, 148.4);

	// iconsAndText/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(863.4, 166.5);
	ctx.lineTo(863.4, 102.6);
	ctx.lineWidth = 0.5;
	ctx.strokeStyle = "rgb(127, 128, 131)";
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 166.5);
	ctx.lineTo(884.7, 102.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 273.0);
	ctx.lineTo(671.7, 273.0);
	ctx.lineTo(671.7, 336.9);
	ctx.lineTo(906.0, 336.9);
	ctx.lineTo(906.0, 273.0);
	ctx.closePath();
	gradient = ctx.createLinearGradient(676.4, 261.0, 901.3, 348.9);
	gradient.addColorStop(0.00, "rgb(229, 230, 231)");
	gradient.addColorStop(1.00, "rgb(165, 167, 170)");
	ctx.fillStyle = gradient;
	ctx.fill();
	ctx.lineWidth = 1.1;
	ctx.strokeStyle = "rgb(34, 30, 31)";
	ctx.lineCap = "butt";
	ctx.lineJoin = "miter";
	ctx.miterLimit = 10.0;
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(693.0, 336.9);
	ctx.lineTo(693.0, 273.0);
	ctx.lineWidth = 0.5;
	ctx.strokeStyle = "rgb(127, 128, 131)";
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(714.3, 336.9);
	ctx.lineTo(714.3, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(735.6, 336.9);
	ctx.lineTo(735.6, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(756.9, 336.9);
	ctx.lineTo(756.9, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(778.2, 336.9);
	ctx.lineTo(778.2, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(799.5, 336.9);
	ctx.lineTo(799.5, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(820.8, 336.9);
	ctx.lineTo(820.8, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(842.1, 336.9);
	ctx.lineTo(842.1, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 315.6);
	ctx.lineTo(671.7, 315.6);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 294.3);
	ctx.lineTo(671.7, 294.3);
	ctx.stroke();

	// iconsAndText/Group

	// iconsAndText/Group/Linked File
	ctx.save();
	ctx.save();
	ctx.transform(0.888, 0.000, -0.000, 0.888, 696.1, 304.9);
	ctx.drawImage(document.getElementById("image10"), -17, -17);
	ctx.restore();

	// iconsAndText/Group/InformationTechnology
	ctx.font = "Demi 16.6px 'ITCAvantGardeStd-Demi'";
	ctx.fillStyle = "rgb(34, 30, 31)";
	ctx.fillText("INFORMATION", 715.4, 303.5);
	ctx.fillText("TECHNOLOGY", 715.4, 318.8);

	// iconsAndText/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(863.4, 336.9);
	ctx.lineTo(863.4, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(884.7, 336.9);
	ctx.lineTo(884.7, 273.0);
	ctx.stroke();

	// iconsAndText/Path
	ctx.beginPath();
	ctx.moveTo(906.0, 273.0);
	ctx.lineTo(671.7, 273.0);
	ctx.lineTo(671.7, 336.9);
	ctx.lineTo(906.0, 336.9);
	ctx.lineTo(906.0, 273.0);
	ctx.closePath();
	ctx.lineWidth = 5.5;
	ctx.strokeStyle = "rgb(87, 88, 90)";
	ctx.stroke();


	// iconsAndText/Guide
	ctx.restore();
}
