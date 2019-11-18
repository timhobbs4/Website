$('a.sepLink, #newer-posts').click(function() {
    //assign section reference to variable
    var sectionTo = $(this).attr('href');
    //animate scroll 
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 70
    }, 1000);
});

$('a.novLink, a.febLink, a.junLink').click(function(){
    var sectionTo = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(sectionTo).offset().top -130
    }, 1000);
});

$('a.aboutLink').click(function(){
    var sectionTo = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top -70
    }, 800);
});

$('a.servicesLink').click(function(){
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    },800);
});

$('a.homeLink').click(function(){
    var sectionTo = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top -150
    }, 800);
});

