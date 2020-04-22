let startAn = (animateClass, sliderBar, sliderWhiteLine, activeIndex, allCounter) => {
    let gsap     = require("gsap/dist/gsap").gsap;
    let timeline = gsap.timeline(); 
    let barHeight;
    
    if(screen.width <= 3200) {
        if(screen.width <= 2600) {
            if(screen.width <= 1800) {
                if(screen.width <= 1024){
                    barHeight = 120;
                }
                else{
                    barHeight = 150;
                }
            }
            else{
                barHeight = 200;
            }
        }
        else{
            barHeight = 300;
        }
    }
    else{
        barHeight = 400;
    }


    timeline.fromTo(animateClass, {
        y: 20,
        opacity: 0,
    }, {
       y: 0,
       opacity: 1,
       delay: .3,
       duration: .6,
    }).to(sliderBar, {
        duration: .3,
        height: barHeight
    }, '-=.3').to(sliderWhiteLine, {
        height: '25%',
        duration: .3
    }).fromTo(activeIndex, {
        opacity: 0,
        y: 20 
    }, {
        opacity: 1,
        y:0, 
        duration: .3 
    }, '-=0').fromTo(allCounter, {
        opacity: 0,
        y: -20 
    }, {
        opacity: 1,
        y:0, 
        duration:.3 
    },  '-=.4');
};

module.exports = startAn;
