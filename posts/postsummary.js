import React from 'react';
import PostDetails from './postdetails';
import Likebtn from './likebtn';

const PostSummary = ({post}) => (
	<div className="posts-section">
		<div className="posts-image" style={{ backgroundImage: "url(" + post.img_src + ")" }}></div>
		<p className="posts-title">{post.title}</p>
		<p className="posts-description">{post.description}</p>
		<p className="posts-name">{post.name}</p>
		<PostDetails />
		<Likebtn />
	</div>
);

export default PostSummary;