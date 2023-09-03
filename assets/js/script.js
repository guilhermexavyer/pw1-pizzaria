const busca_icon = document.getElementById("busca_icon");
const busca_input = document.getElementById("busca_input");
var logo = document.getElementById("logo");

busca_icon.addEventListener("click", function() {
    busca_input.focus();
});

logo.addEventListener("click", function() {
    window.location.href = "index.html";
});