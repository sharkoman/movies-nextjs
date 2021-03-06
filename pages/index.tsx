import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import IndexPage from '../components/index-page/index.page';
import { Movie } from '../interfaces/movie.interface';
import axiosAPI from '../utils/axios.config';

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
	const res = await axiosAPI.get('/movies');
	const movies = res.data;
	
	return {
		props: {
			movies
		},
		revalidate: 5
	};
};
