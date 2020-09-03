
import Headroom from "./headroom";
function hideHeader() {
    const header = document.querySelector(".section-type-header")
    const headroom = new Headroom(header);
    console.log(headroom)
    headroom.init();
    window.addEventListener('scroll', () => {
        let burger = document.querySelector('.burger')
        header.classList.contains('headroom--unpinned') ? burger.classList.add('burger_invisible') :
            burger.classList.remove('burger_invisible')
    })

}
export default hideHeader;