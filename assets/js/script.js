const busca_icon = document.getElementById("busca_icon");
const busca_input = document.getElementById("busca_input");
var logo = document.getElementById("logo");

busca_icon.addEventListener("click", function() {
    busca_input.focus();
});

logo.addEventListener("click", function() {
    window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function ()
{
    var currentPage = window.location.href;
    var menuLinks = document.querySelectorAll(".menu a");

    for (var i = 0; i < menuLinks.length; i++)
    {
      var link = menuLinks[i];

      if (link.href === currentPage)
      {
        link.classList.add("active");
      }
      else
      {
        link.classList.remove("active");
      }
    }
});