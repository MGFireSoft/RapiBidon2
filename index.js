(function loadNavBar() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("topnav").innerHTML = this.responseText;
  };
  xhttp.open("GET", "/rapibidon2/topnav.html");
  xhttp.send();
})();
