import axios from 'axios';

const configAxios = () => {
	axios.defaults.baseURL = 'https://movies-strapi-cms.herokuapp.com';
}

export default configAxios;
