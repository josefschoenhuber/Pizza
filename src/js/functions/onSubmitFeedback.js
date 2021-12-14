import { sendFeedback } from './sendFeedback';

export const onSubmitFeedback = () => {

  const form = document.forms['feedback'];
  if (!form) return;

  const fields = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    rating: document.getElementsByName('rating'),
    pricing: document.getElementsByName('pricing'),
    question: document.getElementById('question'),
  };

  const errorElements = {
    firstName: document.querySelector('.error--firstName'),
    lastName: document.querySelector('.error--lastName'),
    email: document.querySelector('.error--email'),
    rating: document.querySelector('.error--rating'),
    pricing: document.querySelector('.error--pricing'),
    question: document.querySelector('.error--question'),
  }

  const button = document.getElementById('submitButton');

  // const checkRadios = (items) => {
  //   let isValid = true;

  //   items.forEach(item => {
  //     if (item.checked === false) return isValid = false;
  //   })

  //   if (!isValid) {
  //     return 'The radios are empty';
  //   }

  //   return '';
  // }

  const isNotEmpty = (value) => {
    if (value == '' || value == null || typeof value == 'undefined') {
      return 'The field is empty';
    } else return '';
  }

  const isEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(String(email).toLowerCase())) return '';

    return 'The field is not an email';
  }

  const fieldValidation = (field, validationFunction, errorElement) => {

    let errorMessage = validationFunction(field);

    if (errorMessage) return errorElement.innerHTML = errorMessage;

    return true;
  }

  const isValid = () => {
    const ratingValue = document.querySelector('input[name="rating"]:checked');
    const pricingValue = document.querySelector('input[name="pricing"]:checked');

    var valid = true;

    valid &= fieldValidation(fields.firstName.value, isNotEmpty, errorElements.firstName);
    valid &= fieldValidation(fields.lastName.value, isNotEmpty, errorElements.lastName);
    valid &= fieldValidation(fields.email.value, isEmail, errorElements.email);
    valid &= fieldValidation(fields.question.value, isNotEmpty, errorElements.question);
    valid &= fieldValidation(ratingValue, isNotEmpty, errorElements.rating);
    valid &= fieldValidation(pricingValue, isNotEmpty, errorElements.pricing);

    return valid;
  }

  const checkFill = () => {
    const ratingValue = document.querySelector('input[name="rating"]:checked');
    const pricingValue = document.querySelector('input[name="pricing"]:checked');

    if (!fields.firstName.value) return;
    if (!fields.lastName.value) return;
    if (!fields.email.value) return;
    if (!fields.question.value) return;

    if (!ratingValue.value) return;
    if (!pricingValue.value) return;

    button.classList.remove('feedback__button--disabled');
  }

  const addFeedback = (event) => {
    event.preventDefault();
    const ratingValue = document.querySelector('input[name="rating"]:checked').value;
    const pricingValue = document.querySelector('input[name="pricing"]:checked').value;

    const fullName = `${fields.firstName.value} ${fields.lastName.value}`;
    const email = fields.email.value;
    const question = fields.question.value;
    
    if (isValid()) {
      sendFeedback({
        pizzaRating: ratingValue,
        prizeRating: pricingValue,
        name: fullName,
        email: email,
        feedback: question,
      });
    }
  }

  const setEvents = () => {
    const radioRating = document.querySelector('input[name="rating"]');
    const radioPricing = document.querySelector('input[name="pricing"]');

    fields.email.addEventListener('input', checkFill);
    fields.firstName.addEventListener('input', checkFill);
    fields.lastName.addEventListener('input', checkFill);
    fields.question.addEventListener('input', checkFill);
    radioRating.addEventListener('input', checkFill);
    radioPricing.addEventListener('input', checkFill);

    button.addEventListener('click', addFeedback);
    form.addEventListener('change', checkFill);
  }

  setEvents();
}