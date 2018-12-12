/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',

        });

    });
});
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var path = document.querySelector(this.getAttribute('href'));

        path.scrollIntoView({
        	behavior: 'smooth',
        });

        });

    });


$(document).ready(function(){
        // scroll body to 0px on click
        $('#newer-posts').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
});

