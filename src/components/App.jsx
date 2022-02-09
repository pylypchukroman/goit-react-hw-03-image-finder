import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import { getImage } from 'utils/imageAPI';
import Button from './Button/Button';
import { Rings } from 'react-loader-spinner';

class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search && this.state.search) {
      this.setState({ isLoading: true, error: null });
      getImage(this.state.search)
        .then(images => this.setState({ images }))
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoading: true, error: null });
      getImage(this.state.search, this.state.page)
        .then(images =>
          this.setState({ images: [...prevState.images, ...images] })
        )
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  changeSearch = search => {
    this.setState({ search, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, search, error } = this.state;
    return (
      <div>
        <Searchbar changeSearch={this.changeSearch} />
        {error && <p>{error}</p>}
        {!error && (
          <>
            <ImageGallery images={images} />
            {isLoading ? (
              <Rings heigth="100" width="100" color="red" />
            ) : (
              search && <Button handleLoadMore={this.handleLoadMore} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
