import axios from 'axios';
import { API_URL } from '../settings/constants';
import { handleFeedbacks } from './handleFeedbacks';

export const sendFeedback = async (data) => {
  const token = localStorage.getItem('auth');

  const {
    pizzaRating,
    prizeRating,
    name,
    email,
    feedback
  } = data;

  await axios.post(`${API_URL}/feedback`, {
      pizzaRating: pizzaRating,
      prizeRating: prizeRating,
      name: name,
      email: email,
      feedback: feedback,
    }, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      handleFeedbacks();
    })
}