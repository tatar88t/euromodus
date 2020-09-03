function showModalSuccess() {
    let sections = document.querySelectorAll('.section')
    // alert('Заявка принята, в ближайшее время наш менеджер свяжется с вами.')
    sections.forEach(section => {
        let popupSuccess = document.createElement('div')
        popupSuccess.classList.add('modalSucces');
        popupSuccess.innerHTML =`
            
                <div class="modalSucces__dialog">
                    <div class="modalSucces__content">
                        Ваша заявка принята! 
                        <br>
                        В ближайшее время наши менеджеры свжутся с Вами!
                        <br>
                        <span>
                            &#10004;
                        </span>
                    </div>
                </div>  
        `
        section.appendChild(popupSuccess)

        function closeModalSuccess() {
            popupSuccess.remove()
        }
        let timeoutClose = window.setTimeout(closeModalSuccess, 1200)


    })
}
export default showModalSuccess;