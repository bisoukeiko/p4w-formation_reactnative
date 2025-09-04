import React, { Component } from 'react';
import handleClicks from './HandleClicks';
import frieza from '../Frieza.jpg';

class Frieza extends Component {

  render() {

    const {clickHandle, backGround} = this.props;


    return (
      <div className={`col ${backGround}`}>

        <img onClick={clickHandle} src={frieza} alt='frieza' className='w-50'/><br />
        
      </div>
    )
  }
}

export default handleClicks(Frieza);
