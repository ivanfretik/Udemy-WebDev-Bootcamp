var audio= new Audio("sounds/tom-1.mp3");

document.querySelectorAll(".drum").forEach(function (boton) {
    boton.addEventListener("click", function () {
        this.style.color = "white";
    });
})