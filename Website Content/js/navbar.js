    /*This function changes the colour of the navbar when the user scrolls */
       $(document).ready(function(){

     var checkScrollBar = function(){
       $('.navbar-fixed-top').css({
         backgroundColor: $(this).scrollTop() > 1 ?
           'grey' : '#040b1b'

       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });

/*this function adds a shadown to the navbar when the user scrolls */
$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1) {
            $('.navbar-fixed-top').addClass('compressed');
        } else {
            $('.navbar-fixed-top').removeClass('compressed');
        }
    });

}); 
       $(document).ready(function(){

     var checkScrollBar = function(){
       $('.navbar-fixed-top').css({
         opacity: $(this).scrollTop() > 1 ?
           '0.95' : '0.95'
           
       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });