/* sticky menu */

window.onscroll = function() { stickMenu() };

var navbar = document.getElementById("home");
var logoicon = document.getElementById("logoicon");
var logosignature = document.getElementById("logosignature");
var burgerinput = document.getElementById("burger");
var stickyposition = navbar.offsetTop;

function stickMenu() {
  if (window.pageYOffset >= stickyposition) {
    navbar.classList.add("sticky")
    logoicon.classList.replace("logo-icon", "logo-icon-shrunken");
    logosignature.classList.replace("logo-signature", "logo-signature-shrunken");
    burgerinput.checked = false;
  } else {
    navbar.classList.remove("sticky");
    logoicon.classList.replace("logo-icon-shrunken", "logo-icon");
    logosignature.classList.replace("logo-signature-shrunken", "logo-signature");
  }
}

/* accordian faq */

const btns = document.querySelectorAll(".faq-arrow");

function accordion() {
  this.classList.toggle("active");
  const content = this.nextElementSibling;
  if (content.style.maxHeight) 
    content.style.maxHeight = null;
  else 
    content.style.maxHeight = content.scrollHeight + "px";
}
btns.forEach((el) => el.addEventListener("click", accordion));

/* reveal section */

function reveal() {
  var reveals = document.querySelectorAll(".reveal")
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
  
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("visible");
    } else {
      reveals[i].classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

