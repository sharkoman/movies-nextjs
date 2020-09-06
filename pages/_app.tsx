import { AppProps } from 'next/app';
import configAxios from '../utils/axios.config';

configAxios();

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;