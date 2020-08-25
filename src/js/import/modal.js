const modals = (triggerSelector) => {
    const btnCall = document.querySelectorAll(triggerSelector),
          modals = document.querySelectorAll('.modal'),
          section = document.querySelectorAll('.section')

    function modalIdentify () {
        modals.forEach(modal => {
            let dataAttr = modal.parentElement.parentElement.getAttribute("data-access")
            console.log(dataAttr, 'MODAL PARENT data-attribute')
            modal.setAttribute("data-access", dataAttr)
        })
        section.forEach(item => {
            let infoBtn = item.querySelectorAll('.info')
            let dataAttr = item.getAttribute("data-access")
            infoBtn.forEach(btn => btn.setAttribute("data-access", dataAttr))
        })
    }
    modalIdentify ()

    function showModal() {
        btnCall.forEach(button => {
            modals.forEach(modal => {
                section.forEach(block => {
                    button.addEventListener('click', (e) => {
                        if (e.target && button.getAttribute("data-access") === modal.getAttribute("data-access") &&
                            button.getAttribute("data-access") === block.getAttribute("data-access")) {
                            e.preventDefault();
                            modal.style.display = 'block';
                            block.querySelector('.section-type-title').style.display = "none"
                        }
                    })
                })
            })
        })
    };
    function closeModal() {
        // popupWindow.addEventListener('click', (e) => {
        //     if(e.target.classList.contains('modal__close') || e.target === popupWindow) {
        //         popupWindow.style.display = 'none';
        //     }
        // });
        modals.forEach(modal => {
            section.forEach(block => {
                modal.addEventListener('click', (e) => {
                    if ((e.target.classList.contains('modal__close') && modal.getAttribute("data-access") === block.getAttribute("data-access")) ||
                    ((e.target === modal) && modal.getAttribute("data-access") === block.getAttribute("data-access"))) {
                        modal.style.display = 'none';
                        block.querySelector('.section-type-title').style.display = "block"
                    }
                })
            })
        })
    };
    showModal();
    closeModal();
};


export default modals;