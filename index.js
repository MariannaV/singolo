const servicesSection = document.querySelector('.services');
const portfolioSection = document.querySelector('.portfolio');
const aboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.form-section.contacts');

/********SCROLL ELEMENTS: START********/

function scrollElement(scrollTo) {
    scrollTo.scrollIntoView({block: "start", behavior: "smooth"});
}
/********SCROLL ELEMENTS: END********/



/********TOGGLE: START********/

function toggleClasses(event) {
    event.stopPropagation();
    const {currentTarget: container, target: activeEl} = event;
    if (container.querySelector('.active')) {
        container.querySelector('.active').classList.remove('active');
    }
    activeEl.classList.toggle('active');
}

function toggleButtons(event) {
    event.stopPropagation();
    const {currentTarget: container, target: activeEl} = event;
    toggleClasses(event);
    console.log(activeEl.dataset.filter);
    container.closest('.content-section').querySelector('.portfolio-grid').dataset.filter = activeEl.dataset.filter;
}

/********TOGGLE: START********/