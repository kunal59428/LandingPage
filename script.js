
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

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      const resEl = document.getElementById('formResponse');
      resEl.textContent = data.msg;
      resEl.style.color = data.type === 'success' ? 'green' : 'red';

      if (data.type === 'success') {
        form.reset();

        // Auto download the PDF
        const link = document.createElement('a');
        link.href = 'files/shakti-servo-transformers.pdf'; 
        link.download = 'shakti-servo-Brochure.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
    .catch(() => {
      document.getElementById('formResponse').textContent = 'Something went wrong!';
    });

  return false;
}


