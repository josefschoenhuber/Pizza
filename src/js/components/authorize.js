import axios from 'axios';
import { API_URL, AUTH_USER, AUTH_PASS } from '../settings/constants';

export const authorize = async () => {
  const isLoggedIn = localStorage.getItem('auth');

  if (isLoggedIn) return true;

  return await axios.post(`${API_URL}/auth`, {
    email: AUTH_USER,
    password: AUTH_PASS,
  })
  .then(response => {
    localStorage.setItem('auth', response.data.token)
    return true;
  })
  .catch(error => {
    console.log(error);
    return false;
  })
}