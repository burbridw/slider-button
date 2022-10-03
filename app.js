const slider = document.querySelector(".slider")

slider.addEventListener("click",function() {
    if ( !slider.classList.contains("move") ) {
    slider.classList.add("move")
    } else {
        slider.classList.remove("move")
    }
})