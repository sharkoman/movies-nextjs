import React from 'react'
import { NextPage, NextPageContext, GetStaticProps, GetStaticPropsContext, GetStaticPaths, GetStaticPathsResult } from 'next';
import Layout from '../../components/layout/Layout';
import ActorPage from '../../components/actor-page/actor.page';

interface Props {
	
}

const Actor: NextPage = (props: NextPageContext) => {
	return (
		<Layout title="actor page">
			<ActorPage />
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<any> = async (ctx: GetStaticPropsContext) => {
	return {
		props: {},
	};
};

export const getStaticPaths: GetStaticPaths<any> = async (): Promise<GetStaticPathsResult<{ id: string }>> => {
	return {
		paths: [], // { params: {id: '12'} }
		fallback: true,
	};
};

export default Actor;