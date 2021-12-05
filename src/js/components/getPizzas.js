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

  results.forEach((result) => createElement(wrapper, result));
}

const createElement = (wrapper, data) => {
  const element = document.createElement('div');
  element.classList.add('pizzas__item');

  element.innerHTML = `
    <div class="card">
      <img src="/images/Pizza%20Food%20Hd%20Wallpaper.jpg">
      <h2>Giardino 16$<a href="#"> <span class="glyphicon glyphicon-shopping-cart" </span>
                  </a> <br>
      </h2>
      <h8>Tomato, mozzarella, artichokes, fresh mushrooms</h8>
      <br>
    </div>
  `;
}