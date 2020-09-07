import { AppProps } from 'next/app';
import configAxios from '../utils/axios.config';
import '../scss/styles.scss';

configAxios();

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;