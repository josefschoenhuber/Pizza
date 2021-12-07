import axios from 'axios';
import { API_URL } from '../settings/constants';

export const requestData = async (wrapper, endpoint) => {
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

  results.forEach((result) => createElement(wrapper, result));
}

const createElement = (wrapper, data) => {
  const element = document.createElement('div');
  element.classList.add('card');

  element.innerHTML = `
    <div class="card__inner">
      <div class="card__imageWrapper">
        <img class="card__image" src="${data.imageUrl}">
      </div>
      <div class="card__content">
        <h2 class="card__title">
          ${data.name} ${data.prize} <a href="#"> <span class="card__cartIcon" </span> </a>
        </h2>
        <h8  class="card__description">${data.hasOwnProperty('ingredients') ? data.ingredients.join(', ') : data.volume}</h8>
      </div>
    </div>
  `;
  element.addEventListener('click', () => {
    console.log(data.id);
  })

  wrapper.appendChild(element);
}