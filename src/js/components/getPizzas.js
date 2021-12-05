import axios from 'axios';
import { API_URL } from '../settings/constants';

export const getPizzas = async () => {
  const token = localStorage.getItem('auth');

  const result = await axios
    .get(`${API_URL}/pizzas`, {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))

  console.log(result);
}

const buildElements = () => {
  
}