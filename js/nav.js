//nav-bar animation
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
navSlide();



// direct browser to top right away
if (window.location.hash)
    scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

$(function(){
//your current click function
$('.scroll').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href')).offset().top + 'px'
    },500,'swing');
});

// if we have anchor on the url (calling from other page)
if(window.location.hash){
    // smooth scroll to the anchor id
    $('html,body').animate({
        scrollTop:$(window.location.hash).offset().top + 'px'
        },200,'swing');
    }
});