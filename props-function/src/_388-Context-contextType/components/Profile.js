import React, { Component } from 'react'
import lisa from '../lisa.jpg';
import ProfileData from './ProfileData';
import MyContext from './MyContext';

class Profile extends Component {
  render() {

    let value = this.context;
    // console.log(value);

    return (
      <div className='container'>
            <h1>{this.props.info.name}</h1>
            <p>Age: {value.age} ans</p>
            <img src={lisa} alt='lisa' className='img-thumbnail mb-3 w-25' />

            <ProfileData welcome={this.props.info}/>
      </div>
    )
  }
}

Profile.contextType = MyContext;

// console.log(Profile.contextType)

export default Profile;
