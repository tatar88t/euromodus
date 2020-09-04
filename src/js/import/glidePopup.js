function glidePopup() {
    let slides = document.querySelectorAll('.glide__slide img')

    slides.forEach(slide => slide.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopImmediatePropagation()
        let targetImg = e.target.getAttribute("src");
        let section = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

        let popup =  document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class = "popup__dialog">
                <div class ="popup__content">
                    <div class="popup__close">&times;</div>
                    <img src =${targetImg} />
                </div>
            </div>
        `
        e.target && popup.addEventListener('click', (e) => {
            if ((e.target.classList.contains('popup__close')) || (e.target === popup)){
                popup.remove()
            }
        })
        section.appendChild(popup)
    }))
}
export default glidePopup;