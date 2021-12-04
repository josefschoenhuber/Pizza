const init = () => {
    const fields = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        email: document.getElementById('email'),
        country: document.getElementById('country'),
        password: document.getElementById('password'),
        passwordCheck: document.getElementById('passwordCheck'),
        newsletter: document.getElementById('newsletter'),
        question: document.getElementById('question'),
        rating: document.getElementById('rating'),
        pricing: document.getElementById('pricing'),

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

    function getRating() {
        return document.querySelector('input[name="rating"]:checked')
    }

    function getPricing() {
        return document.querySelector('input[name="pricing"]:checked')
    }


    const setEvents = () => {
        button.addEventListener('click', sendContact);
    }

    function isNotEmpty(value) {
        if (value.length == 0 || value == null || typeof value == 'undefined') {
            return 'The field is empty';
        } else return '';
    }

    function isNumber(num) {
        if ((num.length > 0) && !isNaN(num)) {
            return '';
        }
        return 'The field is empty';
    }

    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
    }

    function isPasswordValid(password) {
        if (password.length > 5) {
            return true;
        }
        return false
    }

    function fieldValidation(field, validationFunction, errorElement) {
        console.log(errorElement);

        if (field == null) return false;

        let errorMessage = validationFunction(field.value)
        if (errorMessage) {
            return errorElement.innerHTML = errorMessage;
        }
    }



    function isValid() {
        var valid = true;

        valid &= fieldValidation(fields.firstName, isNotEmpty, errorElements.firstName);
        valid &= fieldValidation(fields.lastName, isNotEmpty, errorElements.lastName);
        valid &= fieldValidation(fields.rating, isNotEmpty, errorElements.rating);
        valid &= fieldValidation(fields.pricing, isNotEmpty, errorElements.pricing);
        valid &= fieldValidation(fields.country, isNotEmpty, errorElements.country);
        valid &= fieldValidation(fields.email, isEmail, errorElements.email);
        valid &= fieldValidation(fields.password, isPasswordValid, errorElements.password);
        valid &= fieldValidation(fields.passwordCheck, isPasswordValid, errorElements.passwordCheck);
        valid &= fieldValidation(fields.question, isNotEmpty, errorElements.question);
        valid &= arePasswordsEqual();

        return valid;
    }

    function arePasswordsEqual() {
        if (fields.password.value == fields.passwordCheck.value) {
            fields.password.className = 'placeholderRed';
            fields.passwordCheck.className = 'placeholderRed';
            return true;
        }
        return false
    }

    class User {
        constructor(firstName, lastName, rating, pricing, country, email, newsletter, question, password, passwordCheck) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.rating = rating;
            this.pricing = pricing;
            this.country = country;
            this.email = email;
            this.newsletter = newsletter;
            this.question = question;
            this.password = password;
            this.passwordCheck = passwordCheck;
        }
    }

    function sendContact(event) {
        event.preventDefault();
        if (isValid()) {
            let usr = new User(firstName.value, lastName.value, rating.value, pricing.value, country.value, email.value, newsletter.checked, password.checked);
            alert(`${usr.firstName} thanks for registering.`)
        } else {
            alert("There was an error")
        }
    }

    setEvents();
}

document.addEventListener("DOMContentLoaded", init);