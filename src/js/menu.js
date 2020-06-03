export default (Menu, menuBtn, menuItems, slides, activeMenuClass, toggleBtnClass) => {
    let gsap     = require("gsap/dist/gsap").gsap;
    
    let tl                = gsap.timeline({paused: true});
    let menu              = document.querySelector(Menu);
    let burgBtn           = document.querySelector(menuBtn);
    let menuItemsControls = document.querySelectorAll(menuItems);
    let timeOfAnimation;
    let slide             = document.querySelectorAll(slides);
    let menuItemsA        = document.querySelectorAll(`${menuItems} a`);

    if(screen.width > 400){
        timeOfAnimation = 1.5;
    }
    else{
        timeOfAnimation = .8
    }

    tl.to(menu, {
        height: '100%',
        duration: timeOfAnimation
    }).fromTo(menuItems, {
        opacity: 0,
        y: 40
    }, {
        opacity: 1,
        y: 0,
        duration: .7,
        stagger: .2
    });

    burgBtn.addEventListener('click', () => {
        if(menu.classList.contains(activeMenuClass)) {
            menu.classList.remove(activeMenuClass);
            tl.reverse();
            setTimeout(() => burgBtn.classList.remove(toggleBtnClass), 999);
            console.log(1)
        }
        else{
            tl.play();
            menu.classList.add('activeNav');
            setTimeout(() => burgBtn.classList.add(toggleBtnClass), 200);
        }
    });

    menuItemsControls.forEach(item => item.addEventListener('click', () => {
        tl.reverse();
        menu.classList.remove('activeNav');
        setTimeout(() => burgBtn.classList.remove(toggleBtnClass), 999);
    }));

    // mobile menu
    if(screen.width <= 700){
        
        for(let i = 0; i < slide.length; i++){
            console.log(i)
            menuItemsA[i].setAttribute('href', '#' + slide[i].id);
        }
        
        let anchors   = document.querySelectorAll('a[href*="#"]');
        
        for(let anchor of anchors) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                    let IdOfBlock = anchor.getAttribute('href');
                    document.querySelector(`${IdOfBlock}`).scrollIntoView({
                        behavior: 'auto',
                        block: 'start'
                    });
               
            });
        }
    }    
};

