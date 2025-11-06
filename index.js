const mobileMenu = document.getElementsByClassName('menu-content')[0];
const mobileMenuOverlay = document.getElementsByClassName('overlay')[0];
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const closeIcon = document.getElementsByClassName('close-icon')[0];


hamburgerMenu.addEventListener('click', (event) => {
  event.preventDefault()
  mobileMenuOverlay.style = 'opacity: 1; visibility: visible'
  mobileMenu.style = 'opacity: 1; visibility: visible;transform: translatex(0);'
})

closeIcon.addEventListener('click', (event) => {
  mobileMenuOverlay.style = 'opacity: 0; visibility: hidden';
  mobileMenu.style = 'opacity: 0; visibility: hidden;transform: translatex(150px);'
})

function scrollAnime () {
  const sections = document.querySelectorAll('section');
  let halfScreen = window.innerHeight * .5;

  for(let section of sections) {
    let secTop = section.getBoundingClientRect().top ;
    
    if (secTop < halfScreen) {
      section.classList.add('slide-up')
    }
  }
}
window.addEventListener('scroll', scrollAnime)

scrollAnime()





