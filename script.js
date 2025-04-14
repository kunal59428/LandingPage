//pop-up
function openPopup() {
    document.getElementById("popupForm").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === document.getElementById("popupForm")) {
      closePopup();
    }
  }

//   scroll
let currentIndex = 0;
const bannerTrack = document.getElementById('bannerTrack');
const items = document.querySelectorAll('.banner-item');
const totalItems = items.length;

function moveBanner() {
  currentIndex++;
  if (currentIndex === totalItems) {
    currentIndex = 0; 
  }
  const offset = -currentIndex * 100; 
  bannerTrack.style.transform = `translateX(${offset}%)`;
}

setInterval(moveBanner, 3000);

// services

var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
  delay: 1000,          // Time between transitions (in ms)
  disableOnInteraction: false, // Keeps autoplay even after user interaction
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 2,
      },
      520: {
          slidesPerView: 3,
      },
      950: {
          slidesPerView: 5,
      },
  },
});



// Testimonial

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    autoplay: true,
    margin: 30,
    loop: true,
    dots: true,
    // nav: true,
    // navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
});


// PopUp Form

function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone || !email) {
    alert("Please fill in all fields.");
    return;
  }

  // Auto-download PDF
  const pdfUrl = "files/shakti-servo-transformers.pdf"; // Make sure this file exists
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Query_Form.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}