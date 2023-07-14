import React, {Component} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(
          () => {
            return {monsters: users}
          },
        )
      })*/
  }

  onSearchChange = (event: { target: { value: string; }; }) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(
      () => {
        return {searchField}
      },
    )
  }
  render() {
    console.log('render')

    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    return (
      <div className='App'>
        <SearchBox onChangrHandler={onSearchChange} className={'search-box'} placeholder={'search monsters'}/>
        <CardList items={[...monsters.filter(m => m.name.toLowerCase().includes(searchField))]} />
      </div>
    );
  }
}

export default App;
