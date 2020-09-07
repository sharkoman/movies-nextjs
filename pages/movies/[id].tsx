import Layout from '../../components/layout/Layout';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths, GetStaticPathsResult, NextPage } from 'next';
import { Movie } from '../../interfaces/movie.interface';
import Axios from 'axios';
import { BackURI } from '../../utils/enviroment';
import Link from 'next/link';

interface MovieProps {
	movie: Movie;
}

const MoviePage: NextPage<MovieProps> = ({ movie }) => {
	const trailer = (
		<div>
			<h3>Trailer:</h3>
			<iframe
				width='560'
				height='315'
				src={`https://www.youtube.com/embed/${movie.trailer_url}`}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe>
		</div>
	);

	const actors = (
		<div>
			<h3>Actors:</h3>
			<ul className='list-unstyled'>
				{movie.actors.map((actor) => (
					<li key={actor.id} className='media actor_item'>
						<Link as={`/actors/${actor.id}`} href='/actors/[id]'>
							<a>
								<img className='img-fluid rounded-circle mr-3' width='50' height='100' src={`${BackURI}${actor.image.url}`} alt={actor.name} />
								<div className='media-body'>
									<h5 className='mt-0 mb-1'>{actor.name}</h5>
								</div>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<Layout title='Movie'>
			<div className='container'>
				<div className='row'>
					<div className='col-4'>
						<img className='img-fluid' src={`${BackURI}${movie.poster.url}`} alt={movie.Name} />
					</div>
					<div className='col'>
						<h2>{movie.Name}</h2>
						<p>{movie.desc}</p>
						{movie.trailer_url ? trailer : null}
						{movie.actors.length > 0 ? actors : null}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<any> = async (ctx: GetStaticPropsContext) => {
	const id = ctx?.params?.id;
	const res = await Axios.get(`/movies/${id}`);
	return {
		props: {
			movie: res.data,
		},
	};
};

export const getStaticPaths: GetStaticPaths<any> = async (): Promise<GetStaticPathsResult<{ id: string }>> => {
	const movies = await Axios.get<Movie[]>('/movies');
	const paths = movies.data.map((m) => ({
		params: {
			id: m.id.toString(),
		},
	}));
	return {
		paths: paths, // { params: {id: '12'} }
		fallback: true,
	};
};

export default MoviePage;
