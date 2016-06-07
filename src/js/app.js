$(document).ready(function() {
    
    function siguiente() {
      var actual = $('li');
      var next = actual.next();

      $(window).scrollTo(next,400);
    };

    $('#to-next').click(siguiente);

});