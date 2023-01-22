window.onload = function () {
    loader = document.getElementById("loader");
    loaderbg = document.getElementById("loaderbg");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            loaderbg.style.opacity = "0";
            setTimeout(() => {
                loaderbg.style.display = "none";
                loadinganimation = document.getElementById("loadinganimation");
                loadinganimation.parentNode.removeChild(loadinganimation);
            }, 500);
        }, 500);
    }, 1000);
};