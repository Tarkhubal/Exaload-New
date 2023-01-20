window.onload = function () {
    loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.transition = "all 0.5s ease-in-out";
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000);
};