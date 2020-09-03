import validation from "./validation";

function calcModal() {
    // let trigger = document.querySelectorAll('.total button');
    // let calcModal = document.querySelector('.calcModal');
    let modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {

        let trigger = modal.querySelector('.total button');
        let calcModal = modal.nextElementSibling;
        let section = calcModal.parentElement.parentElement;
        let title = section.querySelector('.section-type-title');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            calcModal.style.display = 'block';
            modal.style.display = 'none';
        })
        calcModal.addEventListener('click', (e) => {
            if ((e.target.classList.contains('calcModal__close')) || (e.target === calcModal)){
                calcModal.style.display = 'none';
                title.style.display = "block"
            }
        })

    })
    validation()
}
export default calcModal;