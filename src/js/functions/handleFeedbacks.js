import axios from 'axios';
import { API_URL } from '../settings/constants';

export const handleFeedbacks = async () => {
  const token = localStorage.getItem('auth');
  const wrapper = document.querySelector('[data-feedback]');

  if (!wrapper) return;

  const results = await axios
    .get(`${API_URL}/feedback`, {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))

  if (!results) return;

  wrapper.innerHTML = "";

  results.forEach((result, index) => createElement(wrapper, result, index));
}

const createElement = (wrapper, data, index) => {
  const element = document.createElement('div');

  element.classList.add('card');

  element.innerHTML = `
    <div div class = "card__content card__content--biggerPadding" >
      <div class="card__header">
        <div class="card__name">${data.name}</div> 
        <a class="card__email" href="mailto:${data.email}">${data.email}</a> 
      </div>
      <div class="card__ratings">
        <div class="card__ratingsPrice">Price: ${data.prizeRating}</div>
        <div class="card__ratingsPizza">Pizza: ${data.pizzaRating}</div>
      </div>
      <div class="card__feedback">${data.feedback}</div> 
    </div>
  `;

  wrapper.prepend(element);
}