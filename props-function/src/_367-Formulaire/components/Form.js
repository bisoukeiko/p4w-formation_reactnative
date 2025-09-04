import { Component } from "react";
import Cars from "./Cars";

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: ""
    }

    handlePeusdo = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }

    handleComments = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log('xxxx');
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comment}`);
    }

    render() {
        return(
            <div>
                <Cars color={this.state.color} height="400" />
                <h1>Commentaire</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Peudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePeusdo}/>
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <label>Commentaire</label>
                        <textarea vlue={this.state.comment} onChange={this.handleComments}></textarea>
                    </div>

                    <button>Valider</button>
                </form>


            </div>
        )
    }
}

export default Form;