function loadHtmlContent(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

      document.getElementById("container").innerHTML =
      this.responseText;
      console.log(this.responseText)

    }
    xhttp.open("GET", page + ".html");
    xhttp.send();
  }



