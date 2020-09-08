import React from 'react';
import { Movie } from '../../interfaces/movie.interface';
import { BackURI } from '../../utils/enviroment';
import Link from 'next/link';
import { trim_words } from '../../utils/methods';
import styles from './movie.module.scss';

interface MovieModal {
	movie: Movie;
}

const MovieItem: React.FC<MovieModal> = ({ movie }) => {
	return (
		<div className={`card ${styles.movie_item}`}>
			<Link as={`/movies/${movie?.id}`} href='/movies/[id]'>
				<a>
					<img className='card-img-top' src={`${BackURI}${movie?.poster?.url}`} alt={movie?.Name} />
				</a>
			</Link>

			<div className='card-body'>
				<h5 className='card-title'>
					<Link as={`/movies/${movie?.id}`} href='/movies/[id]'>
						<a>{movie?.Name}</a>
					</Link>
				</h5>
				<p className='card-text'>{trim_words({ text: movie?.desc, charNumber: 100, showDots: true })}</p>
				<Link as={`/movies/${movie?.id}`} href='/movies/[id]'>
					<a className='btn btn-primary'>Details</a>
				</Link>
			</div>
		</div>
	);
};

export default MovieItem;
