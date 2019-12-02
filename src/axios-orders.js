import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-b7fc6.firebaseio.com/'
});

export default instance;