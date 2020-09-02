
import Headroom from "headroom.js";
function hideHeader() {
    alert('Bobro')
    const header = document.querySelector("section-type-header")
    const headroom = new Headroom(header);
    headroom.init();
}
export default hideHeader;