import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>Are you sure you want to exit?</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Sam'
					timeAgo='Today at 4:45PM'
					content='Nice!'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Alex'
					timeAgo='Today at 2:00AM'
					content='♥'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Jane'
					timeAgo='Yesterday at 5:00AM'
					content='Good job!'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
