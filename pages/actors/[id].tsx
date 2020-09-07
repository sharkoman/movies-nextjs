import React from 'react';
import { NextPage, GetStaticProps, GetStaticPropsContext, GetStaticPaths, GetStaticPathsResult } from 'next';
import Layout from '../../components/layout/Layout';
import ActorPage from '../../components/actor-page/actor.page';
import { ActorModel } from '../../interfaces/movie.interface';
import Axios from 'axios';
// import { useRouter } from 'next/dist/client/router';

interface ActorProps {
	actor: ActorModel;
}

const Actor: NextPage<ActorProps> = ({ actor }) => {
	// const router = useRouter();
	// if (router.isFallback) {
	// 	return <div>fallback</div>
	// }

	return (
		<Layout title='actor page'>
			<ActorPage actor={actor} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<any> = async (ctx: GetStaticPropsContext) => {
	const id = ctx?.params?.id;
	const actor = await Axios.get(`/actors/${id}`);

	return {
		props: {
			actor: actor.data,
		},
	};
};

export const getStaticPaths: GetStaticPaths<any> = async (): Promise<GetStaticPathsResult<{ id: string }>> => {
	const actors = await Axios.get<ActorModel[]>('/actors');
	const res = actors.data.map((actor) => {
		return { params: { id: actor.id.toString() } };
	});

	return {
		paths: res, // { params: {id: '12'} }
		fallback: true,
	};
};

export default Actor;
