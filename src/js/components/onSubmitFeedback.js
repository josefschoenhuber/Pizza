export const onSubmitFeedback = () => {

    const form = document.forms['feedback'];
    if (!form) return;

    const fields = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        email: document.getElementById('email'),
        country: document.getElementById('country'),
        password: document.getElementById('password'),
        passwordCheck: document.getElementById('passwordCheck'),
        newsletter: document.getElementById('newsletter'),
        question: document.getElementById('question'),
        rating: document.getElementsByName('rating'),
        pricing: document.getElementsByName('pricing'),
    };

    const errorElements = {
        firstName: document.querySelector('.error--firstName'),
        lastName: document.querySelector('.error--lastName'),
        email: document.querySelector('.error--email'),
        country: document.querySelector('.error--country'),
        password: document.querySelector('.error--password'),
        passwordCheck: document.querySelector('.error--passwordCheck'),
        newsletter: document.querySelector('.error--newsletter'),
        question: document.querySelector('.error--question'),
        rating: document.querySelector('.error--rating'),
        pricing: document.querySelector('.error--pricing'),
    }

    const button = document.getElementById('submitButton');

    const checkRadios = (items) => {
        let isValid = true;

        items.forEach(item => {
            if (item.checked === false) return isValid = false;
        })

        if (!isValid) {
            return 'The radios are empty';
        }

        return '';
    }

    const isNotEmpty = (value) => {
        if (value.length == 0 || value == null || typeof value == 'undefined') {
            return 'The field is empty';
        } else return '';
    }

    const isNumber = (num) => {
        if ((num.length > 0) && !isNaN(num)) {
            return '';
        }
        return 'The field is empty';
    }

    const isEmail = (email) => {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (regex.test(String(email).toLowerCase())) {
            return '';
        } else {
            return 'The field is not an email';
        }
    }

    const isPasswordValid = (password) => {
        if (password.length > 5) {
            return true;
        }
        return false
    }

    const fieldValidation = (field, validationFunction, errorElement) => {
        if (field == null) return false;

        let errorMessage = validationFunction(field.length === 1 ? field.value : field);

        if (errorMessage) {
            return errorElement.innerHTML = errorMessage;
        }
    }

        const arePasswordsEqual = () => {
            if (fields.password.value == fields.passwordCheck.value) {
                return '';
            }
            return 'The passwords are not equal'
        }

    const isValid = () =>{
        var valid = true;

        valid &= fieldValidation(fields.firstName, isNotEmpty, errorElements.firstName);
        valid &= fieldValidation(fields.lastName, isNotEmpty, errorElements.lastName);
        valid &= fieldValidation(fields.country, isNotEmpty, errorElements.country);
        valid &= fieldValidation(fields.email, isEmail, errorElements.email);
        valid &= fieldValidation(fields.password, isPasswordValid, errorElements.password);
        valid &= fieldValidation(fields.passwordCheck, isPasswordValid, errorElements.passwordCheck);
        valid &= fieldValidation(fields.question, isNotEmpty, errorElements.question);
        valid &= fieldValidation(fields.rating, checkRadios, errorElements.rating);
        valid &= fieldValidation(fields.pricing, checkRadios, errorElements.pricing);

        valid &= arePasswordsEqual();

        return valid;
    }

    function addFeedback(event) {
        event.preventDefault();

        if (isValid()) {

        } else {
            alert("There was an error")
        }
    }

    const checkFill = () => {
        if (!fields.firstName.value) return;
        if (!fields.lastName.value) return;
        if (!fields.email.value) return;
        if (!fields.country.value) return;
        if (!fields.password.value) return;
        if (!fields.passwordCheck.value) return;
        if (!fields.newsletter.value) return;
        if (!fields.question.value) return;

        if (checkRadios(fields.rating)) return;
        if (checkRadios(fields.pricing)) return;

        button.classList.remove('disabled');
    }

    const setEvents = () => {
        button.addEventListener('click', addFeedback);
        form.addEventListener('change', checkFill);
    }

    setEvents();
}