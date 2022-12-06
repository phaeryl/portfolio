function loadHtmlContent(page) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("container").innerHTML = this.responseText;
  }
  xhttp.open("GET", page + ".html");
  xhttp.send();
  toggleNavbarClass(page)

}

function toggleNavbarClass(page)
{
  let navbar = document.querySelectorAll("nav .container-link a");
  for (let i = 0; i < navbar.length; i++)
  {
    switch (page) {
      case "landing":
        navbar[i].classList.remove("active");
        navbar[0].classList.add("active");
        break;

      case "projects":
        navbar[i].classList.remove("active");
        navbar[1].classList.add("active");
        break;

      case "about":
        navbar[i].classList.remove("active");
        navbar[2].classList.add("active");
      break;

      default:
        break;
    }
  }
}