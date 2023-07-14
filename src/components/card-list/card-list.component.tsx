import React, {Component} from 'react';
import './card-list.styles.css'
import CardContainer from "../card-container/card-container.component";

class CardList extends Component<{ items: { id: string, name: string, email: string }[] }, any> {

  render() {
    const {items} = this.props;

    return <div className='card-list'>
      {
        items.map(item => {
          const {id, name, email} = item
          return <CardContainer id={id} name={name} email={email} />
        })
      }
    </div>;
  }
}

export default CardList;