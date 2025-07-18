// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Sidebar toggle functionality
  const insidetoogle = document.getElementById("thisicon");
  if (insidetoogle) {
    insidetoogle.addEventListener("click", function () {
      document.getElementById("sb").classList.toggle("a");
      document.getElementById("sa").classList.toggle("maintext");
      document.getElementById("main-content").classList.toggle("m");
      document.getElementById("maini").classList.toggle("change");

      document.querySelectorAll(".icon1").forEach((element) => {
        element.classList.toggle("tchange");
      });
      
      // Change icon direction
      const icon = this.querySelector('i');
      if (icon.classList.contains('fa-angle-left')) {
        icon.classList.remove('fa-angle-left');
        icon.classList.add('fa-angle-right');
      } else {
        icon.classList.remove('fa-angle-right');
        icon.classList.add('fa-angle-left');
      }
    });
  }

  // Mobile sidebar toggle
  const baricon = document.getElementById("mybars");
  if (baricon) {
    baricon.addEventListener("click", function () {
      document.getElementById("sb").classList.toggle("a");
      document.getElementById("main-content").classList.toggle("m");
    });
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    if (dropdowns.length > 0) {
      const isClickInsideDropdown = Array.from(dropdowns).some(dropdown => {
        return dropdown.contains(event.target) || 
               event.target.closest('.dropdown-toggle');
      });
      
      if (!isClickInsideDropdown) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('show');
        });
      }
    }
  });
  
  // Add active class to current nav item
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll('.sidebar a');
  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation) {
      item.classList.add('active');
      item.closest('.list-group-item').classList.add('active-item');
    }
  });
});
