// DOM-ELEMENTS

const menuBurger = document.querySelector('.burger')
const mobileWrapper = document.querySelector('.mobile-wrapper')
const closeIcon = document.querySelector('.close-img')
const slider = document.querySelector('.slider')

// DOM-ELEMENTS-END

const sliderBase = [
  {
    img: './assets/img/project-img2.png',
    route: '/'
  },
  {
    img: './assets/img/project-img3.png',
    route: '/'
  },
  {
    img: './assets/img/project-img4.png',
    route: '/'
  },
  {
    img: './assets/img/project-img5.png',
    route: '/'
  },
  {
    img: './assets/img/project-img6.png',
    route: '/'
  },
  {
    img: './assets/img/project-img1.png',
    route: '/'
  },
  {
    img: './assets/img/project-img7.png',
    route: '/'
  },
]

window.addEventListener('load', () => {
  sliderCardsTemplate(sliderBase)
})

const sliderCardsTemplate = sliderBase => {
  const template = sliderBase.map(item => {
    return `
        <a href="${item.route}">
          <div class="project-block">
            <img src="${item.img}" alt="">
          </div>
        </a>
    `
  }).join('')

  slider.innerHTML = template
}

menuBurger.addEventListener('click', e => {
  e.preventDefault()

  mobileWrapper.classList.toggle('active')

})

closeIcon.addEventListener('click', e => {
  e.preventDefault()
  mobileWrapper.classList.remove('active')
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3",
  spaceBetween: 20,
  breakpoints: {
    '320': {
      slidesPerView: 1,
    },
    '450': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 3,
    },
  },
});
