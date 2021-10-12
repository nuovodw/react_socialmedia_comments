import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className='ui container comments'>
			<CommentDetail
				author='Sam'
				timeAgo='Today at 4:45PM'
				content='Nice!'
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author='Alex'
				timeAgo='Today at 2:00AM'
				content='♥'
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author='Jane'
				timeAgo='Yesterday at 5:00AM'
				content='Good job!'
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
