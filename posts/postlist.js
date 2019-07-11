import React from 'react';
import PostSummary from './postsummary';


const PostList = ({posts}) => (
	<div className="main-content">
		<div className="postlist-section">
			<div className="postlist-col">
				{posts && posts.map(post =>{
					return(
						<PostSummary post={post} />
					)	
				})};
			</div>	
		</div>
	</div>
);

export default PostList;