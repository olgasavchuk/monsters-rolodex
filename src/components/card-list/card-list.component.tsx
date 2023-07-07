import React, {Component} from 'react';

class CardList extends Component<{ items: {id: string, name: string}[] }, any> {

  render() {
    const { items } = this.props;

    return <div> {
      items.map(item => <div><h3 key={item.id}>{item.name}</h3></div>)
    }</div>;
  }
}

export default CardList;