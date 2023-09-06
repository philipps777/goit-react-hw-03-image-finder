import { Component } from 'react';
import { Input, SearchBarHeader, Button } from './Searchbar.styled';
import { SearchBarForm } from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchBarHeader className="searchBar">
        <SearchBarForm className="form" onSubmit={this.handleSubmit}>
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchBarForm>
      </SearchBarHeader>
    );
  }
}
