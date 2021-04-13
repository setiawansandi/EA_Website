// When the user scrolls down 90px from the top of the document, side-nav-bar become fixed
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const mediaQuery =  window.matchMedia('(min-width: 768px)')
    
    //if width > 768px run the fn
    if(mediaQuery.matches){
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            document.getElementById("scroll-sidebar").style.position = "fixed";
            document.getElementById("scroll-sidebar").style.transform = "translate(0px, -90px)";
            if (window.location.pathname == '/project.html') {
                document.getElementById("scroll-sidebar").style.marginLeft = "240px";
            }

        } else/*convert fixed to relative when body.scroll.top < 90*/ {
            document.getElementById("scroll-sidebar").style.position = "relative";
            document.getElementById("scroll-sidebar").style.transform = "none";
            if (window.location.pathname == '/project.html') {
                document.getElementById("scroll-sidebar").style.marginLeft = "0";
            }
        }
    }else/*convert fixed to relative when width < 768*/ {
        document.getElementById("scroll-sidebar").style.position = "relative";
        document.getElementById("scroll-sidebar").style.transform = "none";
        if (window.location.pathname == '/project.html') {
            document.getElementById("scroll-sidebar").style.marginLeft = "0";
        }
    }
}

//window.location.pathname == '/hello.html'