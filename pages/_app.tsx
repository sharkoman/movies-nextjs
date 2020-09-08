import { AppProps } from 'next/app';
import '../scss/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;