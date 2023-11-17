import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: '',
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Gifs:
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
