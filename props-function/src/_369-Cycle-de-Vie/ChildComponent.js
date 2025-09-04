import React, { Component } from 'react'

class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }

        console.log('je suis dans le constructor() ENFANT');
    }
  
    componentDidMount = () => {
        console.log('je suis dans le componentDidMount() ENFANT');
    }


  render() {

    console.log('je suis dans le render() ENFANT')

    return (
      <div>
        {console.log('Mise à jour DOM dans composant ENFANT')}
        Hello World
      </div>
    )
  }
}

export default ChildComponent;
