function loadHtmlContent(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("container").innerHTML =
      this.responseText;

    }
    xhttp.open("GET", page);
    xhttp.send();
  }

