import { Component } from 'react';
import Cars from './Cars';

class Mycars extends Component {

    noCopy = () => {
        alert('merci de ne pas copier le texte');
    }

    addStyle= (e) => {
        // console.log(e.target);

        if(e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        } else {
            e.target.classList.add('styled');
        }
    }

    render() {

        // console.log(this);
        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

                <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <Cars color='red'>Ford</Cars>
                <Cars>Mercedes</Cars>
                <Cars color='green'></Cars>
            </div>
        )
    }
}

export default Mycars;