const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle(`toggle`);

    });

}

// When the user scrolls down 90px from the top of the document, side-nav-bar become fixed
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const mediaQuery =  window.matchMedia('(min-width: 768px)')
    //if width > 768px run the fn, else ( < 768) do nothing;
        if(mediaQuery.matches){
            if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
                document.getElementById("scroll-sidebar").style.position = "fixed";
                document.getElementById("scroll-sidebar").style.transform = "translate(0px, -90px)";
            } else {
                document.getElementById("scroll-sidebar").style.position = "relative";
                document.getElementById("scroll-sidebar").style.transform = "none";
            }
    }
}


navSlide();
