//css import

import './assets/css/main.css';
import './assets/css/media/mainUiMedia.css';
import './assets/css/media/sliderMedia.css';

import './assets/css/about.css';
import './assets/css/media/aboutMedia.css';

import './assets/css/skills.css';
import './assets/css/media/skillsMedia.css';

import './assets/css/contact.css';
import './assets/css/media/contactMedia.css';

import './assets/css/media/typewriterMedia.css';

import './assets/css/price.css';
import './assets/css/media/priceMedia.css';

import './assets/css/priceCalculator.css';
import './assets/css/media/priceCalculatorMedia.css';

//js import
import anotherModal   from './js/anotherModal';
import showUiControls from './js/AnimationsForUiControls';
import loaderAdd      from './js/loader';
import slideLogic     from './js/showSlides';
import menu           from './js/menu';
import skillsTabShow  from './js/skillsTabs';
import typewriter     from './js/hideTypewriter';
import priceCalc      from './js/priceCalculator';
import modalShow      from './js/modalWindow';

document.addEventListener('DOMContentLoaded', () => {
    new Promise((resolve, reject) => {
        loaderAdd('.loader', 'hideLoader');
        resolve();
    }).then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                typewriter('.typewriter', '.preview', '.sparrowUp', 'hideTypeWriter', 'hidePreview', 'activeShowPreviewBtn');
            }, 1000)
            resolve()
        });
    }).then(() => {
        return new Promise(resolve => {
            try{
                setTimeout(() => {
                    modalShow('.window', '.modalWrap', '.btnHideModal', '.btnChange');
                }, 8000);
            }
            catch (err){
                console.log(err);
            };

            setTimeout(() => {
                if(screen.width > 700){
                    showUiControls('.animateUi', '.Bar', '.whiteline', '.activeSlides', '.allSlidesIndex', 'nav', '.toggleBtn','.leftSide', '.rightSide', 'nav ul li')
                }
            }, 9000)
            menu('nav', '.toggleBtn', 'nav ul li', '.slide', 'activeNav', 'activeToggleBtn');
            
            resolve()
        }).then(() => {
            if(screen.width > 700){
                setTimeout(() => slideLogic('.slide', 'activeSlide', '.slideTop', '.slideBottom', '.whiteline', '.activeSlides', 'noActiveSliderBtn', 'activeSlideChild'), 10000);
            }
            
            skillsTabShow('.circle', '.tab');
            priceCalc('.btnCalc', '.calcBtnControl', 'calcSlide', '.calculatorOfPrice', 'activeCalcSlide', 'activeSlideChild','.typeOfSite','#navigation,#form,#sections,#sliders,#poup,#tabs,#radioResponse,#radioResponseNo,#radioMobile,#radioDesktop,#radioScreenOpt,#radioScreenOptNo,#animationPageOnScroll,#animationPageLoad,#animationHoverClick,#normalDesign,#SliderSiteDesign,#accordions,#BlogSite,#shopSite,#pagesLess,#pagesMore', '.priceCounter', '.scorePrice');
            anotherModal('.anotherBtn', '.anotherModal', '.titleAn', '.skillsItems', '.returnBtnAnother');
        });
    });
});