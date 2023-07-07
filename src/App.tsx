import React, {Component} from 'react';
import './App.css';

class App extends Component<{}, { monsters: {name: string, id: string}[] }> {
    constructor() {
        // @ts-ignore
        super();

        this.state = {
            monsters: [],
        }
    }

     componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => {
              this.setState(
                () => {
                    return { monsters: users}
                },
                () => {
                    console.log(this.state)
                }
              )
          })
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map(m => <div><h1 key={m.id}>{m.name}</h1></div>)
                }
            </div>
        );
    }
}

export default App;
