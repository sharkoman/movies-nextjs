import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import IndexPage from '../components/index-page/index.page';
import { Movie } from '../interfaces/movie.interface';

interface IndexProps {
	movies: Movie[]
}

const Index = ({movies}: IndexProps) => {
	console.log(movies);
	
	return (
		<Layout title='Home | Next.js + TypeScript Example'>
			<IndexPage movies={movies} />
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
