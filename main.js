// add event listeners page all
window.addEventListener('scroll', onScroll);

onScroll()
function onScroll(){
  showNavOnScroll()
  showBackTopButtonOnScroll()
}

function showNavOnScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackTopButtonOnScroll(){
  if(scrollY > 500){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add("menu-expanded")
}

function closeMenu(){
  document.body.classList.remove("menu-expanded")
}

// Start LIB
ScrollReveal({
  origin:'top',
  distance: '50px',
  duration:800,
}).reveal(`#home,
  #home img, 
  #home .stats,
  #services header,
  #services .services-section,
  #about header,
  #about .content,
  #contact header
`)
