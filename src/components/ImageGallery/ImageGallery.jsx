import { Component } from 'react';
import { getImages } from 'helpers/Api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ModalForImage } from 'components/Modal/ModalForImage';
import { Loader } from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    activeImage: '',
    isLoading: false,
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.searchImageByName === '') return;
    if (prevProps.searchImageByName !== this.props.searchImageByName) {
      this.setState({ isLoading: true });
      const data = await getImages(
        this.props.searchImageByName,
        this.props.page
      );
      console.log(data);
      this.setState({
        images: data.hits,
        isLoading: false,
        totalHits: data.totalHits,
      });
    }
    if (prevProps.page !== this.props.page && this.props.page !== 1) {
      this.setState({ isLoading: true });
      const data = await getImages(
        this.props.searchImageByName,
        this.props.page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLoading: false,
        totalHits: data.totalHits,
      }));
    }
  }

  toggleModal = largeImageURL => {
    if (!largeImageURL) {
      this.setState({
        activeImage: '',
      });
    } else {
      this.setState({ activeImage: largeImageURL });
    }
  };

  render() {
    console.log(this.props);
    return (
      <>
        {this.state.isLoading && <Loader />}
        <ul className={css.ImageGallery}>
          {this.state.images.map(item => (
            <ImageGalleryItem
              toggleModal={this.toggleModal}
              id={item.id}
              key={item.id}
              web={item.webformatURL}
              tags={item.tags}
              largeImageURL={item.largeImageURL}
            />
          ))}
        </ul>
        {this.state.activeImage && (
          <ModalForImage
            tags={this.state.activeImage.tags}
            toggleModal={this.toggleModal}
            largeImageURL={this.state.activeImage}
          />
        )}
        {this.state.totalHits > this.state.images.length && (
          <Button onAddImg={this.props.handleMore} />
        )}
      </>
    );
  }
}
ImageGallery.protoTypes = {
  searchImageByName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
