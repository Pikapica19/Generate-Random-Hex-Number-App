const number = document.querySelector(".count");
const btn = document.querySelector(".generate");

const hex = () => {
  const randomhex = Math.random().toString(16).substring(2 , 8);
  document.body.style.background = "#" + randomhex;
  number.innerHTML = "#" + randomhex;
}

btn.addEventListener("click", hex);