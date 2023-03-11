function NavBarOpenClose() {
  var x = document.getElementById("main-page-navbar-buttons");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}