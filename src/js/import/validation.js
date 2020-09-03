import showModalSuccess from "./showModalSuccess";

function validation() {
    // let form = document.querySelector('.feedback-form form');
    let forms = document.querySelectorAll('form');
    forms.forEach(form => {
        let inputs = form.querySelectorAll('input[data-rule]');
        let btn = form.querySelector('.submit')
        for (let input of inputs) {
            input.addEventListener('blur', function() {
                let rule = this.dataset.rule;
                let value = this.value;
                let check;

                switch (rule) {
                    case 'number' :
                        check = /^\d+$/.test(value);
                        break;
                    case 'email' :
                        check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
                        break;
                    case 'name' :
                        check = /[A-zА-яёЁ0-9]{3,30}/.test(value);
                        break;
                    case 'shortdescr' :
                        check = /[A-zА-яёЁ0-9]{3,50}/.test(value);
                        break;
                    case 'text' :
                        check = /[A-zА-яёЁ0-9]{3,120}/.test(value);
                        break;
                }

                this.parentElement.classList.remove('invalid');
                this.parentElement.classList.remove('valid');
                if (check) {
                    this.parentElement.classList.add('valid');
                } else {
                    this.parentElement.classList.add('invalid');
                }
            })
        }
        let inputsArr = Array.from(inputs)

        btn.addEventListener('click', (e)=> {
            e.preventDefault();
            e.stopPropagation();
            btn.parentNode.style.position='relative'
            if (inputsArr.every(elem => elem.parentElement.classList.contains("valid"))
            ) {

                inputs.forEach(input => {
                    input.parentElement.classList.remove('invalid');
                    input.parentElement.classList.remove('valid');
                    input.value = '';
                })
                let calcModal = document.querySelectorAll('.calcModal');
                calcModal.forEach(el => {
                    let section = el.parentElement.parentElement;
                    let title = section.querySelector('.section-type-title');
                    el.style.display = 'none'
                    title.style.display = "block"
                })
                showModalSuccess()


            } else {


                let errorMessage = document.createElement('div')
                errorMessage.classList.add('errorMessage')
                errorMessage.innerHTML = `
                <span>Заполните корректно все поля формы!</span>
                `
                function showErrFields(elem) {
                    elem.parentElement.classList.add('invalid');
                    let errFieldsRemove = window.setTimeout(() => elem.parentElement.classList.remove('invalid'), 1300)

                }
                btn.parentNode.insertBefore(errorMessage, btn)
                let errClose = window.setTimeout(() => errorMessage.remove(), 1300)
                inputsArr.forEach(el => !el.parentElement.classList.contains('valid') ? showErrFields(el) : null)
            }
        })

    })
    // let inputs = document.querySelectorAll('input[data-rule]');




}
export default validation;