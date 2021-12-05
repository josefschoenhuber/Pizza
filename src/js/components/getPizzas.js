import axios from 'axios';
import { API_URL } from '../settings/constants';

export const getPizzas = async () => {
  const token = localStorage.getItem('auth');
  const wrapper = document.querySelector('.pizzas');

  if (!wrapper || !token) return;

  const results = await axios
    .get(`${API_URL}/pizzas`, {
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
  element.classList.add('pizzas__item');

  element.innerHTML = `
    <div class="card">
      <img src="${data.imageUrl}">
      <h2>${data.name} ${data.prize}<a href="#"> <span class="glyphicon glyphicon-shopping-cart" </span> </a> <br>
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