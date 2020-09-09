import React from 'react';
import { ActorModel } from '../../interfaces/movie.interface';
import Link from 'next/link';

interface ActorProps {
	actor: ActorModel;
}

const ActorPage: React.FC<ActorProps> = ({ actor }) => {
	console.log(actor);

	const actorMovies = actor.movies && (
		<section>
			<h3>Actor Movies</h3>
			{actor.movies.map((movie, i) => {
				return (
					<p key={i}>
						<Link as={`/movies/${movie.id}`} href='/movies/[id]'>
							<a>{movie.Name}</a>
						</Link>
					</p>
				);
			})}
		</section>
	);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-4'>
					<img className='img-fluid' src={`${actor?.image?.url}`} />
				</div>
				<div className='col'>
					<h2>{actor?.name}</h2>
					<p>{actor?.summery}</p>
					{actorMovies}
				</div>
			</div>
		</div>
	);
};

export default ActorPage;
