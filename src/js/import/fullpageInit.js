// import hideHeader from "./hideHeader";


import glideSlideinit from "./glideSliderInit";
import glidePopup from "./glidePopup";

function fullPageInit() {
    var myFullpage = new fullpage('#fullpage', {
        anchors:['mainPage', 'quadroPage', 'futuroPage', 'quadroOnePage', 'futuroOnePage', 'benefitsPage', 'contactsPage'],
        fixedElements: ".section-type-header, .burger",
        onLeave: function() {
            let menu = document.querySelector('.menu');
            let trigger = document.querySelector('#burger');
            let header =document.querySelector('.section-type-header');
            let calcModal = document.querySelectorAll('.calcModal');
            let modal = document.querySelectorAll('.modal');


            menu.classList.remove('menu_active');
            trigger.classList.remove('burger_active');
            calcModal.forEach(el => {
                let section = el.parentElement.parentElement;
                let title = section.querySelector('.section-type-title');
                el.style.display = 'none'
                title.style.display = "block"
            })

            modal.forEach(el => {
                let section = el.parentElement.parentElement;
                let title = section.querySelector('.section-type-title');
                el.style.display = 'none'
                title.style.display = "block"
            })


        },
    });
    let burger = document.querySelector('.burger')
    burger.classList.remove('burger_invisible')
}

// function mobileInit () {
//     if (window.matchMedia("(max-height: 628px)").matches ||
//         window.matchMedia("(max-width: 575px)").matches) {
//         fullpage_api.setResponsive(true);
//
//     }
// }


window.addEventListener('resize', () => {
    if (window.matchMedia("(max-height: 628px)").matches ||
        window.matchMedia("(max-width: 575px)").matches) {
        // fullpage_api.destroy();
        fullpage_api.setResponsive(true);

    }
    else {
        fullpage_api.setResponsive(false);
    }
    if (window.matchMedia("(max-height: 628px)").matches ||
        window.matchMedia("(max-width: 991px)").matches) {

        glideSlideinit();

    }
})
window.addEventListener('load', () => {
    if (window.matchMedia("(max-height: 628px)").matches ||
        window.matchMedia("(max-width: 575px)").matches) {
        // fullpage_api.destroy();
        fullpage_api.setResponsive(true);

    }
    else {
        fullpage_api.setResponsive(false);
    }
    if (window.matchMedia("(max-height: 628px)").matches ||
        window.matchMedia("(max-width: 991px)").matches) {
        glideSlideinit();


    }


})
// mobileInit ()
fullPageInit()