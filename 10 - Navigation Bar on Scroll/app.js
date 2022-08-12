// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
document.getElementById('date').innerHTML = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const linksHeight = document.querySelector('.links').getBoundingClientRect().height;

navToggle.addEventListener('click', function () {
    if (!linksContainer.classList.contains('show-links')) {
        linksContainer.classList.add('show-links');
        linksContainer.style.height = linksHeight +'px';
    }else{
        linksContainer.classList.remove('show-links');
        linksContainer.style.height = 0;
    }
    
});

// ********** fixed navbar ************
const nav = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
let navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > navHeight) {
        nav.classList.add('fixed-nav');
        topLink.classList.add('show-link');
    } else {
        nav.classList.remove('fixed-nav');
        topLink.classList.remove('show-link');
    }
});


// ********** smooth scroll ************
// select links

const links = document.querySelectorAll('.scroll-link');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        navHeight = nav.getBoundingClientRect().height;
        event.preventDefault();
        let idname = this.getAttribute('href');
        idname = idname.slice(1);
        let position = document.getElementById(idname).offsetTop;
        
        if (navHeight > 82) {
            if (nav.classList.contains('fixed-nav')) {
                position = position - 82;
            }else{
                position = position - navHeight - 82 ;
            }

        }else{
            if (nav.classList.contains('fixed-nav')) {
                position = position - navHeight;
            }else{
                position = position - navHeight - 82 ;
            }
        }
        
        window.scrollTo(0,position) ;

        linksContainer.classList.remove('show-links');
        linksContainer.style.height = 0;
        
    });


});
