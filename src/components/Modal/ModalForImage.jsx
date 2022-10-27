// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Backdrop, Modal } from './Modal.styled';
import PropTypes from 'prop-types';

export class ModalForImage extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  closeModal = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Backdrop onClick={this.closeModal}>
        <Modal>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </Backdrop>
    );
  }
}
ModalForImage.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
