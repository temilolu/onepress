import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Category from '../components/Category';

const Home = (props) => (
	<React.Fragment>
		<Header />

		<div className="container mx-auto">
			<Category />

			<div className="flex flex-wrap">
				<div class="w-3/4 p-2">
					<Card />

					<Card />

					<Card />
				</div>

				<div class="w-1/4 p-2">
					<Card />
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Home;
