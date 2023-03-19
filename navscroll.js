// detection de l'event de scroll

window.onscroll = function () {

    const printnav = () => {
        navbottom.style.transition = "all 0.2s ease-out 0s";
        navbottom.style.display = "initial";
    }

    navbottom = document.getElementById("nav-bottom");
    navbottom.style.transition = "all 0.2s ease-out 0s";
    setTimeout(() => {
        if (window.pageYOffset > 10) {
            navbottom.style.opacity = "0";
            setTimeout(() => {
                navbottom.style.display = "none";
            }, 200);
        } else if (window.pageYOffset < 50) {
            navbottom.style.opacity = "1";
            navbottom.style.transition = "all 0.2s ease-out 0s";
            navbottom.style.display = "initial";
            navbottom.style.boxShadow = "0 1em 2em red";
            setTimeout(() => {
                navbottom.style.display = "none";
                setTimeout(() => {
                    navbottom.style.display = "initial";
                    navbottom.style.boxShadow = "0 1em 2em blue";
                }, 200);
            }, 50);
        }
    }, 200);

    if (navbottom.style.display == "1") {
        navbottom.style.transition = "all 0.2s ease-out 0s";
        navbottom.style.display = "initial";
    }
};