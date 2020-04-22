let showModal = (modal, wrapOfModal, btn, btnChangeLang) => {
    let modalW    = document.querySelector(modal);
    let wrap      = document.querySelector(wrapOfModal);
    let gsap      = require("gsap/dist/gsap").gsap;
    let btnNo     = document.querySelector(btn);
    let btnChange = document.querySelector(btnChangeLang);

    let showHideModalAnimation = gsap.timeline({paused: true});

    showHideModalAnimation.to(wrapOfModal, {
        height: '100vh',
        duration: 1.3,
    }).fromTo(modal, {
        opacity: 0,
        y: -40,
    }, {
        opacity: 1,
        y: 0,
        duration: .5
    }, '-=.4');

    if(!localStorage.getItem('modal')){
        showHideModalAnimation.play();
    }

    btnNo.addEventListener('click', () => {
        showHideModalAnimation.reverse();
        localStorage.setItem('modal', true)
    });
};

module.exports = showModal;