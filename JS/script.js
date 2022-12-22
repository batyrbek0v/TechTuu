// DOM-ELEMENTS

const menuBurger = document.querySelector('.burger')
const mobileWrapper = document.querySelector('.mobile-wrapper')
const closeIcon = document.querySelector('.close-img')

// DOM-ELEMENTS-END

menuBurger.addEventListener('click', e => {
  e.preventDefault()

  mobileWrapper.classList.toggle('active')

})

closeIcon.addEventListener('click', e => {
  e.preventDefault()
  mobileWrapper.classList.remove('active')
})
