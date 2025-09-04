import React, { Component } from 'react';
import './App.css';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import AddHits from './components/AddHits';


class App extends Component {

  render() {
      return (
        <div className="container text-center">
            <h1>Goku Vs Vegeta</h1>

            <div className="row">

                {/* <Vegeta render={(saiyan) => saiyan && 'Vegeta'}/>
                <Goku name='Goku'/> */}

                <AddHits 
                  render={(hits, addOne, saiyan) => (
                      saiyan.vegeta && <Vegeta hits={hits} addOne={addOne} name='Vegeta' />
                  )}
                />

                <AddHits 
                  render={(hits, addOne, saiyan) => (
                      saiyan.goku && <Goku hits={hits} addOne={addOne} name='Goku' />
                  )}
                />

            </div>
        </div>
      );
  }
}

export default App;