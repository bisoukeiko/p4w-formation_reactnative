import React, { Component } from 'react';
import goku from '../Goku.jpg';

class Goku extends Component {

  render() {

    const {hits, addOne, name} = this.props;

    return (
      <div className='col' >

        <img src={goku} alt='goku' className='w-25'/><br />

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

export default Goku;
