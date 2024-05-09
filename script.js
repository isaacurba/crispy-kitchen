let slideIndex = 0
const slides = document.getElementsByClassName("slide")


const hide = () =>{
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
}

const showSlides = () =>{
    hide()

    slideIndex++
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 2000)
}

const changeSlide = (n) =>{
    slideIndex +=n
    if(slideIndex > slides.length){
        slideIndex = 1
    }else if(slides.length < 1){
        slideIndex = slides.length
    }
    hide()
    slides[slideIndex - 1].style.display = "block"
}

showSlides()


// let mToggle = document.getElementById("menu-toggle")
// let menu = document.getElementById("menu")
// const slides = document.getElementsByClassName("slide")


// // code for hammbugger
// const change = () => {
//     menu.classList.toggle("active")
// }
// mToggle.addEventListener("click", change)



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").classList.add("show");
    } else {
        document.getElementById("scrollToTopBtn").classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// const burger = document.querySelector('.burger');
// const navLinks= document.querySelector('.menu');

// burger.addEventListener('click',() => {
//     navLinks.classList.toggle('nav-active');
// })

const toggle = document.getElementById('menu-toggle1');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('a')

toggle.addEventListener('click', function(){
    // alert('working')
    toggle.classList.toggle('activeB')
    menu.classList.toggle('active')
})

links.forEach((link) => {

    link.addEventListener('click', () => {
        if(menu.classList.contains('active')){
            menu.classList.toggle('active');
            toggle.classList.toggle('activeB');

        }
    })
 }
    
)
