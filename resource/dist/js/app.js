require('./bootstrap')

/* boot script
------------------------------------------------ */

/* 1. scrolling function
------------------------------------------------ */
const scrolling = function scrolling() { 
    let hashScroll = () => {
        var howitzers = document.querySelectorAll(".howitzer-animate");
        var holliws = document.querySelectorAll(".holliws-animate");
        var navbar = document.querySelector(".navbar")
        var windowHeight = window.innerHeight;
    
        if(window.scrollY > 400) {
            navbar.classList.add("stycky")
        } else {
            navbar.classList.remove("stycky")
        }
        // navbar.classList.toggle("stycky", window.scrollY * 1)
    
        for(var i =0; i < howitzers.length; i++)
        {
            var elementTop = howitzers[i].getBoundingClientRect().top;
            var elementVisible = 50;
    
            if (elementTop < windowHeight - elementVisible) 
            {
                howitzers[i].classList.add("active");
            }
            //  else
            // {
            //     howitzers[i].classList.remove("active");
            // }
        }
    
        for(var i = 0; i < holliws.length; i++) 
        {
            var elementTop = holliws[i].getBoundingClientRect().top;
            if(elementTop < windowHeight) {
                holliws[i].classList.add("active")
            } 
        }
    }

    /* srollTop */
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress-scroll-button")
        let progressValue = document.getElementById("progress-scroll-value")
        let post = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((post * 100) / calcHeight)

        if(post > 450) {
            scrollProgress.style.display = "grid"
        } else {
            scrollProgress.style.display = "none"
        }

        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0
        })

        scrollProgress.style.background = `conic-gradient(#ffb864 ${scrollValue}%, #d7d7d7 ${scrollValue}deg)`;
    }
     
    window.onload = (e) => {
        hashScroll()
        calcScrollValue()
    };
    window.onscroll = (e) => {
        hashScroll()
        calcScrollValue()
    };

}
/*2
----------------------------------------------*/
const navbarMenus = function () {
    let menu = document.getElementById("nav-menu-toggle")
    let navbarNav = document.getElementById("navbarNav")
    
    menu.addEventListener("click", function() {
        if(navbarNav.dataset.show == "false") {
            navbarNav.style.display = "block"
            setTimeout(() => {
                navbarNav.style.opacity = 1
            }, 200);
            navbarNav.dataset.show = "true"
        } else {
            navbarNav.style.opacity = 0
            setTimeout(() => {
                navbarNav.style.display = "none"
            }, 500);
            navbarNav.dataset.show = "false"
        }
    })
}

/* main function */
const App = function () {
    return {
        init: function() {
            scrolling()
            navbarMenus()
        }
    }
}()

global.App = App

// $(function() {
    App.init()
// })