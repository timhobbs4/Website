$('a.sepLink, #newer-posts').click(function() {
    //assign section reference to variable
    var sectionTo = $(this).attr('href');
    //animate scroll 
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 70
    }, 1000);
});

$('a.novLink').click(function(){
    var sectionTo = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(sectionTo).offset().top -105
    }, 1000);
});