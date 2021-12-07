import axios from 'axios';
import { API_URL } from '../settings/constants';

export const handleCart = async () => {
  const token = localStorage.getItem('auth');
  const wrapper = document.querySelector('[data-cart-token]');

  const cart = await axios
    .get(`${API_URL}/orders`, {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))

}