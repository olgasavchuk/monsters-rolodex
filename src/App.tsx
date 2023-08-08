import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log('render')

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    console.log('Effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    console.log('Effect newFilteredMonster fired')
    const newFilteredMonster = monsters.filter((m: { name: string, id: string, email: string }) => m.name.toLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonster)
  }, [monsters, searchField])

  const onSearchChange = (event: { target: { value: string; }; }) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }


  return (
    <div className='App'>
      <h1 className={'page-title'}>Monsters</h1>
      <SearchBox onChangeHandler={onSearchChange} className={'monsters-search-box'} placeholder={'search monsters'}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
