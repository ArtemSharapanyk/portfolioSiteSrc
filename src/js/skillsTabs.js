export default (els, tabs) => {
    let gsap     = require("gsap/dist/gsap").gsap;

    let clickedEls = document.querySelectorAll(els);
    let tab        = document.querySelectorAll(tabs);

    let heigthOfTab = '20%';


    let activeEls = 0;
    
    
    for(let i = 0; i < clickedEls.length; i++) {


        clickedEls[i].addEventListener('click', () => {
            
            if(clickedEls[i].classList.contains('activeSkill')){
                activeEls = 0;

                clickedEls[i].classList.remove('activeSkill');

                gsap.fromTo(tab[i],{
                    height: heigthOfTab
                }, {
                    duration: .4,
                    height: 0
                });

            }
            else{
                new Promise(resolve => {
                    ++activeEls;
                    
                    resolve()
                }).then(() => {
                    if(activeEls == 1) {
                        clickedEls[i].classList.add('activeSkill');
    
                        gsap.fromTo(tab[i],{
                            height: 0
                        }, {
                            duration: .4,
                            height: heigthOfTab
                        });
                    }
                });
            }
        });
    }
  
};
