import { Component } from 'react';
import { fetchData } from 'components/api';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery'; // Предполагается, что у вас есть компонент ImageGallery
import { Button } from 'components/Button/Button'; // Предполагается, что у вас есть компонент Button
// Предполагается, что у вас есть компонент Loader
import { Modal } from './Modal/Modal';
import LoaderComponent from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    currentImage: null,
    isModalOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchData();
    }
  }

  fetchPixabayData = async (query, page) => {
    try {
      const images = await fetchData(query, page);
      return images;
    } catch (error) {
      throw error;
    }
  };

  fetchData = async () => {
    try {
      this.setState({ loading: true });
      const { query, page } = this.state;
      const images = await this.fetchPixabayData(query, page);

      if (page === 1) {
        this.setState({ images });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleImageClick = imageUrl => {
    this.setState({ currentImage: imageUrl, isModalOpen: true });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, loading, currentImage, isModalOpen } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <LoaderComponent />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal imageUrl={currentImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
