import React, { Component } from 'react';

export default class Category extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="flex flex-no-wrap mb-10">
					<div className="w-1/5 flex-none p-2">
						<div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
					</div>
					<div className="w-1/5 flex-none p-2">
						<div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
					</div>
					<div className="w-1/5 flex-none p-2">
						<div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
					</div>
					<div className="w-1/5 flex-none p-2">
						<div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
					</div>
					<div className="w-1/5 flex-none p-2">
						<div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
