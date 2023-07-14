import React, {useState} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log('render')

  const [searchField, setSearchField] = useState('')
  console.log(searchField)

  const onSearchChange = (event: { target: { value: string; }; }) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className={'page-title'}>Monsters</h1>
      <SearchBox onChangeHandler={onSearchChange} className={'monsters-search-box'} placeholder={'search monsters'}/>
      {/*<CardList items={[...monsters.filter(m => m.name.toLowerCase().includes(searchField))]} />*/}
    </div>
  )
}

/*class App extends Component<{}, { monsters: { name: string, id: string, email: string,  }[], searchField: string }> {
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
        )
      })
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
        <SearchBox onChangeHandler={onSearchChange} className={'monsters-search-box'} placeholder={'search monsters'}/>
        <CardList items={[...monsters.filter(m => m.name.toLowerCase().includes(searchField))]} />
      </div>
    );
  }
}*/

export default App;
