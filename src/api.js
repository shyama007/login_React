import axios from 'axios';
import { config } from '../config/config';
export const userService = {
  data
};

function data() {
  let url = `${config.apiUrl}/customers`;
  let config1 = {
    headers: {
        'Content-Type': 'application/json'
    }
}
  return axios.get(url, config1);
}
