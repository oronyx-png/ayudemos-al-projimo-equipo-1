let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(n){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slideIndex += n;

if(slideIndex >= slides.length){
slideIndex = 0;
}

if(slideIndex < 0){
slideIndex = slides.length - 1;
}

slides[slideIndex].classList.add("active");
}

function nextSlide(){
showSlide(1);
}

function prevSlide(){
showSlide(-1);
}

showSlide(0);

document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("formulario-donacion");
let mensaje = document.getElementById("mensaje-confirmacion");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

mensaje.style.display = "block";

form.reset();

});

}

});