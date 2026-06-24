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
          const arrow = this.querySelector(".dropdown-arrow");

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

// Contact FORM CODE

const inputs = document.querySelectorAll('.form-input');

inputs.forEach(input => {
  const group = input.closest('.input-group');

  input.addEventListener('focus', () => {
    group.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      group.classList.remove('active');
    }
  });

  // Keep label floated if field already has a value on page load
  if (input.value.trim() !== '') {
    group.classList.add('active');
  }
});

// YEAR SECTION UPDATES AUTOMATICALLY

document.getElementById("year").textContent = new Date().getFullYear();