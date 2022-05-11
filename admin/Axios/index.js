import axios from 'axios';

let url = process.env.NEXT_APP_BACKEND_URL;
const instance = axios.create({
  baseURL: url,
});

export default instance;