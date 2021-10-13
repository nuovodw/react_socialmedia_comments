import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4:45PM"
				content="Nice!"
				avatar={faker.image.avatar()}
			/>

			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 2:00AM"
					content="♥"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 5:00AM"
				content="Good job!"
				avatar={faker.image.avatar()}
			/>

			<br />
			<ApprovalCard>Are you sure you want to exit?</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
