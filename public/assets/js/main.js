// JS Library 1: glider.js
window.addEventListener("load", function () {
    // First Glider (Top Destinations)
    new Glider(document.querySelector('.glider'), {
        slidesToShow: window.innerWidth <= 360 ? 1 : 2, 
        slidesToScroll: 1,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    // Second Glider (Favorite Stay) - Show 5 slides
    new Glider(document.querySelector('.glider-2'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.glider-2-prev',
            next: '.glider-2-next'
        }
    });

    // Reinitialize on window resize (optional)
    window.addEventListener('resize', function () {
        document.querySelector('.glider').innerHTML = document.querySelector('.glider').innerHTML;
        document.querySelector('.glider-2').innerHTML = document.querySelector('.glider-2').innerHTML;
        
        new Glider(document.querySelector('.glider'), {
            slidesToShow: window.innerWidth <= 360 ? 1 : 2,
            slidesToScroll: 1,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });

        new Glider(document.querySelector('.glider-2'), {
            slidesToShow: 5,
            slidesToScroll: 1,
            draggable: true,
            arrows: {
                prev: '.glider-2-prev',
                next: '.glider-2-next'
            }
        });
    });
});

// JS Library 2: AOS, Animate on scroll library
AOS.init();
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease in', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});

// JS Library 3: GSAP Text
gsap.defaults({ease: "none"});

const tl = gsap.timeline({repeat:10, repeatDelay:1, yoyo:false});
tl.to("h1 span", {duration: 2.5, text:"Passion"});
tl.to("h1 span", {duration: 1, text:""});
tl.to("h1 span", {duration: 2.5, text:"Luxury"});
tl.to("h1 span", {duration: 1, text:""});
tl.to("h1 span", {duration: 2.5, text:"Comfort"});
tl.to("h1 span", {duration: 1, text:""});
tl.to("h1 span", {duration: 2.5, text:"Freedom"});
tl.to("h1 span", {duration: 1, text:""});
tl.to("h1 span", {duration: 2.5, text:"Ambition"});
tl.to("h1 span", {duration: 1, text:""});
tl.to("h1 span", {duration: 2.5, text:"Excitement"});
tl.to("h1 span", {duration: 2, text:""});
tl.to("h1 span", {duration: 2.5, text:"Possibilities"});
tl.to("h1 span", {duration: 2, text:""});

// JS Library 4: Cleaver.js
document.addEventListener("DOMContentLoaded", function () {
    new Cleave("#departure-date", {
        date: true,
        delimiter: "-",
        datePattern: ["Y", "m", "d"]
    });

    new Cleave("#return-date", {
        date: true,
        delimiter: "-",
        datePattern: ["Y", "m", "d"]
    });
});
