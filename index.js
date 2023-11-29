var navToggle = document.querySelector('.mobile-nav-taggle');
var nav = document.querySelector('.primary-nav');


// when someone clicks the hamburger button

navToggle.addEventListener("click", () => {
    // if the menu is closed, open it
    // if the menu is open, close it
    var visible = nav.getAttribute("data-visible");
    
    if (visible === "false"){
        nav.setAttribute("data-visible",true);
        navToggle.setAttribute("aria-expanded",true);
    }
    else if (visible === "true"){
        nav.setAttribute("data-visible",false);
        navToggle.setAttribute("aria-expanded",false);

    }

})



