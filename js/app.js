$(document).ready(function() {
    
	$( ".btn-anim-three" ).on( "click", function() {
      $(this).toggleClass( "closed" );
      $('.menu-mobile').toggleClass( "closed" );
    });
    
    // function siguiente() {
    //   var actual = $('li');
    //   var next = actual.next();

    //   $(window).scrollTo(next,400);
    // };

    // $('#to-next').click(siguiente);

});