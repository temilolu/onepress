import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import '../index.css';

const Home = (props) => (
	<React.Fragment>
		<Header />
		<div className="container mx-auto px-20">
			<div className="flex">
				<div className="w-3/4 p-2">
					<h1 className="font-mono text-5xl py-8">
						Why Exercisers Are Embracing Cannabis
					</h1>
					<img
						className="w-full"
						src="https://tailwindcss.com/img/card-top.jpg"
						alt="Sunset in the mountains"
					/>
					<p className="font-sans text-base py-8">
						Marijuana may be the next frontier of fitness About halfway through
						a 50-mile ultramarathon is when Herb Green says he starts to feel
						achy and tired. It’s no wonder; at 60, he’s completed more than two
						dozen extreme endurance events, and he’s a competitive distance
						swimmer on the side. When the pain starts at this halfway point,
						Green says he sometimes deals with it by…
					</p>
				</div>

				<div className="w-1/4 p-2">
					<Card />
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Home;
