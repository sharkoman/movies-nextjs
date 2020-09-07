import React from 'react';
import Layout from '../layout/Layout';
import MovieItem from '../movie/movie.component';
import { Movie } from '../../interfaces/movie.interface';

interface IndexPageProps {
	movies: Movie[];
}

const IndexPage: React.FC<IndexPageProps> = ({ movies }: IndexPageProps) => {
	const moviesContent = movies.map((movie) => {
		return (
			<div key={movie.id} className='col-3'>
				<MovieItem movie={movie} />
			</div>
		);
	});

	return (
		<div className='container'>
			<div className='row'>{moviesContent}</div>
		</div>
	);
};

export default IndexPage;
