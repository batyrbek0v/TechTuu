// DOM-ELEMENTS

const menuBurger = document.querySelector('.burger')
const mobileWrapper = document.querySelector('.mobile-wrapper')
const closeIcon = document.querySelector('.close-img')
const slider = document.querySelector('.team-cards-wrapper')
const socialIconsWrapper = document.querySelector('.social-icons-wrapper')

// DOM-ELEMENTS-END

const sliderBase = [
  {
    title: 'ASAN AMANOV',
    subTitle: 'CEO/FOUNDER',
    img: './assets/img/team-img1.png',
  },
  {
    title: 'AIJAN ASANOVA',
    subTitle: 'CTO',
    img: './assets/img/team-img2.png',
  },
  {
    title: 'IVAN IVANOV',
    subTitle: 'FRONTEND DEVELOPER',
    img: './assets/img/team-img3.png',
  },
]

const iconsBase = [
  {
    img: './Assets/icons/facebook.svg',
    alt: 'facebook-icon',
    route: 'telegram',
  },
  {
    img: './Assets/icons/instagram.svg',
    alt: 'instagram-icon',
    route: 'instagram',
  },
  {
    img: './Assets/icons/youtube.svg',
    alt: 'youtube-icon',
    route: 'telegram',
  },
  {
    img: './Assets/icons/telegram.svg',
    alt: 'telegram-icon',
    route: 'telegram',
  },
  {
    img: './Assets/icons/whatsapp.svg',
    alt: 'whatsapp-icon',
    route: 'telegram',
  },
]

window.addEventListener('load', () => {
  sliderCardsTemplate(sliderBase)
  iconsTemplate(iconsBase)
})

const sliderCardsTemplate = sliderBase => {
  const template = sliderBase.map(item => {
    return `
        <div class="team-card">
          <div class="card-header">
            <img src="${item.img}" alt="human-photo">
          </div>
          <div class="card-footer">
            <h2>${item.title}</h2>
            <p>${item.subTitle}</p>
        </div>
        </div>
    `
  }).join('')

  slider.innerHTML = template
}
const iconsTemplate = icon => {
  const template = icon.map(item => `<a href="${item.route}"><img src="${item.img}" alt="${item.alt}"></a>`).join('')

  socialIconsWrapper.innerHTML = template
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
