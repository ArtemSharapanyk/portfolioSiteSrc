export default (slide, activeClass, topBtn, bottomBtn, sliderWhiteLine, slideIndexBar, noActiveBtn, activeSlideChild) => {
    let gsap             = require("gsap/dist/gsap").gsap;
    let slides           = document.querySelectorAll(slide);
    let slideIndex       = 0;
    let topBtnControl    = document.querySelector(topBtn);
    let bottomBtnControl = document.querySelector(bottomBtn);
    let sliderLine       = document.querySelector(sliderWhiteLine);
    let sliderTextIndex  = document.querySelector(slideIndexBar);



    let showHideSlide = (num, minus = null, bottomOrTop, menu) => {
        
        
        new Promise(resolve => {
            if(num === slides.length - 1){
                topBtnControl.classList.add(noActiveBtn);
            }
            else{
                topBtnControl.classList.remove(noActiveBtn);
            }
            
            if(num === 0) {
                bottomBtnControl.classList.add(noActiveBtn);
            }
            else{
                bottomBtnControl.classList.remove(noActiveBtn);
            }
            
            resolve();
        }).then(() => {
            return new Promise(resolve => {
                slides.forEach((item) => item.classList.remove(activeClass));
                slides[num].classList.add(activeClass);

                sliderTextIndex.innerHTML = `0${num + 1}`;


                setTimeout(() => {
                    gsap.to(sliderLine, {
                        duration: .7,
                        top: `${slideIndex * 25}%`,
                    });
                }, 1500);
                
                resolve();
            });
        }).then(() => {
            return new Promise(resolve => {
                if(minus !== null) {
                    let vars = num;
                   

                    if(bottomOrTop === 'bottom'){
                        ++vars;
                    }
                    if(bottomOrTop === 'top'){
                        --vars;
                    }

                    if(menu === '+'){
                        vars = slideIndex;
                        console.log(vars)
                    }

                    for(let i = 0; i < slides[vars].children.length; i++) {
                        if(slides[vars].children[i].classList.contains(activeSlideChild)){
                            slides[vars].children[i].classList.remove(activeSlideChild);
                            setTimeout(() => {
                                let tl = gsap.timeline({paused: true});
                                tl.fromTo(slides[vars].children[i], {
                                    y: 0,
                                    opacity: 1
                                }, {
                                    y: 20,
                                    opacity: 0,
                                    duration: 1
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
            });
            
        }).then(() => {
            for(let i = 0; i < slides[num].children.length; i++) {
                if(slides[num].children[i].classList.contains('animateEl')){
                    slides[num].children[i].classList.add(activeSlideChild);
                    setTimeout(() => {
                        let tl = gsap.timeline({paused: true});
                        tl.fromTo(slides[num].children[i], {
                            y: 20,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1
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
    showHideSlide(slideIndex);

        
    topBtnControl.addEventListener('click', () => {
        showHideSlide(++slideIndex, '-', 'top');
    });

    bottomBtnControl.addEventListener('click', () => {
        showHideSlide(--slideIndex, '-', 'bottom');
    });

    // navigation 
    let menuItems = document.querySelectorAll('nav li');

    for(let i = 0;i < slides.length ; i++) {
        menuItems[i].addEventListener('click', () => {
            new Promise(resolve => {
                showHideSlide(i, '-', null, '+');
                
                resolve();
            }).then(() => {
                setTimeout(() => {
                    slideIndex = i;
                }, 1000);
            });

        });
    }       
};    



