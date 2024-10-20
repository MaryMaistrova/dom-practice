const btn = document.querySelector("button");
const modal = document.querySelector(".modal");
const span = document.querySelector("span");

btn.onclick = function() {
  modal.style.display = 'block'
}

span.onclick = function() {
  modal.style.display = "none";
}

span.nextElementSibling.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
