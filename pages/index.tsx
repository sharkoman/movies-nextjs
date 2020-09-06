import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import IndexPage from '../components/index-page/index.page';
import { getAllMovies } from '../utils/movies.service';

const Index = (props: any) => {
	console.log(props);
	
	return (
		<Layout title='Home | Next.js + TypeScript Example'>
			<IndexPage />
		</Layout>
	);
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
	const res = await axios.get('/movies');
	const movies = res.data;
	
	return {
		props: {
			movies
		}
	};
};
