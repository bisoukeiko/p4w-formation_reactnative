import { Component } from "react";

class Result extends Component {
    state = {
        name: "Mario",
        winner: true
    }

    render() {

        return this.state.winner && <h1>Bravo {this.state.name}</h1>
        // return this.state.winner ? <h1>Bravo {this.state.name}</h1> : ''


        // return this.state.winner ? <h1>Bravo {this.state.name}</h1> : <h1>raté!!!</h1>

        // return(
        //     this.state.winner ? (
        //         <h1>Bravo {this.state.name}</h1>
        //     ) : (
        //         <h1>raté!!!</h1>
        //     )
        // )
    }









    // render() {
    //     let result;

    //     if(this.state.winner) {
    //         result = <h1>Bravo {this.state.name}</h1>
    //     } else {
    //         result = <h1>raté!!!</h1>
    //     }

    //     return result;
    // }
}

export default Result;