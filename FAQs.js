const plus = document.querySelectorAll(".plus");
const cross = document.querySelectorAll(".cross");
const hidden = document.querySelectorAll(".hidden");
const para = document.querySelectorAll(".para");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    cross[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < cross.length; i++) {
  cross[i].addEventListener("click", function () {
    cross[i].classList.toggle("hidden");
    plus[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
  });
}