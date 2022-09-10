// Start owl-carousel
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
// End owl-carousel
// Display Of Icon While Scrolling 
var topButton = document.querySelector(".icon-top");
window.addEventListener("scroll", function () {
  if (this.document.documentElement.scrollTop > 250) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});
// Smooth To Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// Start Change Color Method
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
// End Change Color Method
// Scrolling Progress
const scrollProgressElement = document.getElementById("scroll-progress");
      function scrollProgress() {
        const totalHeightofWebPage = document.body.scrollHeight;
        const currentDistanceFromTop = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.clientHeight;
        const scrollPercentage = (currentDistanceFromTop / (totalHeightofWebPage - windowHeight)) * 100;
        scrollProgressElement.style.width= Math.round(scrollPercentage) + '%';
        // console.log(totalHeightofWebPage)
        // console.log(currentDistanceFromTop)
        // console.log(windowHeight)
        // console.log(scrollPercentage)
        // console.log(Math.round(scrollPercentage))
        // console.log("---------------")
      }
document.addEventListener("scroll", scrollProgress);
// Scrolling Progress
// Counter 
const numbers =document.querySelectorAll(".number");
      numbers.forEach((num)=>{
        const incrementCounter = ()=> {
          const targetNumber = num.getAttribute('data-target-number');
          const currentNumber = parseInt(num.innerText);
          // console.log(targetNumber);
          // console.log(currentNumber);
          if(currentNumber < targetNumber){
            num.innerText = Math.floor(currentNumber + targetNumber / 10);
            setTimeout(incrementCounter , 100);
          }
          else{
            num.innerText = targetNumber;
          }
        };
        incrementCounter();
      });
// Counter 
