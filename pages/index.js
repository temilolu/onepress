import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Category from '../components/Category';
import '../index.css';

const Home = (props) => (
	<React.Fragment>
		<Header />

		<Category />

		<div className="container mx-auto">
			<div className="flex flex-wrap">
				<div className="w-1/4 p-2">
					<Card />
				</div>
				<div className="w-2/4 p-2">
					<Card />
					<Card />
				</div>

				<div className="w-1/4 p-2">
					<Card />
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Home;
