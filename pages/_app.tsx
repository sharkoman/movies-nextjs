import { AppProps } from 'next/app';
// import configAxios from '../utils/axios.config';
import '../scss/styles.scss';
import axios from 'axios';

// configAxios();
axios.defaults.baseURL = 'https://movies-strapi-cms.herokuapp.com';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;