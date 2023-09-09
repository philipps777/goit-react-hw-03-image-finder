import { Component } from 'react';
import { fetchData } from './api';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import toast, { Toaster } from 'react-hot-toast';
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
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    try {
      const { query, page } = this.state;

      this.setState({ loading: true });

      const images = await fetchData(query, page);
      const { hits, totalHits } = images;

      if (hits.length === 0) {
        toast('No images found.');
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        totalHits,
        loadMore: page < Math.ceil(images.totalHits / 12),
      }));
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

  render() {
    const { images, loading, currentImage, isModalOpen, loadMore } = this.state;

    return (
      <Wrapper className="App">
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {loadMore && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal
            largeImageURL={currentImage}
            onClose={this.handleCloseModal}
            isOpen={isModalOpen}
          />
        )}
        <Toaster />
      </Wrapper>
    );
  }
}
