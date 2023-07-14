import React, {Component} from 'react';

class SearchBox extends Component<any, any>{

  render() {
    return (
      <input
      className = {this.props.className}
      type ='search'
      placeholder = {this.props.placeHolder}
      onChange = { this.props.onChangeHandler }
    />
    )
  }
}

export default SearchBox