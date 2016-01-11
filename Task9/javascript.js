function makeBig(ev){
    var element = ev.target;
    element.style.width = 500 + "px";
    element.style.height = 500 + "px";
}

function makeSmall(ev){
    var element = ev.target;
        element.style.width = 100 + "px";
        element.style.height = 100 + "px";
}

var album = document.getElementById("album");
album.addEventListener("mouseover", makeBig, false);
album.addEventListener("mouseout", makeSmall, true);