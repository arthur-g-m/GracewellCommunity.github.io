/*
The JaveScript code in this file affects all the web pages
Make changes to it when necessary
*/
document.addEventListener("DOMContentLoaded", function () {
  // Fade in all center panels in the header
  const centerPanels = document.querySelectorAll(".center-panel");
  const backButtons = document.querySelectorAll(".back_btn");

  centerPanels.forEach(function (panel) {
    panel.style.opacity = "0";
    setTimeout(function () {
      panel.style.transition = "opacity 1.2s";
      panel.style.opacity = "1";
    }, 500);
  });

  backButtons.forEach(function (panel) {
    panel.style.opacity = "0";
    setTimeout(function () {
      panel.style.transition = "opacity 1.2s";
      panel.style.opacity = "1";
    }, 500);
  });

  // Slide up and fade in the header image and content section
  const headerImage = document.querySelector(".header-image");
  const contentSection = document.querySelector(".content-section");

  setTimeout(function () {
    headerImage.style.opacity = "1";
    headerImage.style.transform = "translateY(0)";

    contentSection.style.opacity = "1";
    contentSection.style.transform = "translateY(0)";
  }, 500);
});

//Settings Menu and Menu for About Us section
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}