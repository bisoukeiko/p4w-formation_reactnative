import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Toto',
      step: 1
    }

    console.log(`Etap ${this.state.step} : je suis dans le constructor()`);
  }
  
  componentDidMount = () => {
    console.log(`Etap ${this.state.step} : je suis dans le componentDidMount()`);

    this.setState({
      name: this.props.name,
      step: this.state.step +1
    })

    console.log(`Etap ${this.state.step} : setState() a changé le state le componentDidMount()`);
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log(`Etap ${this.state.step} : je suis dans le componentDidUpdate()`);
    console.log(prevState);
    console.log(this.state);
  }
  
  componentWillUnmount = () => {
    console.log('je suis dans le componentWillUnmount()')
  }
  

  render() {

      console.log(`Etap ${this.state.step} : je suis dans le render()`)

      return (
          <div className='borderBox'>
              {console.log(`Etap ${this.state.step} : jMise à jour de DOM`)}
              <p>Chargement: {this.state.step}</p>
              <p>Nom: {this.state.name}</p>



              {/* <ChildComponent /> */}
          </div>
      )
  }
}

export default LifeCycle;

