import React, { Component } from 'react';
import CategoryList from './CategoryList';

export default class Category extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="bg-gray-200">
					<div className="container  mx-auto">
						<div className="flex flex-no-wrap py-12 mb-10">
							<CategoryList />
							<CategoryList />
							<CategoryList />
							<CategoryList />
							<CategoryList />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
