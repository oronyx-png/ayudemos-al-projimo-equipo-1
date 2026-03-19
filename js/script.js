document.addEventListener("DOMContentLoaded", function(){

/* MENU HAMBURGUESA */
window.toggleMenu = function(){
document.getElementById("menu").classList.toggle("active");
};

/* CARRUSEL */
document.querySelectorAll(".carousel").forEach(carousel=>{

let slides = carousel.querySelectorAll(".slide");
let index = 0;

function showSlide(n){
slides.forEach(s=>s.classList.remove("active"));
index = (index + n + slides.length) % slides.length;
slides[index].classList.add("active");
}

carousel.querySelector(".next").onclick = ()=>showSlide(1);
carousel.querySelector(".prev").onclick = ()=>showSlide(-1);

showSlide(0);

});

/* MODAL */
let modal = document.getElementById("modal");

if(modal){
let modalImg = document.getElementById("modal-img");

document.querySelectorAll(".gallery-grid img").forEach(img=>{
img.onclick = ()=>{
modal.style.display="block";
modalImg.src = img.src;
};
});

document.querySelector(".close").onclick = ()=>{
modal.style.display="none";
};
}

/* FORMULARIO */
let form = document.getElementById("formulario-donacion");
let mensaje = document.getElementById("mensaje-confirmacion");

if(form){
form.addEventListener("submit", e=>{
e.preventDefault();
mensaje.style.display="block";
form.reset();
});
}

});