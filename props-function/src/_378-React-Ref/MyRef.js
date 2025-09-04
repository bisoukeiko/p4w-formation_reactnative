import React, { Component } from 'react'

class MyRef extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value : ''
      }

      this.myTitle = React.createRef();
    //   console.log(this.myTitle);

      this.myInput = React.createRef();

    }
    
    // update = event => {
    //     this.setState({
    //         value:event.target.value
    //     })
    // }

    // componentDidUpdate = (prevProps, prevState) => {
    //   this.myTitle.current.style.color = 'red';
    // }
    
    // componentDidMount = () => {
    //   this.myInput.current.focus();
    // }
    
    // handleClick = () => {
    //     console.log(this.myInput.current.value);
    // }

        
    addFocus = () => {
      this.myInput.current.focus();
    }


    render() {
        return (
            <div>
                <input ref={this.myInput}type='txte' />
                
            </div>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
    //             <input ref={this.myInput} type='txte' value={this.state.value} onChange={this.update}/>

    //             <input ref={this.myInput}type='txte' />
    //             <button onClick={this.handleClick}>Valider</button>

    //         </div>
    //     );
    // }
}

export default MyRef;
