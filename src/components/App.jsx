import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchImageByName: '',
    images: null,
    page: 1,
  };
  handleFormSubmit = searchImageByName => {
    this.setState({ searchImageByName, page: 1 });
  };

  handleMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchImageByName={this.state.searchImageByName}
          page={this.state.page}
          handleMore={this.handleMore}
        />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
