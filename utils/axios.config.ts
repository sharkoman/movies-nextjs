import axios from 'axios';

const configAxios = () => {
	axios.defaults.baseURL = 'https://movies-strapi.herokuapp.com';
}

export default configAxios;
