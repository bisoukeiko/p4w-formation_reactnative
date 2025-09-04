import React, { Component } from 'react';
import handleClicks from './HandleClicks';
import vegeta from '../Vegeta.jpg';

class Vegeta extends Component {

  render() {

    const {clickHandle, backGround} = this.props;

    return (
      <div className={`col ${backGround}`}>

        <img onClick={clickHandle} src={vegeta} alt='vegeta' className='w-50'/><br />
        
      </div>
    )
  }
}

export default handleClicks(Vegeta);
