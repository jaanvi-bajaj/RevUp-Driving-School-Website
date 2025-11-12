// get all the elements
var mobileNav = document.getElementById('mobile-nav');
var menuBtn = document.getElementById('menu-btn');
var faqs = document.querySelectorAll('.faq-q');

// form stuff
var bookForm = document.getElementById('book-form');
var pkgSelect = document.getElementById('pkg-select');
var priceDisplay = document.getElementById('price-display');
var errorMsg = document.getElementById('error-msg');


// mobile menu toggle
function toggleMenu() {
  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'block';
  }
}

// faq click
function toggleFaq() {
  var answer = this.parentElement.querySelector('.faq-a');
  answer.classList.toggle('open');
}

// update price on form
function updatePrice() {
  var price = this.value;
  if (price) {
    priceDisplay.textContent = parseFloat(price).toLocaleString() + ' AED';
  } else {
    priceDisplay.textContent = '0.00 AED';
  }
}

// form submit
function submitBooking(event) {
  event.preventDefault(); // stop reload

  // get values
  var name = document.getElementById('firstName').value;
  var pkg = pkgSelect.value;
    
  // check
  if (name === "" || pkg === "") { 
    errorMsg.style.display = 'block';
    return; 
  }
    
  errorMsg.style.display = 'none';

  // get the package name
  var selectedOption = pkgSelect.options[pkgSelect.selectedIndex];
  var pkgName = selectedOption.getAttribute('data-name');
  
  // save info to browser
  localStorage.setItem('studentName', name);
  localStorage.setItem('packageName', pkgName);
    
  // go to confirmation page
  window.location.href = 'confirmation.html';
}


// --- Attach Listeners ---
// We check if the element exists on the page first

// For mobile menu (all pages)
if (menuBtn) {
  menuBtn.addEventListener('click', toggleMenu);
}

// For FAQs (home page only)
if (faqs.length > 0) {
  for (var i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', toggleFaq);
  }
}

// For booking form (booking page only)
if (bookForm) {
  pkgSelect.addEventListener('change', updatePrice);
  bookForm.addEventListener('submit', submitBooking);
}