const toggleMenu = document.querySelector('.toggle')
const Section = document.querySelector('section')
const Glass = document.querySelector('.glass')

const About = document.querySelector('.about')
About.addEventListener('click', () => {
    Section.classList.toggle('toggle--active')
    Glass.classList.toggle('toggle--active')
    About.classList.toggle('toggle--active')
})

const Tour = document.querySelector('.tour')
Tour.addEventListener('click', () => {
    Section.classList.toggle('toggle--active--tour')
    Glass.classList.toggle('toggle--active--tour')
    Tour.classList.toggle('toggle--active--tour')
})

const Home = document.querySelector('.home')
Home.addEventListener('click', () => {
    Section.classList.remove('toggle--active')
    Section.classList.remove('toggle--active--tour')
    Glass.classList.remove('toggle--active')
    Glass.classList.remove('toggle--active--tour')
    Tour.classList.remove('toggle--active--tour')
    About.classList.remove('toggle--active')
})