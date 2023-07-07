import React, {Component} from 'react';
import './App.css';

class App extends Component<{}, { monsters: { name: string, id: string }[], searchField: string }> {
  constructor() {
    // @ts-ignore
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(
          () => {
            return {monsters: users}
          },
          () => {
            console.log(this.state)
          }
        )
      })
  }

  onSearchChange = (event: { target: { value: string; }; }) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(
      () => {
        return {searchField}
      },
      () => {
        console.log(this.state)
      }
    )
  }
  render() {
    console.log('render')

    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={ onSearchChange }
        />
        {
          [...monsters.filter(m => m.name.toLowerCase().includes(searchField))]
            .map(m => <div><h3 key={m.id}>{m.name}</h3></div>)
        }
      </div>
    );
  }
}

export default App;
