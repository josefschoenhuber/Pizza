import axios from 'axios';
import { API_URL } from '../settings/constants';

export const handleFeedbacks = async () => {
  const token = localStorage.getItem('auth');
  const wrapper = document.querySelector('[data-feedbacks]');

  if (!wrapper) return;

  const results = await axios
    .get(`${API_URL}/feedbacks`, {
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

  let icon = '';

  if (data.type === 'pizza') icon = '🍕';
  if (data.type === 'salad') icon = '🥗';
  if (data.type === 'softdrink') icon = '🥤';

  element.innerHTML = `
    <div div class = "card__content card__content--biggerPadding card__content--row" >
      <div class="card__number">#${++index}</div> 
      <div class="card__name">${data.name}</div> 
      <div class="card__type">${icon}</div>
    </div>
  `;

  wrapper.prepend(element);
}