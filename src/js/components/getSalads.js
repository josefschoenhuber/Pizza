import axios from 'axios';
import { API_URL } from '../settings/constants';

export const getSalads = async () => {
  const token = localStorage.getItem('auth');
  const wrapper = document.querySelector('.salads');

  if (!wrapper || !token) return;

  const results = await axios
    .get(`${API_URL}/salads`, {
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
  element.classList.add('salads__item');

  element.innerHTML = `
    <div class="card">
      <img src="${data.imageUrl}">
      <h2>${data.name} ${data.price}<a href="#"> <span class="glyphicon glyphicon-shopping-cart" </span> </a> <br>
      </h2>
      <h8>${data.ingredients.join(', ')}</h8>
      <br>
    </div>
  `;

  element.addEventListener('click', () => {
    console.log(data.id);
  })

  wrapper.appendChild(element);
}