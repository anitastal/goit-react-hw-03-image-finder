import { Component } from 'react';
import { toast } from 'react-toastify';
import css from './Search.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchImageByName: '',
  };

  handleChangeName = e => {
    this.setState({ searchImageByName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchImageByName.trim() === '') {
      toast.error('Please enter a valid query');

      return;
    }
    this.props.onSubmit(this.state.searchImageByName);
    this.setState({ searchImageByName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button className={css.SearchForm_button} type="submit">
            <span>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            name="imageName"
            value={this.state.searchImageByName}
            onChange={this.handleChangeName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
