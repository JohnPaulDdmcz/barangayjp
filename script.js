const popup = document.getElementById('newsletterPopup');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('nav ul');
const closeButton = document.querySelector('.popup .close'); // Select the close button

// Show the popup after 5 seconds
setTimeout(() => {
    popup.classList.add("show"); // Add class to show popup after 5 seconds
}, 5000); // 5000 milliseconds = 5 seconds

// Close the popup if user clicks outside the popup content
window.addEventListener("click", (event) => {
    if (event.target == popup) {
        popup.classList.remove("show"); // Remove class to hide popup
    }
});

// Close the popup when the close button is clicked
closeButton.addEventListener('click', () => {
    popup.classList.remove("show"); // Remove class to hide popup
});

// Toggle the mobile menu
menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active'); // Toggle active class for nav menu
});

// Additional functionality: Close the mobile menu when a menu item is clicked
navMenu.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active'); // Remove active class for nav menu
});

// Additional functionality: Keyboard accessibility for closing the popup
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.classList.contains('show')) {
        popup.classList.remove('show'); // Remove class to hide popup
    }
});
