import jump from './node_modules/jump.js/dist/jump.module.js';

const app = function(){

// burger, menu and scroll animations
const navShow = ()=> {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navA = document.querySelectorAll('.nav-links a');

    // show/hide menu + burger animation
    function hideBurger(){
        burger.addEventListener('click', ()=>{
            navLinks.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    };
    hideBurger();
    
    function showMenu(){
        navA.forEach(link=>{
            link.addEventListener('click', ()=>{
                navLinks.classList.toggle('active');
                burger.classList.toggle('toggle');
            })
        })
    }
    showMenu();

// scrolling jump.js
    const smoothScroll = ()=>{
    document.querySelector('.btnScroll').addEventListener('click', ()=>{
    jump('.about-us');
    });
    document.querySelector('#arrow-up').addEventListener('click', ()=>{
        jump('.start');
    })
    // scrolling smooth scroll
    const scroll = new SmoothScroll('.navbar a[href*="#"]',{
    speed: 800
    });
    }
smoothScroll();
};

// back to top button
const backToTop = ()=>{
    const toTopBtn = document.querySelector('#arrow-up');
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 300) toTopBtn.classList.add('active')
        else toTopBtn.classList.remove('active')
    });
}

// IMGs carousel
const slider = ()=>{
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

    nextBtn.addEventListener('click', ()=>{
        if(counter >= carouselImages.length -1) return;
        carouselSlide.style.transition = "transform .3s ease-in-out";
        counter ++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    });

    prevBtn.addEventListener('click', ()=>{
        if(counter <= 0) return;
        carouselSlide.style.transition = "transform .3s ease-in-out";
        counter --;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    });

    carouselSlide.addEventListener('transitionend', ()=>{
        if(carouselImages[counter].id === "lastClone"){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length -2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
        }
        if(carouselImages[counter].id === "firstClone"){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
        }
    })
}
navShow();
backToTop();
slider();
}

app();

