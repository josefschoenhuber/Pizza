import axios from 'axios';
import { API_URL } from '../settings/constants';

export const requestData = async (wrapper, endpoint, type) => {
  const token = localStorage.getItem('auth');

  if (!wrapper || !token) return;

  const results = await axios
    .get(`${API_URL}/${endpoint}`, {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))

  if (!results) return;

  wrapper.innerHTML = "";

  results.forEach((result) => createElement(wrapper, result, type));
}

const createElement = (wrapper, data, type) => {
  const element = document.createElement('div');

  element.classList.add('card');

  element.innerHTML = `
    <div class="card__inner">
      <div class="card__imageWrapper">
        <img class="card__image" src="${data.imageUrl}">
      </div>
      <div class="card__content">
        <h2 class="card__title">
          <span class="card__titleContent">${data.name}</span> 
          <span class="card__buttonPrice" data-price>${data.prize}<span class="card__cartIcon"></span></span>
        </h2>
        <h8  class="card__description">${data.hasOwnProperty('ingredients') ? data.ingredients.join(', ') : data.volume}</h8>
      </div>
    </div>
  `;

  const button = element.querySelector('[data-price]');

  const orderProduct = async () => {
    const token = localStorage.getItem('auth');

    await axios.post(`${API_URL}/orders`, {
        type: type,
        name: data.name,
      }, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => console.log(response))
  }

  button.addEventListener('click', orderProduct);

  wrapper.appendChild(element);
}