import React, { Children, Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Button } from 'components/Button';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  static defaultProps = {};
  KEY = '30498969-67220c0dc8cbfcdc961351d72';
  static propTypes = {};

  state = {
    request: '',
    hits: [],
    page: 1,
    loading: false,
    picked: {},
  };

  handleSearch = request => {
    this.setState({ request });
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?key=${this.KEY}&q=${request}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(({ hits }) => this.setState({ hits }))
      .catch(error => {
        console.log(error);
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleLoadMore = () => {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?key=${this.KEY}&q=${
        this.state.request
      }&image_type=photo&orientation=horizontal&per_page=12&page=${
        this.state.page + 1
      }`
    )
      .then(res => res.json())
      .then(({ hits }) =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }))
      )
      .catch(error => {
        console.log(error);
      })
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <Container>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={this.state.hits}>{Children}</ImageGallery>
        <Button images={this.state.hits} onClick={this.handleLoadMore} />

        <ToastContainer autoClose={3000} />
        {this.state.loading && <Loader />}
      </Container>
    );
  }
}
