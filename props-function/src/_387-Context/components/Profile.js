import React, { Component } from 'react'
import lisa from '../lisa.jpg';
import ProfileData from './ProfileData';

class Profile extends Component {
  render() {

    return (
      <div className='container'>
            <h1>{this.props.info.name}</h1>
            <img src={lisa} alt='lisa' className='img-thumbnail mb-3 w-25' />

            <ProfileData welcome={this.props.info}/>
      </div>
    )
  }
}

export default Profile;
