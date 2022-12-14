import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchContainer,
  SearchForm,
  SearchButton,
  Label,
  Input,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSearch = event => {
    event.preventDefault();
    document.getElementById('searchForm').reset();
    const { request } = this.state;

    if (request.trim() === '') {
      toast.error('Type your search request');
      return;
    }
    this.props.onSearch(request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <SearchContainer>
        <SearchForm id="searchForm" onSubmit={this.handleSearch}>
          <SearchButton type="submit">
            <FaSearch />
            <Label></Label>
          </SearchButton>
          <Input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchContainer>
    );
  }
}
