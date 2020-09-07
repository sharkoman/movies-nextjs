import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'Strapi Movies' }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
		<header>
			<h1 className='text-center'>Strapi Movies App</h1>
		</header>
		<main>{children}</main>
		<footer>
			<span>I'm here to stay (Footer)</span>
		</footer>
	</div>
);

export default Layout;
