import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Navbar shadow on scroll
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const navLinks = document.querySelector('.nav-links')

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    if (navLinks.classList.contains('active')) {
      mobileMenuBtn.textContent = '✕'
    } else {
      mobileMenuBtn.textContent = '☰'
    }
  })

  // Close menu when a link is clicked
  const links = navLinks.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      mobileMenuBtn.textContent = '☰'
    })
  })
}

// Reveal animations
const reveals = document.querySelectorAll('.reveal')
reveals.forEach((el, i) => {
  gsap.fromTo(el, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power3.out',
      delay: i * 0.1,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    }
  )
})

// Orb movement
gsap.to('.orb-1', {
  x: '20vw',
  y: '10vh',
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.orb-2', {
  x: '-10vw',
  y: '-20vh',
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

// Magnetic effect for buttons
const magneticBtns = document.querySelectorAll('.cta-btn')
magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  })
})
