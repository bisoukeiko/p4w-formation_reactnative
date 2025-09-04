import React, { Component } from 'react';
import MyRef from './MyRef';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.refComp = React.createRef();
  }

  handleClick = () => {
    // console.log(this.refComp.current);
    this.refComp.current.focus();
  }
  

  render() {

      return (
        <div className="App">
            <MyRef name='Toto' ref={this.refComp} />

            <button onClick={this.handleClick}>Valider</button>
        </div>
      );
  }
}

export default App;