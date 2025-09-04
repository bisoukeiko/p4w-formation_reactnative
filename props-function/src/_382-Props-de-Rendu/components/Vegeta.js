import React, { Component } from 'react';
import vegeta from '../Vegeta.jpg';

class Vegeta extends Component {

  render() {

    const {hits, addOne, name} = this.props;

    return (
      <div className='col' >

        <img src={vegeta} alt='vegeta' className='w-50'/><br />

        {/* <button onClick={addOne} className='btn btn-success m-3'>{this.props.render(this.state.saiyan)} Frappe</button> */}
        <button onClick={addOne} className='btn btn-success m-3'>{name} Frappe</button>
        
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th scope='col'>Coups</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{hits}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Vegeta;
