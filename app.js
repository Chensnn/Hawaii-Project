let header = document.querySelector("header");
let headerH1 = document.querySelector("header div.logo h1");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style = "background-color:rgba(1, 89, 88,0.5);";
    headerH1.style = "color:white;";
    headerAnchor.forEach((a) => {
      a.style = "color:white;";
    });
  } else {
    header.style = "";
    headerH1.style = "";
    headerAnchor.forEach((a) => {
      a.style = "";
    });
  }
});
