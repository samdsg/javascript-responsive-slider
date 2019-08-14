const images = [];

images[0] = "../images/image1.jpg";
images[1] = "../images/image2.jpg";
images[2] = "../images/image3.jpg";
images[3] = "../images/image4.jpg";
images[4] = "../images/image5.jpg";


//get all the slides for slider container 
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

//set need variable and booleans 
const auto = true;
const intervalSeconds = 6000;

//handle our slide timer
let sliderInterval;


//add background image to all the slides
slides.forEach((slide, index) => {
    slide.style.background = "url(" + images[index] + ") no-repeat center center/cover";
});


//next slide function to slide to next;

nextSlide = () => {
    //get the slide with the show class 
    const show = document.querySelector('.show');

    //remove show from the previous slide 
    show.classList.remove('show');

    //check if there is a next element 
    if (show.nextElementSibling) {
        //Add show to the next element
        show.nextElementSibling.classList.add('show');

        //get the last element that has slide strictyl 
        let last = show.nextElementSibling.classList.contains('slide');
        if (!last) {
            slides[0].classList.add('show');
        } else {
            //add show to next sibling
            show.nextElementSibling.classList.add('show');
        }
    }
    setTimeout(() => show.classList.remove('show'));
}

//slide to next if clicked 
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalSeconds);
    }
});



//slide previous to the previous slide
prevSlide = () => {
    //get the slide the show class 
    const show = document.querySelector('.show');

    //Remove show from the current slide 
    show.classList.remove('show');

    //check if we have any element a show 
    if (show.previousElementSibling) {
        //add current to the previous slide
        show.previousElementSibling.classList.add('show');
    } else {
        //add curren to the last slide at the end
        slides[slides.length - 1].classList.add('show');
    }
    setTimeout(() => show.classList.remove('show'));
}

//slide to previous  
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalSeconds);
    }
});

if (auto) {
    sliderInterval = setInterval(nextSlide, intervalSeconds);
}