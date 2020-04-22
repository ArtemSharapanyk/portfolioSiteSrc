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

document.addEventListener('DOMContentLoaded', () => {
    let showUiControls = require('./js/AnimationsForUiControls');
    let loaderAdd      = require('./js/loader'); 
    let slideLogic     = require('./js/showSlides');
    let menu           = require('./js/menu');
    let skillsTabShow  = require('./js/skillsTabs');
    let typewriter     = require('./js/hideTypewriter');
    let priceCalc      = require('./js/priceCalculator');
    let modalShow      = require('./js/modalWindow');

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
            priceCalc('.btnCalc', '.calcBtnControl', 'calcSlide', '.calculatorOfPrice', 'activeCalcSlide', 'activeSlideChild','.typeOfSite','#navigation,#form,#sections,#sliders,#poup,#tabs,#radioResponse,#radioResponseNo,#radioMobile,#radioDesktop,#radioScreenOpt,#radioScreenOptNo,#animationPageOnScroll,#animationPageLoad,#animationHoverClick,#normalDesign,#SliderSiteDesign,#accordions', '.priceCounter', '.scorePrice');
        });
    });
});