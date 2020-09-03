function validation() {
    let inputs = document.querySelectorAll('input[data-rule]');
    let btn = document.querySelector('.submit')
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
                    check = /[A-zА-яёЁ0-9]{6,120}/.test(value);
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
    // if(inputs.every(inp => inp.parentElement.classList.contains('valid'))) {
    //     console.log('GOOOOOOOOOOOOOOOOOOOOOOD')
    // }

}
export default validation;