export default (startBtn, slideBtn, slide, slider, activeSlideClass, activeSlideChilds, select, priceElements, priceIndex, scoreBtn ) => {
    let startCalcBtn        = document.querySelector(startBtn);
    let slideBtnMove        = document.querySelectorAll(slideBtn);
    let sliderCalc          = document.querySelector(slider);
    let gsap                = require("gsap/dist/gsap").gsap; 
    let slideIndex          = 0;
    let showSliderCalc = gsap.timeline({paused: true});

    showSliderCalc.to(sliderCalc, {
        width: '100%',
        duration: .7
    });
    
    
    let showSlide = (num, minus = null) => {
    let slides = document.querySelectorAll(`.${slide}`);

    new Promise(resolve => {
        slides.forEach(item => item.classList.remove(activeSlideClass))
        slides[num].classList.add(activeSlideClass);

        resolve()
    }).then(() => {
        return new Promise(resolve => {
            if(minus !== null) {
                let vars = num;
                    
                --vars;
                    
                 for(let i = 0; i < slides[vars].children.length; i++) {
                    if(slides[vars].children[i].classList.contains(activeSlideChilds)){
                        slides[vars].children[i].classList.remove(activeSlideChilds);
                        setTimeout(() => {
                            let tl = gsap.timeline({paused: true});
                                    
                            tl.fromTo(slides[vars].children[i], {
                                y: 0,
                                opacity: 1
                            }, {
                                y: 20,
                                opacity: 0,
                                duration: .4
                            });
    
                            tl.play();
                        }, 0);
                        continue;
                    }
                    else{
                        continue;
                    }
                }
                resolve();
            }
            else{
                resolve();
            }
        })
    }).then(() => {
        for(let i = 0; i < slides[num].children.length; i++) {
            if(slides[num].children[i].classList.contains('animateEl')){
                slides[num].children[i].classList.add(activeSlideChilds);
                setTimeout(() => {
                    let tl = gsap.timeline({paused: true});
                            
                    tl.fromTo(slides[num].children[i], {
                        y: 20,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: .4,
                    });

                    tl.play();
                }, 1000);
                continue;
            }
            else{
                continue;
            }
        }
     });
    };

    let showSpecialSlides = () => {
        let selectTypeOfWebsite = document.querySelector(select);

        if(slideIndex == 2){
            let value              = selectTypeOfWebsite.value;
            let optionValue        = selectTypeOfWebsite.querySelectorAll('option');
            
            if(value == 'none'){
                alert('You didnt selected any element, it can make some problems with price building, please reload page!!')
            }else{
                document.querySelector(`.${value}Slide`).classList.add(slide);
            }

            //set price to types of websites 

            if(value === 'landing'){
                dataOfPrice.landing = 10
            }
            
            if(value === 'wpSite'){
                dataOfPrice.wpSite  = 20 
            }
            
            if(value === 'multipleSite'){
                dataOfPrice.multiple = 15
            }

            // change data of price object
            optionValue.forEach(item => {
                if(item.value === value){
                    dataOfPrice.selectValue = item.innerHTML;
                }
            });
        }

        if(slideIndex == 3){
            let checkboxAnimations = document.querySelector('#animations');
            
            if(checkboxAnimations.checked){
                let hideSlide = document.querySelector('.animations');
                hideSlide.classList.add(slide);

                // change data of price object
                dataOfPrice.animationPageOnScroll = 5;
                dataOfPrice.animationPageLoad = 7;
                dataOfPrice.animationHoverClick =  2;
            }
            
            let sections = document.querySelector('#sections');

            if(+sections.value > 5){
                dataOfPrice.sections = 5
            }
        }

        //set price to types of sites


    };

    startCalcBtn.addEventListener('click', () => {
        showSliderCalc.play();
        showSlide(slideIndex);
    });
    
    slideBtnMove.forEach((item, index) => {
        if(item !== slideBtnMove[slideBtnMove.length - 1]){
            item.addEventListener('click', () => {
                new Promise(resolve => {
                    showSlide(++slideIndex, '-');
                    resolve();
                }).then(() => {
                    showSpecialSlides();
                });
            });
        }
    });

    let dataOfPrice = {
        selectValue: undefined,
        elemetsOfWebsite: priceElements.split(',').map((item) => document.querySelector(item)), 
        showPrice: function() {
            let SelectValue  = document.querySelector('.calcSlide h2');
            let priceCounter = document.querySelector(priceIndex);
            
            let priceValue = this.elemetsOfWebsite.reduce((sum, item) => {
                if(item.checked){
                    return sum + dataOfPrice[item.getAttribute('id')] 
                }
                else{
                    return sum
                }
            }, 0);


            SelectValue.innerHTML  = this.selectValue;
            priceCounter.innerHTML = (priceValue + this.multiple + this.wpSite + this.landing) + this.sections + '$';
        },
        navigation: 5,
        form: 5,
        sliders: 5,
        sections: 0,
        poup: 2,
        tabs: 2,
        accordions: 2,
        animationPageOnScroll: 0,
        animationPageLoad: 0,
        animationHoverClick: 0,
        radioResponse: 0,
        radioResponseNo: -5,
        radioMobile: 5,
        radioDesktop: 0,
        radioScreenOpt: 5,
        radioScreenOptNo: 0,
        normalDesign: 0,
        SliderSiteDesign: 15,
        shopSite: 25,
        BlogSite: 15,
        pagesLess: 0,
        pagesMore: 15,
        landing: 0,
        wpSite: 0,
        multiple: 0 
    };

    let scorePriceBtn = document.querySelector(scoreBtn);

    scorePriceBtn.addEventListener('click', () => {
        dataOfPrice.showPrice();
    })

    setInterval(() => console.log(dataOfPrice), 10000)
    
};
