export default (btn, modal, title, skillsBlocks, returnBtn) => {
    let timeline         = require("gsap/dist/gsap").gsap.timeline({paused: true});
    let anotherBtnStart  = document.querySelector(btn);
    let modalWindow      = document.querySelector(modal);
    let anotherBtnReturn = document.querySelector(returnBtn); 

    timeline.to(modalWindow, {
        width: '100%', 
        duration: .8
    }).fromTo(title, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: .5,
    }, '+=.1').fromTo(skillsBlocks, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: .5,
        stagger: .2
    }, '+=.2').fromTo(returnBtn, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: .5,
    });

    anotherBtnStart.addEventListener('click', () => {
        modalWindow.classList.add('activeAnotherModal');
        timeline.play();
    });

    anotherBtnReturn.addEventListener('click', () => {
        modalWindow.classList.remove('activeAnotherModal');
        timeline.reverse();
    });


};