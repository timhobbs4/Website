$(document).ready(function(){
        // scroll body to 0px on click
        $('#newer-posts').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
});
