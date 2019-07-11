import React, { Component } from 'react';
import PostList from './postlist';
import { connect } from 'react-redux';


class Posts extends Component {
	render(){
		const { posts } = this.props;
		return(
			<div className="main-content">
				<div className="posts-section">
					<div className="posts-col">
						<PostList posts={posts} />
					</div>	
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		posts: state.post.posts
	}
}

export default connect(mapStateToProps)(Posts);