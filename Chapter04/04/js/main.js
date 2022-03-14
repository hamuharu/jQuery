$(function(){
    // 
    let duration = 300;

    // aside ----------------------------------------
    let $aside = $('.page-main > aside');
    let $asideButton = $('aside').find('button')
        .on('click', function(){
            $aside.toggleClass('open');
            if($aside.hasClass('open')){
                $aside.stop(true).animate({
                    left: '-70px'
                }, duration, 'easeOutBack');
                $asideButton.find('img').attr('src', 'img/btn_close.png');
            }else{
                $aside.stop(true).animate({
                    left: '-350px'
                }, duration, 'easeInBack');
                $asideButton.find('img').attr('src', 'img/btn_open.png');
            };
        });

});

const targetElement = document.querySelectorAll(".animationTarget")

for (let i = 0; i < targetElement.length; i++) {
    const getElementDIstance = targetElement[i].getBoundingClientRect().
        top + targetElement[i].clientHeight * 0.6
    if (i === 1) {
        console,.log(getElementDIstance)
    }
    if (window.innerHeight > getElementDIstance) {
        targetElement[i].classList.add("show");
    }
}