// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Backdrop, Modal } from './Modal.styled';
import PropTypes from 'prop-types';

export class ModalForImage extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const { largeImageURL, tags, toggleModal } = this.props;
    return (
      <Backdrop
        onClick={() => toggleModal()}
        // onKeyDown={this.props.onKeyDown()}
      >
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
