import axios from 'axios';

export default axios.create({
    baseURL: `https://tf-digit.herokuapp.com/`,
    // baseURL: `http://localhost:5000/`,
})