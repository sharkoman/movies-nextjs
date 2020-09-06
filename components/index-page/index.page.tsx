import React from 'react'
import Layout from '../layout/Layout';

interface Props {
	
}

const IndexPage: React.FC = (props: Props) => {
	return (
		<Layout title='Index title page'>
			<h1>Strapi Movies App: Index</h1>
		</Layout>
	);
};

export default IndexPage;
