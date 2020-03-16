const servicesSection = document.querySelector('.services');
const portfolioSection = document.querySelector('.portfolio');
const aboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.form-section.contacts');

/********SCROLL ELEMENTS: START********/

function scrollElement(scrollTo) {
    scrollTo.scrollIntoView({block: "start", behavior: "smooth"});
}
/********SCROLL ELEMENTS: END********/