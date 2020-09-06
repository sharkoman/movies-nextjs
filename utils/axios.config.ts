import axios from 'axios';

const configAxios = () => {
	axios.defaults.baseURL = 'http://localhost:1337';
}

export default configAxios;
