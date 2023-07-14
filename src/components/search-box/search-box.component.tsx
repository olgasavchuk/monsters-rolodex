import React, {Component} from 'react';
import './search-box.styles.css';

class SearchBox extends Component<any, any>{

  render() {
    return (
      <input
      className = {`search-box ${this.props.className}`} //search-box class name is a generic one
      type ='search'
      placeholder = {this.props.placeholder}
      onChange = { this.props.onChangeHandler }
    />
    )
  }
}

export default SearchBox