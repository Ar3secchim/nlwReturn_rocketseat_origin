function onScroll(){
  
  if(scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
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
  duration:700,
}).reveal(`#home,
#home img, 
#home .stats,
#services header,
#services .services-section,
#about header,
#about .content,
#contact header,
`)
