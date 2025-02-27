function toggleDropDown() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function() {
  const dropdownContainers = document.querySelectorAll(".dropdown-content-container");

  dropdownContainers.forEach(function(container) {
      container.addEventListener("click", function() {
        const content = this.nextElementSibling;
          const arrow = this.querySelector(".ri-arrow-down-wide-line");

          if (content && arrow) {
              if (content.style.display === "none" || content.style.display === "") {
                  content.style.display = "block";
                  arrow.style.transform = "rotate(180deg)";
              } else {
                  content.style.display = "none";
                  arrow.style.transform = "rotate(0deg)";
              }
          }
      });
  });
});

const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }

}

function showSlide(index) {
  
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);

}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}