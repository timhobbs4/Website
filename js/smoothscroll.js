document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.scrollTop -= 10;
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var path = document.querySelector(this.getAttribute('href'));
        path.scrollIntoView({
            behavior: 'smooth',
        });
    });

});

