import { Component } from 'react';
import Cars from './Cars';

class Mycars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: '2000'},
            {name: 'Mercedes', color: 'red', year: '2010'},
            {name: 'Peugeot', color: 'green', year: '2018'},
        ],
        titre: 'Mon catalogue voitures 2'
    }

    addTenYears = () => {
        // console.log('activé');

        const updatedState = this.state.voitures.map((param) => {
            return param.year -=10 ;  
        })

        this.setState({
            updatedState
        })
    }



    render() {

        // console.log(this);
        const year = new Date().getFullYear();

        return (

            <div>
                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}> + 10 ans </button>
{/* 
                <Cars color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Cars>
                <Cars color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Cars>
                <Cars color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Cars>
 */}

                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                            <div key={index}>
                                <Cars nom={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default Mycars;