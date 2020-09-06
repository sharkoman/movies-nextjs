import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths, GetStaticPathsResult, NextPage } from 'next';

interface Props {

}

const Movie: NextPage = (props: Props) => (
	<Layout title='Movie'>
		<h2>Movie</h2>
	</Layout>
);

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

export default Movie;
