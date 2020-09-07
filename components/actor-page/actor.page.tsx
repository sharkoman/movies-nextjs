import React from 'react';
import { ActorModel } from '../../interfaces/movie.interface';
import { BackURI } from '../../utils/enviroment';

interface ActorProps {
	actor: ActorModel;
}

const ActorPage: React.FC<ActorProps> = ({ actor }) => {
	return (
		<div className='container'>
			<div className="row">
				<div className="col-4">
					<img className='img-fluid' src={`${BackURI}${actor.image.url}`} />
				</div>
				<div className="col">
					<h2>{actor.name}</h2>
					<p>{actor.summery}</p>
				</div>
			</div>
		</div>
	);
};

export default ActorPage;
