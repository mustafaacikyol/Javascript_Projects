const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {

    counter++;

    if (counter === slides.length) {
        counter = 0;
    }

    //If you don't want to make it carousel then you should comment above if clauses and active below if clauses.
/*
    if (counter > 0) {
        prevBtn.style.display = 'block';
    }

    if (counter === slides.length - 1) {
        nextBtn.style.display = 'none';
    }
*/
    carouselSlider();
    
});

prevBtn.addEventListener('click', function () {
    
    counter--;

    if (counter < 0) {
        counter = slides.length - 1;
    }
    //If you don't want to make it carousel then you should comment above if clauses and active below if clauses.
/*
    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block';
    }

    if (counter === 0) {
        prevBtn.style.display = 'none';
    }
*/
    carouselSlider();
   
});

function carouselSlider() {

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(${-counter * 100}%)`;
    })

};


//If you don't want to make it carousel then active below code.
//prevBtn.style.display = 'none';

