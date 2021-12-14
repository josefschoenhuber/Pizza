import axios from 'axios';

export const sendFeedback = ({
  pizzaRating,
  prizeRating,
  name,
  email,
  feedback,
}) => {
  const token = localStorage.getItem('auth');

  await axios.post(`${API_URL}/orders`, {
      pizzaRating,
      prizeRating,
      name,
      email,
      feedback,
    }, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      const tooltip = button.querySelector('.card__buttonTooltip');

      if (!tooltip.classList.contains('card__buttonTooltip--visible')) {
        tooltip.classList.add('card__buttonTooltip--visible');
        setTimeout(() => tooltip.classList.remove('card__buttonTooltip--visible'), 1000)
      }
    })
}