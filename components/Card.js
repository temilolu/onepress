import React, { Component } from 'react';
import Link from 'next/link';

export default class Card extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="px-4 py-2 m-2">
					<div className="max-w-full rounded overflow-hidden shadow-lg">
						<div className="px-6 py-4 flex items-stretch">
							<Link href="/account">
								<a>
									<img
										className="w-10 h-10 rounded-full mr-4"
										src="https://tailwindcss.com/img/jonathan.jpg"
										alt="Avatar of Jonathan Reinink"
									/>
								</a>
							</Link>
							<div className="text-sm">
								<p className=" font-mono text-gray-900 leading-none">
									<Link href="/account">
										<a>Jonathan Reinink</a>
									</Link>
								</p>
								<p className="text-gray-600">Aug 18</p>
							</div>
						</div>

						<Link href="/details">
							<a>
								<img
									className="w-full"
									src="https://tailwindcss.com/img/card-top.jpg"
									alt="Sunset in the mountains"
								/>
							</a>
						</Link>

						<div className="px-6 py-4">
							<div className="font-mono font-bold text-xl mb-2">
								<Link href="/details">
									<a>The Coldest Sunset</a>
								</Link>
							</div>
							<p className="font-sans text-gray-700 text-base">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptatibus quia, nulla! Maiores et perferendis eaque,
								exercitationem praesentium nihil.
							</p>
						</div>

						<div className="px-6 py-4">
							<span className="font-mono inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								#photography
							</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
