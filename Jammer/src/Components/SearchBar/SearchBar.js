import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor (props) {
      super (props);
      this.search = this.search.bind (this);
      this.handleTermChange = this.handleTermChange.bind (this);
  }

  search() {
    if (!this.state.term) return;
    if (this.state.term.length===0) return;
    this.props.onSearch (this.state.term);
  }

  handleTermChange (event) {
    this.setState ({
      term: event.target.value
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search} >SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
