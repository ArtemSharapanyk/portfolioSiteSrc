export default (typeWriter, prev, btn, hiddenClassTypeWriter, hiddenPreviewClass, activePreviwBtn) => {
    let typewriter = document.querySelector(typeWriter);
    let preview    = document.querySelector(prev);

    let showOrHidePreviewAndTypywriter = (show = null, ms) => {
        if(show === null){
            setTimeout(() => {
                typewriter.classList.add(hiddenClassTypeWriter);

                setTimeout(() => {
                    typewriter.style.display = 'none';
                }, 4000);
            }, ms);
               
            setTimeout(() => {
                preview.classList.add(hiddenPreviewClass);
            }, ms + 4000);
        }
        else{
            setTimeout(() => {
                preview.classList.remove(hiddenPreviewClass);
            }, 1000);
            setTimeout(() => {
                typewriter.classList.remove(hiddenClassTypeWriter);
                typewriter.style.display = 'block';
                
            }, 400);
        }
    };

    showOrHidePreviewAndTypywriter(null, 4000);

    let returnBtn = document.querySelector(btn);

    returnBtn.addEventListener('click', () => {
        if(returnBtn.classList.contains(activePreviwBtn)){
            returnBtn.classList.remove(activePreviwBtn);
            showOrHidePreviewAndTypywriter(null, 0);
        }
        else{
            returnBtn.classList.add('activeShowPreviewBtn')
            showOrHidePreviewAndTypywriter('sff');
        }
    });
};
