import { Component } from 'react';
import { fetchData } from './api';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { toast } from 'react-toastify';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: 0,
    loading: false,
    currentImage: null,
    isModalOpen: false,
  };

  componentDidMount() {
    this.fetchData();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.query !== this.state.query ||
        prevState.page !== this.state.page) &&
      this.state.query.trim() !== ''
    ) {
      this.setState({
        loading: true,
      });
      try {
        const images = await fetchData(this.state);
        if (this.state.page === 1) {
          this.setState({
            totalHits: images.totalHits - 12,
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      } catch (error) {
        toast.error('Error! Something went wrong!');
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  fetchData = async () => {
    try {
      const { query, page } = this.state;
      if (query.trim() === '') {
        return;
      }

      this.setState({ loading: true });

      const images = await fetchData(query, page);

      if (page === 1) {
        this.setState({ images });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error! Something went wrong!');
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

  handleImageClick = largeImageURL => {
    this.setState({ currentImage: largeImageURL, isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, currentImage: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleKeyDown = event => {
    if (event.key === 'Escape' && this.state.isModalOpen) {
      this.handleCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget && this.state.isModalOpen) {
      this.handleCloseModal();
    }
  };

  render() {
    const { images, loading, currentImage, isModalOpen } = this.state;

    return (
      <Wrapper className="App">
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal
            largeImageURL={currentImage}
            onClose={this.handleCloseModal}
            onOverlayClick={this.handleOverlayClick}
          />
        )}
      </Wrapper>
    );
  }
}
