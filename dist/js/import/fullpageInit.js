// import hideHeader from "./hideHeader";


function fullPageInit() {
    var myFullpage = new fullpage('#fullpage', {
        anchors:['mainPage', 'quadroPage', 'futuroPage', 'quadroOnePage', 'futuroOnePage', 'benefitsPage', 'contactsPage'],
        fixedElements: ".section-type-header, .burger",
        onLeave: function() {
            let menu = document.querySelector('.menu');
            let trigger = document.querySelector('#burger');
            let header =document.querySelector('.section-type-header');
            menu.classList.remove('menu_active');
            trigger.classList.remove('burger_active');
            header.classList.add('moved')

        },
    });
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
})
// mobileInit ()
fullPageInit()