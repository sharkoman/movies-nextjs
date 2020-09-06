import axios from 'axios';

// export class MovieService {
// 	static async getAllMovies() {
// 		const res = await axios.get('/movies');
// 		return res;
// 	}
// }

export const getAllMovies = async () => {
	const res = await axios.get('/movies');
	return res.data;
}