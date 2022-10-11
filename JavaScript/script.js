class Validator {

    constructor() {
        this.lalidations = [

        ]
    }

    validate(form) {

        let inputs = form.getAttributeName('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input) {
            
        });
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener('click', function(e) {
    
    e.preventDefault();
   
    validator.validate(form);

});