 $(document).ready(function() {


/*---------------------------------------------------------------- One Page Navigation ----------------------------*/

	$('.nav').onePageNav({
	filter: ':not(.external)',
	scrollThreshold: 0.25,
	scrollOffset: 60,
	});
         

/*--------------------------------------------------------------------------- ToTop -------------------------------*/

	 $(window).scroll(function(){
		 if ($(this).scrollTop() > 100) {
			 $('.scrollup').fadeIn();
		 } else {
			 $('.scrollup').fadeOut();
		 }
	 }); 
 
	 $('.scrollup').click(function(){
		 $("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	 });
          

/*--------------------------------------------------------------------------- Lightbox -------------------------------*/
	
	$("a.lightbox_image").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	



/*--------------------------------------------------------------------------- Tooltip-------------------------------*/
	
	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}





/*--------------------------------------------------------------------------- Lightbox map -------------------------------*/
	
	$("#openmap").fancybox({
			'width'				: '65%',
			'height'			: '65%',
	        'autoScale'     	: false,
	        'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
	});



/*--------------------------------------------------------------------------- Responsive Video -------------------------------*/	
	
	$(".video").fitVids();



/*--------------------------------------------------------------------------- Contact form -------------------------------*/

	$("#form-contact").submit(function() {
		$.ajax({
			type : "POST",
			url : "send_mail.php",
			dataType : "html",
			data : $(this).serialize(),
			beforeSend : function() {
				$("#loading").show();
			},
			success : function(response) {
				$("#response").html(response);
				$("#loading").hide();
			}
		})
		return false;
	});


/*--------------------------------------------------------------------------- Hover Animations ------------------------------*/

	/*$('header .buttons a, .information a.btn, .newsletter .btn[type="submit"]').hover(function() {
		$(this).toggleClass('animated bounce');
	});*/

	$('.pricing-table, .features .item').hover(function() {
		$(this).toggleClass('animated pulse');
	});

	$('.logos a img').hover(function() {
		$(this).toggleClass('animated flip');
	});

	$('footer img.map').hover(function() {
		$(this).toggleClass('animated shake');
	});









});








