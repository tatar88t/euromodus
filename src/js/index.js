
import "./import/fullpageInit.js"

import modals from "./import/modal"
import showMenu from "./import/showMenu";
import validation from "./import/validation";
import calcModal from "./import/calcModal";
import hideHeader from "./import/hideHeader";




modals('.info');
showMenu();
validation();
calcModal();
hideHeader();

// alert("borbo");

// $(document).ready(function() {
//     $('.section-main').addClass('TEST');
// })




// console.log("sdcsdcsdc")
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         //options here
//         autoScrolling: true,
//         scrollHorizontally: true,
//         licenseKey: 'YOUR_KEY_HERE',
//         css3: true,
//         navigation: true,
//     });
//
//     //methods
//     $.fn.fullpage.setAllowScrolling(false);
// });