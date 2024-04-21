/* Lightbox Gallery Start */

var currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
  openTab('tab1'); // Set the first tab as active by default
});

function openTab(tabId) {
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }

  var buttons = document.getElementsByClassName('tab-button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  document.getElementById(tabId).style.display = 'block';
  document.querySelector(`[onclick="openTab('${tabId}')"]`).classList.add('active');
}

function openLightbox(imageSrc) {
  document.getElementById('lightboxImage').src = imageSrc;
  document.getElementById('lightbox').style.display = 'flex';
  currentImageIndex = findImageIndex(imageSrc);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  var images = document.querySelectorAll('.gallery img');
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  document.getElementById('lightboxImage').src = images[currentImageIndex].src;
}

function findImageIndex(imageSrc) {
  var images = document.querySelectorAll('.gallery img');
  for (var i = 0; i < images.length; i++) {
    if (images[i].src === imageSrc) {
      return i;
    }
  }
  return 0;
}

document.addEventListener('keydown', function (e) {
  if (document.getElementById('lightbox').style.display === 'flex') {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  }
});


/* Lightbox Gallery End */


/* Question Captcha Start */

document.addEventListener('DOMContentLoaded', function () {
  generateQuestion();
});

function generateQuestion() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = Math.random() < 0.5 ? '+' : '-';

  var questionElement = document.getElementById('question');
  questionElement.textContent = `${num1} ${operator} ${num2} = `;

  // Store the correct answer in a data attribute
  var correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;
  questionElement.setAttribute('data-correct-answer', correctAnswer);
}

/* Question Captcha End */


/*  Certificate Lightbox Gallery Start */

let currentIndex = 0;
const images = ["https://probuztech.in/Content/assets/images/legal/COI.jpg", "https://probuztech.in/Content/assets/images/legal/PAN%20CARD.jpg", "https://probuztech.in/Content/assets/images/legal/TAN%20NO.jpg","https://probuztech.in/Content/assets/images/legal/PROBUZCERTIFICATEGST.jpg"]; 

function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementById('lightbox').style.opacity = '1';
    }, 50); 
}

function closeLightbox() {
    document.getElementById('lightbox').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('lightbox').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); 
}

function changeImage(delta) {
    currentIndex = (currentIndex + delta + images.length) % images.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    document.getElementById('lightbox-img').src = images[currentIndex];
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    }
});

/* Certificate Lightbox Gallery End */

/* Module Tab Start */
function changeTab(index) {
  // Hide all content
  var contents = document.querySelectorAll('.content');
  contents.forEach(function(content) {
    content.classList.remove('active');
  });

  // Show the selected content
  contents[index].classList.add('active');
}
/* Module Tab End */


/* Home Slider Start */

$('.home-section').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:false,
    speed: 1500,
    dots:true,
    arrows:true, 
    fade: true,
    cssEase: 'linear',
    infinite:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
   
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]

})

/* Home Slider End */

/* Clinic Management Home Slider Start */

$('.clinic-management-home-section').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:false,
  speed: 1500,
  dots:true,
  arrows:true, 
  fade: true,
  cssEase: 'linear',
  infinite:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
 
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

})

/* Clinic Management Home Slider End */


/* Payments Slider Start */

$('.payments-slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:false,
  speed: 1500,
  dots:true,
  arrows:true, 
  fade: true,
  cssEase: 'linear',
  infinite:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
 
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

})

/* Payments Slider End */

/* Updatess Slider Start */

$('.updates-slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:false,
  speed: 1500,
  dots:true,
  arrows:true, 
  fade: true,
  cssEase: 'linear',
  infinite:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
 
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

})

/* Updates Slider End */


/* OrganizationSlider Start */

$('.organization').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay:true,
    speed: 1500,
    dots:false,
    arrows:false, 
    infinite:true,
    responsive: [
   
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]

})

/* Organization Slider End */

/* OrganizationSlider Second Start */

$('.organization-second').slick({
  slidesToShow: 6,
  slidesToScroll:1,
  autoplay:true,
  speed: 1500,
  dots:false,
  arrows:false, 
  infinite:true,
  responsive: [
 
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]

})

/* Organization Second Slider End */

/* Service Slider Start */

$('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll:2,
    autoplay:false,
    speed: 2500,
    dots:true,
    arrows:true, 
    infinite:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
          breakpoint:800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true
          }
        }
      ]

})

/* Service Slider End */

/* Award Slider Start */

$('.award-slider').slick({
  slidesToShow: 2,
  slidesToScroll:1,
  autoplay:true,
  speed: 2500,
  dots:true,
  arrows:false, 
  infinite:true,
  centerMode: true,

  responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:false
        }
      }
    ]

})

/* Award Slider End */

/* Timeline Slider Start */

$('.timeline-slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:false,
  speed: 1500,
  dots:false,
  arrows:true, 
  infinite:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  responsive: [
 
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]

})

/* Timeline Slider End */

/* Award Slider Start */

$('.introduce-wire-slider').slick({
  slidesToShow: 4,
  slidesToScroll:2,
  autoplay:true,
  speed: 2500,
  dots:true,
  arrows:false, 
  infinite:true,
  centerMode: true,

  responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:false
        }
      }
    ]

})

/* Award Slider End */

/* Case Study Slider Start */

/* case study Slider Start */

$('.case-study-slider').slick({
  slidesToShow: 2,
  slidesToScroll:1,
  autoplay:false,
  speed: 1500,
  dots:false,
  arrows:true,
  centerMode: true,
  centerPadding: '30px',
  infinite:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false
      }
    }
  ]
})

/* case study Slider End */

/* case study Slider two Start */

$('.case-study-slider-two').slick({
  slidesToShow: 3,
  slidesToScroll:2,
  autoplay:true,
  speed: 2500,
  dots:true,
  arrows:true,
  infinite:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false
      }
    }
  ]
})

/* case study Slider two End */

/* it solution slider start */

$('.it-solution-slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay:false,
  speed: 1500,
  dots:true,
  arrows:false
})

/* it solution slider end */

/* Case Study Slider End */

/* Swiper JS Start */

var swiper = new Swiper( '.swiper-container.two', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows :false,
  
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  } );

/* Swiper JS End */

/* scroll to top button start */

myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}

/* scroll to top button end */



//faq

document.getElementById('question1').style.display = 'block';
document.getElementById('icon1').textContent = '-';

function toggleAnswer(id) {
    var answer = document.getElementById(id);
    var icon = document.getElementById('icon' + id.slice(-1));

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
    } else {
        answer.style.display = 'block';
        icon.textContent = '-';
    }
}


/* Counter Section Start */

$('.count').counterUp({
  delay:10,
  time:3000
})
