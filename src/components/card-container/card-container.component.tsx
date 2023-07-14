import React, {Component} from 'react';
import './card-container.styles.css'

class CardContainer extends Component<{ id: string, name: string, email: string }, any> {

  render() {
    return <div className='card-container' key={this.props.id}>
    <img alt={`monster ${this.props.name}`} src={`https://robohash.org/${this.props.id}?set=set3&size=180x180`}/>
    <h2>{this.props.name}</h2>
    <p>{this.props.email}</p>
    </div>
  }
}

export default CardContainer;