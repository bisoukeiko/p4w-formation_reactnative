import React, { Component } from 'react';
import handleClicks from './HandleClicks';
import goku from '../Goku.jpg';


class Goku extends Component {

  render() {

    const {clickHandle, backGround} = this.props;

    return (
      <div className={`col ${backGround}`}>

        <img onClick={clickHandle} src={goku} alt='goku' className='w-25'/><br />
        
      </div>
    )
  }
}

export default handleClicks(Goku);
