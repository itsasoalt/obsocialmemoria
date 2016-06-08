$(document).ready(function() {
    
	$( ".btn-anim-three" ).on( "click", function() {
    $(this).toggleClass( "closed" );
    $('.menu-mobile').toggleClass( "closed" );
  });
  //navegador menu
  $('.menu-item a').click(function() {
    $('.menu-mobile').toggleClass( "closed" );
  })
  //flechas navegador  
    $('.to-next1').click(function() {
      $(window).scrollTo($('#uno'),400);
    });

    $('.to-prev').click(function() {
      $(window).scrollTo($('#inicio'),400);
    });
    $('.to-next2').click(function() {
      $(window).scrollTo($('#dos'),400);
    });

    $('.to-prev1').click(function() {
      $(window).scrollTo($('#uno'),400);
    });
    $('.to-next3').click(function() {
      $(window).scrollTo($('#tres'),400);
    });

    $('.to-prev2').click(function() {
      $(window).scrollTo($('#dos'),400);
    });
    $('.to-next4').click(function() {
      $(window).scrollTo($('#cuatro'),400);
    });

    $('.to-prev3').click(function() {
      $(window).scrollTo($('#tres'),400);
    });
    $('.to-next5').click(function() {
      $(window).scrollTo($('#cinco'),400);
    });

    $('.to-prev4').click(function() {
      $(window).scrollTo($('#cuatro'),400);
    });
    $('.to-next6').click(function() {
      $(window).scrollTo($('#seis'),400);
    });

    $('.to-prev5').click(function() {
      $(window).scrollTo($('#cinco'),400);
    });
    $('.to-next7').click(function() {
      $(window).scrollTo($('#siete'),400);
    });

    $('.to-prev6').click(function() {
      $(window).scrollTo($('#seis'),400);
    });
    $('.to-next8').click(function() {
      $(window).scrollTo($('#ocho'),400);
    });

    $('.to-prev7').click(function() {
      $(window).scrollTo($('#siete'),400);
    });
    $('.to-next9').click(function() {
      $(window).scrollTo($('#nueve'),400);
    });

    $('.to-prev8').click(function() {
      $(window).scrollTo($('#ocho'),400);
    });
    $('.to-next10').click(function() {
      $(window).scrollTo($('#diez'),400);
    });

    $('.to-prev9').click(function() {
      $(window).scrollTo($('#nueve'),400);
    });
    $('.to-next12').click(function() {
      $(window).scrollTo($('#doce'),400);
    });


    $('.to-prev10').click(function() {
      $(window).scrollTo($('#diez'),400);
    });
    $('.to-next13').click(function() {
      $(window).scrollTo($('#trece'),400);
    });

    $('.to-prev12').click(function() {
      $(window).scrollTo($('#doce'),400);
    });
    $('.to-next14').click(function() {
      $(window).scrollTo($('#catorce'),400);
    });

    $('.to-prev13').click(function() {
      $(window).scrollTo($('#trece'),400);
    });
});