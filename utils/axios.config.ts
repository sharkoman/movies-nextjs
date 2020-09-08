import axios from 'axios';

const axiosAPI = axios.create({
	baseURL: 'https://movies-strapi-cms.herokuapp.com'
});

export default axiosAPI;
