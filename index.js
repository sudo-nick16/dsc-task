const carouselSlide = document.querySelector('.carousel-slide');
const cards = document.querySelectorAll('.card');

const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');
const circles = document.querySelectorAll('.circle');

let counter = 0;
const size = cards[0].getBoundingClientRect().width;
// const size = 350;
console.log(size)

// carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px';
console.log(circles)
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    circles[counter].classList.toggle('circle-selected')
    cards[counter].classList.toggle('hover');
    counter++;
    console.log(counter)
    if(counter >= cards.length ){
        counter = 0;
        // carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * (counter)) +'px';
    }else{
        carouselSlide.style.transform = 'translateX(' + (-size * (counter)) +'px';
    }
    circles[counter].classList.toggle('circle-selected')
    cards[counter].classList.toggle('hover');
})

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    circles[counter].classList.toggle('circle-selected')
    cards[counter].classList.toggle('hover');
    counter--;
    console.log(counter)
    if(counter < 0){
        counter = circles.length-1;   
        // carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * (counter)) +'px';
    }else{
        carouselSlide.style.transform = 'translateX(' + (-size * (counter)) +'px';
    }
    circles[counter].classList.toggle('circle-selected')
    cards[counter].classList.toggle('hover');
})

// adding dark-mode

const darkModeBtn = document.querySelector('.dark-mode-btn');
const all = document.querySelector('body')

darkModeBtn.addEventListener('click', ()=>{
    all.classList.toggle('dark');
    darkModeBtn.classList.toggle('active');
})

// (15*365)/3600 = 

