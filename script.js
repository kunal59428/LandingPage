
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
  delay: 1000,          
  disableOnInteraction: false,
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



// PopUp Form

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

function openPopup() {
  document.getElementById("popupForm").style.display = "block";
}


function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(result => {
    const responseDiv = document.getElementById('formResponse');
    if (result.trim() === 'success') {
      responseDiv.innerText = "Thank you! We will contact you shortly.";
      form.reset();
    } else {
      responseDiv.innerText = "Something went wrong: " + result;
    }
  })
  .catch(error => {
    document.getElementById('formResponse').innerText = "Error submitting form.";
    console.error('Error:', error);
  });

  return false;
}




