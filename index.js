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


/********SLIDER: START********/

const sliders = {};

function handleNavigationButtons(button, {isNextButton, isPrevButton} = {}) {
    const slider = button.closest('.slider'),
        slidesContainer = slider.querySelector('.slides-container'),
        slidesWidth = slidesContainer.children[1].offsetWidth,
        slidesGap = +getComputedStyle(slidesContainer).getPropertyValue('--horizontal-gap');

    if (!(slider.id in sliders))
        sliders[slider.id] = {
            currentSlideIndex: 1,
            buttonPrev: slider.querySelector('.slider-nav-prev'),
            buttonNext: slider.querySelector('.slider-nav-next')
        };

    let {currentSlideIndex} = sliders[slider.id];

    const isNeedWillMove = () => {
        switch (true) {
            case isNextButton:
                return currentSlideIndex < slidesContainer.children.length - 2;
            case isPrevButton:
                return currentSlideIndex > 1;
            default:
                throw new Error('Некорректный тип кнопки');
        }
    };

    if (isNeedWillMove()) {
        if (isNextButton)
            currentSlideIndex++;
        else if (isPrevButton)
            currentSlideIndex--;

        slidesContainer.scrollLeft = (slidesWidth + slidesGap) * currentSlideIndex;
    } else {
        slidesContainer.classList.add('showFake');
        slidesContainer.classList.add('disableSmooth');

        if (isNextButton) {
            slidesContainer.scrollLeft = 0;
            slidesContainer.classList.remove('disableSmooth');
            currentSlideIndex = 1;
        } else if (isPrevButton) {
            slidesContainer.scrollLeft = (slidesWidth + slidesGap) * (slidesContainer.children.length - 1);
            slidesContainer.classList.remove('disableSmooth');
            currentSlideIndex = slidesContainer.children.length - 2;
        }

        slidesContainer.scrollLeft = (slidesWidth + slidesGap) * currentSlideIndex;
    }

    sliders[slider.id].currentSlideIndex = currentSlideIndex;
}

/********SLIDER: END********/



/********PHONE SCREENS: START********/


function addClasses(el) {
    el.nextElementSibling.classList.toggle('active');
}

/********PHONE SCREENS: END********/
