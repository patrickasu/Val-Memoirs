import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button className="read-story-btn" onClick={this.toggle}>READ STORY</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>VAL MEMOIRS</ModalHeader>
          <ModalBody>
          	My girlfriend and I were brought together by our love for art. In the spirit of Valentine’s Day, we spent an afternoon retracing the steps of the day we met. Our shared habit of hunting down hidden gems, to escape the chaos of Lagos, had led us both to Paley Park one morning. She had been absorbed in a tattered copy of The Unknown Masterpiece , unaware that I was drawing her. Today was a grey February day in Paley Park , but for a minute we both felt the blissful warmth of the June air. It was the perfect setting for the gift that I had bought her for Valentine’s Day. I reached into my pocket to reveal a bracelet with a delicate infinity charm. I slipped it onto her wrist, creating a new memory for her in Paley Park , which made the frigid winter day a little brighter.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PostDetails;