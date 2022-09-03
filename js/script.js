$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // items:2,
    margin: 40,
    padding: 20,
    nav: true,
    loop: true,
    navText: [
      '<i class="fa fa-arrow-left btn-01"></i>',
      '<i class="fa fa-arrow-right btn-02"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      // 480 : {

      // },
      // 768 : {

      // },
      992: {
        items: 2,
      },
    },
  });
});

var topButton = document.querySelector(".icon-top");
window.addEventListener("scroll", function () {
  if (this.document.documentElement.scrollTop > 250) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// Change Color Method
var rot = document.querySelector(":root");
function changeColor(color) {
  rot.style.setProperty("--main-blue-color", color);
}
var button = document.querySelector(".change");
var box = document.querySelector(".theme-box");
function showColors(){
  if(button.style.right == "-40px"){
    button.style.setProperty("right", "-280px");
    box.style.setProperty("display", "block");
  }
  else{
    button.style.setProperty("right", "-40px");
    box.style.setProperty("display", "none");
  } 
}
