const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
});

const btn = document.getElementById("btn-generos");
const menu = document.getElementById("menu-generos");

btn.addEventListener("click", () => {
  menu.style.display =
    menu.style.display === "flex" ? "none" : "flex";
});

const slides = document.querySelectorAll(".slide")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let index = 0

function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"))
  slides[i].classList.add("active")
}

next.addEventListener("click", () => {
  index++
  if (index >= slides.length) index = 0
  mostrarSlide(index)
})

prev.addEventListener("click", () => {
  index--
  if (index < 0) index = slides.length - 1
  mostrarSlide(index)
})


