// detection de l'event de scroll

window.onscroll = function () {

    const printnav = () => {
        navleft.style.transition = "all 0.2s ease-out 0s";
        navleft.style.display = "initial";
    }

    navleft = document.getElementById("nav-bottom");
    navleft.style.transition = "all 0.2s ease-out 0s";
    setTimeout(() => {
        if (window.pageYOffset > 10) {
            navleft.style.opacity = "0";
            setTimeout(() => {
                navleft.style.display = "none";
            }, 200);
        } else if (window.pageYOffset < 50) {
            navleft.style.opacity = "1";
            navleft.style.transition = "all 0.2s ease-out 0s";
            navleft.style.display = "initial";
            setTimeout(() => {
                navleft.style.display = "none";
                setTimeout(() => {
                    navleft.style.display = "initial";
                    navleft.style.boxShadow = "none";
                }, 200);
            }, 50);
        }
    }, 200);

    if (navleft.style.display == "1") {
        navleft.style.transition = "all 0.2s ease-out 0s";
        navleft.style.display = "initial";
    }
};