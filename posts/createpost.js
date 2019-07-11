import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { createPost } from '../store/actions/postactions'

class Createpost extends Component {
  state = {
  	modal: false,
  	firstName: '',
	lastName: '',
	username: '',
	gender: '',
	headline: '',
	story: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPost(this.state)
		this.toggle();
	}


  render() {
    return (
      <div>
        <Button className="add-story" onClick={this.toggle}>ADD YOUR STORY</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Your Favorite Story</ModalHeader>
          <ModalBody>
          	<div className="main-content">
				<form className="posts-form" onSubmit={this.handleSubmit}>
					<h2>ADD STORY</h2>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="gender">Gender</label>
						<input type="text" id="gender" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="headline">Headline</label>
						<input type="text" id="headline" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="story">Story Content</label>
						<textarea id="story" className="text-area" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="story-btn">CREATE</button>
					</div>
				</form>
			</div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (Dispatch) => {
	return {
		createPost: (post) => Dispatch(createPost(post))
	}
}

export default connect(null, mapDispatchToProps)(Createpost);